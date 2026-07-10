import Link from "next/link";

import { articleHref } from "@/app/lib/rome";

export type StringTheoryTocArticle = {
  readonly slug: string;
  readonly title: string;
  readonly sourcePath: string;
  readonly deck?: string;
};

export type StringTheoryTocProps = {
  readonly articles: readonly StringTheoryTocArticle[];
  readonly heading?: string;
};

type CourseArticle = StringTheoryTocArticle & {
  isOverview: boolean;
  lessonSortKey: string;
};

type CourseModule = {
  key: string;
  folderName: string;
  label: string;
  order: number;
  overview?: CourseArticle;
  lessons: CourseArticle[];
};

type CoursePart = {
  key: string;
  folderName: string;
  label: string;
  order: number;
  modules: CourseModule[];
};

const naturalCollator = new Intl.Collator("en", {
  numeric: true,
  sensitivity: "base",
});

const dash = "[-\u2013\u2014]";
const partPattern = new RegExp(`^Part\\s+([IVXLCDM]+|\\d+)\\s*(?:${dash}\\s*)?(.*)$`, "i");
const numberedPattern = new RegExp(`^(\\d+)\\s*(?:${dash}|[.:])?\\s*(.*)$`);
const overviewPattern = new RegExp(
  `^0+\\s*(?:${dash}|[.:])?\\s*(?:module\\s+|chapter\\s+)?overview\\b`,
  "i",
);

function romanToNumber(value: string) {
  if (/^\d+$/.test(value)) return Number(value);

  const symbols: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const roman = value.toUpperCase();
  let total = 0;

  for (let index = 0; index < roman.length; index += 1) {
    const current = symbols[roman[index]];
    const next = symbols[roman[index + 1]] || 0;
    if (!current) return Number.POSITIVE_INFINITY;
    total += current < next ? -current : current;
  }

  return total || Number.POSITIVE_INFINITY;
}

function normalizeDashSpacing(value: string) {
  return value.replace(/\s+[-\u2013\u2014]\s+/g, " — ").trim();
}

function partDetails(folderName: string) {
  const match = folderName.match(partPattern);
  if (!match) return null;

  const suffix = match[2].trim();
  return {
    label: normalizeDashSpacing(`Part ${match[1].toUpperCase()}${suffix ? ` — ${suffix}` : ""}`),
    order: romanToNumber(match[1]),
  };
}

function moduleDetails(folderName: string) {
  const match = folderName.match(numberedPattern);
  if (!match) {
    return {
      label: normalizeDashSpacing(folderName),
      order: Number.POSITIVE_INFINITY,
    };
  }

  const number = match[1];
  const name = match[2].trim();
  return {
    label: normalizeDashSpacing(`${number}${name ? ` — ${name}` : ""}`),
    order: Number(number),
  };
}

function parseCourseArticle(article: StringTheoryTocArticle) {
  const segments = article.sourcePath
    .replaceAll("\\", "/")
    .split("/")
    .map((segment) => segment.trim())
    .filter(Boolean);
  const rootIndex = segments.findIndex((segment) => segment.toLowerCase() === "string theory");
  if (rootIndex < 0) return null;

  const partFolder = segments[rootIndex + 1];
  const moduleFolder = segments[rootIndex + 2];
  const fileSegments = segments.slice(rootIndex + 3);
  const part = partFolder ? partDetails(partFolder) : null;
  if (!part || !moduleFolder || fileSegments.length === 0) return null;

  const moduleInfo = moduleDetails(moduleFolder);
  const filename = fileSegments.at(-1) || "";
  const stem = filename.replace(/\.md$/i, "").trim();
  const isOverview = overviewPattern.test(stem);

  return {
    partFolder,
    part,
    moduleFolder,
    module: moduleInfo,
    courseArticle: {
      ...article,
      isOverview,
      lessonSortKey: [...fileSegments.slice(0, -1), stem].join("/"),
    } satisfies CourseArticle,
  };
}

function compareNamed(
  left: { order: number; folderName: string },
  right: { order: number; folderName: string },
) {
  return left.order - right.order || naturalCollator.compare(left.folderName, right.folderName);
}

function buildCourse(articles: readonly StringTheoryTocArticle[]) {
  const partsByName = new Map<string, CoursePart>();
  const modulesByPath = new Map<string, CourseModule>();

  for (const article of articles) {
    const parsed = parseCourseArticle(article);
    if (!parsed) continue;

    let part = partsByName.get(parsed.partFolder);
    if (!part) {
      part = {
        key: parsed.partFolder,
        folderName: parsed.partFolder,
        label: parsed.part.label,
        order: parsed.part.order,
        modules: [],
      };
      partsByName.set(parsed.partFolder, part);
    }

    const moduleKey = `${parsed.partFolder}/${parsed.moduleFolder}`;
    let courseModule = modulesByPath.get(moduleKey);
    if (!courseModule) {
      courseModule = {
        key: moduleKey,
        folderName: parsed.moduleFolder,
        label: parsed.module.label,
        order: parsed.module.order,
        lessons: [],
      };
      modulesByPath.set(moduleKey, courseModule);
      part.modules.push(courseModule);
    }

    if (parsed.courseArticle.isOverview && !courseModule.overview) {
      courseModule.overview = parsed.courseArticle;
    } else {
      courseModule.lessons.push(parsed.courseArticle);
    }
  }

  return [...partsByName.values()]
    .sort(compareNamed)
    .map((part) => ({
      ...part,
      modules: part.modules.sort(compareNamed).map((courseModule) => ({
        ...courseModule,
        lessons: courseModule.lessons.sort((left, right) =>
          naturalCollator.compare(left.lessonSortKey, right.lessonSortKey),
        ),
      })),
    }));
}

export function StringTheoryToc({
  articles,
  heading = "The course, chapter by chapter",
}: StringTheoryTocProps) {
  const parts = buildCourse(articles);
  const moduleCount = parts.reduce((total, part) => total + part.modules.length, 0);
  const lessonCount = parts.reduce(
    (partTotal, part) =>
      partTotal +
      part.modules.reduce(
        (moduleTotal, courseModule) =>
          moduleTotal + courseModule.lessons.length + (courseModule.overview ? 1 : 0),
        0,
      ),
    0,
  );
  const headingId = "string-theory-course-contents";

  return (
    <section className="string-theory-toc section-block" aria-labelledby={headingId}>
      <header className="string-theory-toc__header">
        <div>
          <p className="eyebrow">A structured path through the subject</p>
          <h2 id={headingId}>{heading}</h2>
        </div>
        <p className="string-theory-toc__summary">
          {parts.length} parts · {moduleCount} chapters · {lessonCount} readings
        </p>
      </header>

      {parts.length > 0 ? (
        <nav className="string-theory-toc__navigation" aria-label="String Theory course chapters">
          <ol className="string-theory-toc__parts">
            {parts.map((part, partIndex) => {
              const partHeadingId = `string-theory-part-${partIndex + 1}`;

              return (
                <li className="string-theory-part" key={part.key}>
                  <section aria-labelledby={partHeadingId}>
                    <header className="string-theory-part__header">
                      <p className="string-theory-part__number" aria-hidden="true">
                        {String(partIndex + 1).padStart(2, "0")}
                      </p>
                      <div>
                        <h3 id={partHeadingId}>{part.label}</h3>
                        <p>
                          {part.modules.length} {part.modules.length === 1 ? "chapter" : "chapters"}
                        </p>
                      </div>
                    </header>

                    <ol className="string-theory-part__modules">
                      {part.modules.map((courseModule, moduleIndex) => {
                        const moduleHeadingId = `string-theory-part-${partIndex + 1}-module-${moduleIndex + 1}`;

                        return (
                          <li className="string-theory-module" key={courseModule.key}>
                            <article aria-labelledby={moduleHeadingId}>
                              <header className="string-theory-module__header">
                                <p className="string-theory-module__number" aria-hidden="true">
                                  {String(courseModule.order).padStart(2, "0")}
                                </p>
                                <h4 id={moduleHeadingId}>{courseModule.label}</h4>
                              </header>

                              {courseModule.overview ? (
                                <Link
                                  className="string-theory-module__overview"
                                  href={articleHref(courseModule.overview.slug)}
                                >
                                  <span className="string-theory-module__overview-label">
                                    Begin here
                                  </span>
                                  <strong>Chapter overview</strong>
                                  <span className="string-theory-module__overview-deck">
                                    {courseModule.overview.deck || courseModule.overview.title}
                                  </span>
                                  <span className="read-more">Read the overview</span>
                                </Link>
                              ) : null}

                              {courseModule.lessons.length > 0 ? (
                                <ol className="string-theory-module__lessons">
                                  {courseModule.lessons.map((lesson, lessonIndex) => (
                                    <li className="string-theory-module__lesson" key={lesson.slug}>
                                      <Link href={articleHref(lesson.slug)}>
                                        <span
                                          className="string-theory-module__lesson-number"
                                          aria-hidden="true"
                                        >
                                          {String(lessonIndex + 1).padStart(2, "0")}
                                        </span>
                                        <span className="string-theory-module__lesson-copy">
                                          <strong>{lesson.title}</strong>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ol>
                              ) : null}
                            </article>
                          </li>
                        );
                      })}
                    </ol>
                  </section>
                </li>
              );
            })}
          </ol>
        </nav>
      ) : (
        <p className="string-theory-toc__empty">
          No chapter folders were found in the published String Theory collection.
        </p>
      )}
    </section>
  );
}
