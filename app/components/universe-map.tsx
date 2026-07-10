"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

export type UniverseMapNode = {
  slug: string;
  title: string;
  topic: string;
  tags?: readonly string[];
  outgoing: readonly string[];
};

export type UniverseMapProps = {
  nodes: readonly UniverseMapNode[];
  className?: string;
  height?: number | string;
  label?: string;
};

type PositionedNode = UniverseMapNode & {
  index: number;
  topicIndex: number;
  x: number;
  y: number;
  radius: number;
};

type Edge = {
  source: number;
  target: number;
};

type TopicGroup = {
  color: string;
  count: number;
  labelX: number;
  labelY: number;
  name: string;
  radius: number;
};

type TopicAnchor = {
  radius: number;
  x: number;
  y: number;
};

type TagGroup = {
  members: number[];
  strength: number;
};

type SpatialIndex = {
  cellSize: number;
  cells: Map<string, number[]>;
};

type Bounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

type MapLayout = {
  bounds: Bounds;
  edges: Edge[];
  groups: TopicGroup[];
  neighbors: Array<Set<number>>;
  nodes: PositionedNode[];
  spatialIndex: SpatialIndex;
};

type Viewport = {
  centerX: number;
  centerY: number;
  scale: number;
};

type Size = {
  height: number;
  width: number;
};

type PointerGesture = {
  moved: boolean;
  pointerId: number;
  startViewport: Viewport;
  startX: number;
  startY: number;
};

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const MIN_FRAME_HEIGHT = 384;
const NODE_SPACING = 8.5;
const REPULSION_RANGE = 34;
const CROSS_TOPIC_REPULSION_RANGE = 58;
const SPATIAL_CELL_SIZE = REPULSION_RANGE;
const GALAXY_GAP = 38;

const TOPIC_COLORS = [
  "--viz-series-1",
  "--viz-series-2",
  "--viz-series-3",
  "--viz-series-4",
  "--viz-series-5",
  "--viz-series-6",
  "--viz-series-7",
  "--viz-series-8",
  "--viz-series-9",
  "--viz-series-10",
  "--viz-series-11",
  "--viz-series-12",
] as const;

const figureStyle: CSSProperties = {
  margin: 0,
  borderTop: "3px double var(--rule-strong)",
  borderBottom: "1px solid var(--rule-strong)",
  background: "color-mix(in srgb, var(--paper-raised) 68%, transparent)",
  fontFamily: "var(--font-editorial)",
};

const metaStyle: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: "0.75rem 1.5rem",
  flexWrap: "wrap",
  padding: "0.75rem 0.9rem 0.65rem",
  borderBottom: "1px solid var(--rule)",
  fontFamily: "var(--font-editorial)",
};

const legendStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.68rem",
  alignItems: "stretch",
  margin: 0,
  padding: "0.9rem 0.8rem",
  borderRight: "1px solid var(--rule)",
  color: "var(--ink-soft)",
  fontFamily: "var(--font-editorial)",
  fontSize: "0.88rem",
  fontWeight: 500,
  letterSpacing: "0.005em",
  lineHeight: 1.12,
  listStyle: "none",
  overflowY: "auto",
  scrollbarWidth: "thin",
};

const fallbackSummaryStyle: CSSProperties = {
  padding: "0.7rem 0.9rem",
  color: "var(--ink-soft)",
  fontFamily: "var(--font-editorial)",
  fontSize: "0.82rem",
  fontWeight: 500,
  letterSpacing: "0.01em",
  cursor: "pointer",
};

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function hashString(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function normalizeTag(tag: string) {
  return tag.trim().replace(/^#/, "").toLocaleLowerCase("en-US");
}

function spatialKey(x: number, y: number) {
  return `${x}:${y}`;
}

function buildSpatialIndex(nodes: readonly PositionedNode[], cellSize = SPATIAL_CELL_SIZE) {
  const cells = new Map<string, number[]>();
  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    const cellX = Math.floor(node.x / cellSize);
    const cellY = Math.floor(node.y / cellSize);
    const key = spatialKey(cellX, cellY);
    const cell = cells.get(key);
    if (cell) cell.push(index);
    else cells.set(key, [index]);
  }
  return { cellSize, cells };
}

function galaxyRadius(count: number) {
  // Square-root area scaling lets large sections earn more room without
  // allowing one prolific subject to determine the entire map.
  return 24 + Math.pow(Math.max(1, count), 0.48) * 8.4;
}

function packTopicAnchors(
  topics: readonly { count: number; name: string }[],
): TopicAnchor[] {
  if (!topics.length) return [];

  const anchors: TopicAnchor[] = [
    { radius: galaxyRadius(topics[0].count), x: 0, y: 0 },
  ];

  for (let topicIndex = 1; topicIndex < topics.length; topicIndex += 1) {
    const topic = topics[topicIndex];
    const radius = galaxyRadius(topic.count);
    const angleOffset = ((hashString(`${topic.name}:galaxy`) % 3_600) / 3_600) * Math.PI * 2;
    let best: TopicAnchor | null = null;
    let bestScore = Number.POSITIVE_INFINITY;

    // Candidate centers sit tangent to galaxies already placed. This small
    // topic-level pass is deterministic and bounded by the number of topics;
    // document-level forces remain on the scalable spatial grid below.
    for (let neighborIndex = 0; neighborIndex < anchors.length; neighborIndex += 1) {
      const neighbor = anchors[neighborIndex];
      for (let step = 0; step < 44; step += 1) {
        const angle = angleOffset + step * GOLDEN_ANGLE;
        const gap = GALAXY_GAP + Math.min(12, Math.sqrt(radius * neighbor.radius) * 0.07);
        const distance = radius + neighbor.radius + gap;
        const candidate = {
          radius,
          x: neighbor.x + Math.cos(angle) * distance,
          y: neighbor.y + Math.sin(angle) * distance,
        };
        const overlaps = anchors.some((placed) => {
          const requiredGap =
            GALAXY_GAP + Math.min(12, Math.sqrt(radius * placed.radius) * 0.07);
          return (
            Math.hypot(candidate.x - placed.x, candidate.y - placed.y) <
            radius + placed.radius + requiredGap - 0.01
          );
        });
        if (overlaps) continue;

        // Favor a landscape constellation while retaining enough vertical
        // variation to make cross-galaxy link paths easy to follow.
        const score =
          Math.hypot(candidate.x * 0.76, candidate.y * 1.28) +
          (hashString(`${topic.name}:${neighborIndex}:${step}`) % 101) * 0.0001;
        if (score < bestScore) {
          best = candidate;
          bestScore = score;
        }
      }
    }

    // The tangent search always has open exterior candidates, but retain a
    // deterministic fallback for pathological topic counts or floating-point
    // edge cases.
    if (!best) {
      for (let step = 1; step <= 2_000; step += 1) {
        const angle = angleOffset + step * GOLDEN_ANGLE;
        const distance = (radius + GALAXY_GAP) * Math.sqrt(step);
        const candidate = {
          radius,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
        const clear = anchors.every(
          (placed) =>
            Math.hypot(candidate.x - placed.x, candidate.y - placed.y) >=
            radius + placed.radius + GALAXY_GAP,
        );
        if (clear) {
          best = candidate;
          break;
        }
      }
    }

    anchors.push(best || { radius, x: topicIndex * (radius + GALAXY_GAP), y: 0 });
  }

  return anchors;
}

function iterationCount(nodeCount: number) {
  if (nodeCount <= 500) return 210;
  if (nodeCount <= 2_000) return 145;
  if (nodeCount <= 5_000) return 95;
  if (nodeCount <= 20_000) return 60;
  return 42;
}

function settleWithForces(
  nodes: PositionedNode[],
  edges: readonly Edge[],
  topicAnchors: readonly TopicAnchor[],
  tagGroups: readonly TagGroup[],
) {
  if (nodes.length < 2) return;

  const velocityX = new Float64Array(nodes.length);
  const velocityY = new Float64Array(nodes.length);
  const iterations = iterationCount(nodes.length);

  for (let iteration = 0; iteration < iterations; iteration += 1) {
    const progress = iteration / Math.max(1, iterations - 1);
    const alpha = 0.14 + Math.pow(1 - progress, 1.55) * 0.86;

    // Resolved links are the strongest attractive force in the system.
    for (const edge of edges) {
      const source = nodes[edge.source];
      const target = nodes[edge.target];
      let dx = target.x - source.x;
      let dy = target.y - source.y;
      let distance = Math.hypot(dx, dy);
      if (distance < 0.001) {
        const angle = ((hashString(`${edge.source}:${edge.target}`) % 3_600) / 3_600) * Math.PI * 2;
        dx = Math.cos(angle) * 0.01;
        dy = Math.sin(angle) * 0.01;
        distance = 0.01;
      }
      const crossesTopics = source.topicIndex !== target.topicIndex;
      const restLength = (crossesTopics ? 42 : 19) + source.radius + target.radius;
      const springStrength = crossesTopics ? 0.0062 : 0.017;
      const magnitude = clamp(
        (distance - restLength) * springStrength * alpha,
        -0.5,
        crossesTopics ? 0.58 : 0.95,
      );
      const forceX = (dx / distance) * magnitude;
      const forceY = (dy / distance) * magnitude;
      velocityX[edge.source] += forceX;
      velocityY[edge.source] += forceY;
      velocityX[edge.target] -= forceX;
      velocityY[edge.target] -= forceY;
    }

    // Shared tags act as gentler, many-body affinities. Pulling toward a tag's
    // barycenter avoids materializing every possible tag edge.
    for (const tagGroup of tagGroups) {
      let centerX = 0;
      let centerY = 0;
      for (const index of tagGroup.members) {
        centerX += nodes[index].x;
        centerY += nodes[index].y;
      }
      centerX /= tagGroup.members.length;
      centerY /= tagGroup.members.length;
      const strength = tagGroup.strength * alpha;
      for (const index of tagGroup.members) {
        velocityX[index] += (centerX - nodes[index].x) * strength;
        velocityY[index] += (centerY - nodes[index].y) * strength;
      }
    }

    // Each subject has local gravity. Links and tags can still draw documents
    // toward a galaxy's edge (or make visible bridges), but unrelated sections
    // no longer collapse into one indistinct cloud.
    for (let index = 0; index < nodes.length; index += 1) {
      const node = nodes[index];
      const anchor = topicAnchors[node.topicIndex];
      velocityX[index] += (anchor.x - node.x) * 0.00225 * alpha;
      velocityY[index] += (anchor.y - node.y) * 0.00225 * alpha;
      velocityX[index] -= node.x * 0.000008 * alpha;
      velocityY[index] -= node.y * 0.000008 * alpha;
    }

    // A bounded spatial grid keeps local repulsion near O(n) as the wiki grows.
    // Neighboring documents cannot occupy the same patch of the map, while no
    // quadratic all-pairs pass is needed for thousands of notes.
    const grid = buildSpatialIndex(nodes, CROSS_TOPIC_REPULSION_RANGE);
    for (let index = 0; index < nodes.length; index += 1) {
      const node = nodes[index];
      const cellX = Math.floor(node.x / grid.cellSize);
      const cellY = Math.floor(node.y / grid.cellSize);
      for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
        for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
          const candidates = grid.cells.get(spatialKey(cellX + offsetX, cellY + offsetY));
          if (!candidates) continue;
          for (const otherIndex of candidates) {
            if (otherIndex <= index) continue;
            const other = nodes[otherIndex];
            let dx = other.x - node.x;
            let dy = other.y - node.y;
            let distanceSquared = dx * dx + dy * dy;
            const crossesTopics = node.topicIndex !== other.topicIndex;
            const repulsionRange = crossesTopics
              ? CROSS_TOPIC_REPULSION_RANGE
              : REPULSION_RANGE;
            if (distanceSquared >= repulsionRange * repulsionRange) continue;
            if (distanceSquared < 0.0001) {
              const angle = ((hashString(`${index}|${otherIndex}`) % 3_600) / 3_600) * Math.PI * 2;
              dx = Math.cos(angle) * 0.01;
              dy = Math.sin(angle) * 0.01;
              distanceSquared = 0.0001;
            }

            const distance = Math.sqrt(distanceSquared);
            const minimumDistance =
              node.radius + other.radius + (crossesTopics ? 10 : 4.6);
            const falloff = 1 - distance / repulsionRange;
            const collision = Math.max(0, minimumDistance - distance) * 0.23;
            const magnitude =
              ((crossesTopics ? 0.13 : 0.095) +
                falloff * falloff * (crossesTopics ? 0.86 : 0.72) +
                collision) *
              alpha;
            const forceX = (dx / distance) * magnitude;
            const forceY = (dy / distance) * magnitude;
            velocityX[index] -= forceX;
            velocityY[index] -= forceY;
            velocityX[otherIndex] += forceX;
            velocityY[otherIndex] += forceY;
          }
        }
      }
    }

    const maximumStep = 0.42 + alpha * 2.7;
    for (let index = 0; index < nodes.length; index += 1) {
      velocityX[index] *= 0.79;
      velocityY[index] *= 0.79;
      const speed = Math.hypot(velocityX[index], velocityY[index]);
      if (speed > maximumStep) {
        velocityX[index] = (velocityX[index] / speed) * maximumStep;
        velocityY[index] = (velocityY[index] / speed) * maximumStep;
      }
      nodes[index].x += velocityX[index];
      nodes[index].y += velocityY[index];
    }
  }

  // Finish with a small collision-only relaxation so even strongly connected
  // planets retain a readable sliver of space between their visible discs.
  const collisionPasses = nodes.length <= 5_000 ? 10 : 5;
  for (let pass = 0; pass < collisionPasses; pass += 1) {
    const grid = buildSpatialIndex(nodes);
    for (let index = 0; index < nodes.length; index += 1) {
      const node = nodes[index];
      const cellX = Math.floor(node.x / grid.cellSize);
      const cellY = Math.floor(node.y / grid.cellSize);
      for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
        for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
          const candidates = grid.cells.get(spatialKey(cellX + offsetX, cellY + offsetY));
          if (!candidates) continue;
          for (const otherIndex of candidates) {
            if (otherIndex <= index) continue;
            const other = nodes[otherIndex];
            let dx = other.x - node.x;
            let dy = other.y - node.y;
            let distance = Math.hypot(dx, dy);
            if (distance < 0.001) {
              const angle = ((hashString(`final:${index}:${otherIndex}`) % 3_600) / 3_600) * Math.PI * 2;
              dx = Math.cos(angle) * 0.01;
              dy = Math.sin(angle) * 0.01;
              distance = 0.01;
            }
            const minimumDistance = node.radius + other.radius + 2.2;
            if (distance >= minimumDistance) continue;
            const shift = (minimumDistance - distance) * 0.28;
            const shiftX = (dx / distance) * shift;
            const shiftY = (dy / distance) * shift;
            node.x -= shiftX;
            node.y -= shiftY;
            other.x += shiftX;
            other.y += shiftY;
          }
        }
      }
    }
  }

  const centerX = nodes.reduce((sum, node) => sum + node.x, 0) / nodes.length;
  const centerY = nodes.reduce((sum, node) => sum + node.y, 0) / nodes.length;
  for (const node of nodes) {
    node.x -= centerX;
    node.y -= centerY;
  }
}

function makeLayout(input: readonly UniverseMapNode[]): MapLayout {
  const uniqueBySlug = new Map<string, UniverseMapNode>();
  for (const node of input) {
    if (!node.slug || uniqueBySlug.has(node.slug)) continue;
    uniqueBySlug.set(node.slug, {
      slug: node.slug,
      title: node.title || node.slug,
      topic: node.topic || "Unsorted",
      tags: Array.from(new Set((node.tags || []).map(normalizeTag).filter(Boolean))),
      outgoing: Array.from(new Set(node.outgoing || [])),
    });
  }

  const uniqueNodes = Array.from(uniqueBySlug.values());
  const knownSlugs = new Set(uniqueNodes.map((node) => node.slug));
  const degreeBySlug = new Map(uniqueNodes.map((node) => [node.slug, 0]));

  for (const node of uniqueNodes) {
    for (const target of node.outgoing) {
      if (!knownSlugs.has(target) || target === node.slug) continue;
      degreeBySlug.set(node.slug, (degreeBySlug.get(node.slug) || 0) + 1);
      degreeBySlug.set(target, (degreeBySlug.get(target) || 0) + 1);
    }
  }

  const nodesByTopic = new Map<string, UniverseMapNode[]>();
  for (const node of uniqueNodes) {
    const group = nodesByTopic.get(node.topic) || [];
    group.push(node);
    nodesByTopic.set(node.topic, group);
  }

  const colorOrder = Array.from(nodesByTopic.keys()).sort((a, b) => a.localeCompare(b));
  const colorByTopic = new Map(
    colorOrder.map((topic, index) => [topic, TOPIC_COLORS[index % TOPIC_COLORS.length]]),
  );

  const topicSpecs = Array.from(nodesByTopic, ([name, topicNodes]) => ({
    color: colorByTopic.get(name) || TOPIC_COLORS[0],
    count: topicNodes.length,
    name,
    nodes: topicNodes,
  })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  const topicAnchors = packTopicAnchors(topicSpecs);

  const positioned: PositionedNode[] = [];
  for (let topicIndex = 0; topicIndex < topicSpecs.length; topicIndex += 1) {
    const spec = topicSpecs[topicIndex];
    const anchor = topicAnchors[topicIndex];
    const angleOffset = ((hashString(`${spec.name}:nodes`) % 360) * Math.PI) / 180;
    const orderedNodes = [...spec.nodes].sort(
      (a, b) =>
        (degreeBySlug.get(b.slug) || 0) - (degreeBySlug.get(a.slug) || 0) ||
        a.title.localeCompare(b.title, undefined, { numeric: true }),
    );

    for (let localIndex = 0; localIndex < orderedNodes.length; localIndex += 1) {
      const node = orderedNodes[localIndex];
      const distance = localIndex === 0 ? 0 : Math.sqrt(localIndex) * NODE_SPACING;
      const angle = localIndex * GOLDEN_ANGLE + angleOffset;
      const degree = degreeBySlug.get(node.slug) || 0;
      positioned.push({
        ...node,
        index: positioned.length,
        topicIndex,
        x: anchor.x + Math.cos(angle) * distance,
        y: anchor.y + Math.sin(angle) * distance,
        radius: 2.05 + Math.min(3.1, Math.log2(degree + 1) * 0.55),
      });
    }
  }

  const indexBySlug = new Map(positioned.map((node, index) => [node.slug, index]));
  const neighbors = positioned.map(() => new Set<number>());
  const edges: Edge[] = [];
  const edgeKeys = new Set<string>();

  for (let source = 0; source < positioned.length; source += 1) {
    for (const targetSlug of positioned[source].outgoing) {
      const target = indexBySlug.get(targetSlug);
      if (target === undefined || source === target) continue;
      const smaller = Math.min(source, target);
      const larger = Math.max(source, target);
      const key = `${smaller}:${larger}`;
      if (edgeKeys.has(key)) continue;
      edgeKeys.add(key);
      edges.push({ source: smaller, target: larger });
      neighbors[smaller].add(larger);
      neighbors[larger].add(smaller);
    }
  }

  const membersByTag = new Map<string, number[]>();
  for (let index = 0; index < positioned.length; index += 1) {
    for (const tag of positioned[index].tags || []) {
      const members = membersByTag.get(tag);
      if (members) members.push(index);
      else membersByTag.set(tag, [index]);
    }
  }
  const tagGroups: TagGroup[] = Array.from(membersByTag.values())
    .filter((members) => members.length > 1)
    .map((members) => ({
      members,
      strength: 0.0032 / (1 + Math.log2(members.length)),
    }));

  settleWithForces(positioned, edges, topicAnchors, tagGroups);

  const groups = topicSpecs.map(({ color, count, name }, topicIndex) => {
    const members = positioned.filter((node) => node.topicIndex === topicIndex);
    const xCoordinates = members.map((node) => node.x).sort((a, b) => a - b);
    const yCoordinates = members.map((node) => node.y).sort((a, b) => a - b);
    const middle = Math.floor(xCoordinates.length / 2);
    const upperCoreIndex = Math.floor(Math.max(0, yCoordinates.length - 1) * 0.06);
    const labelX = xCoordinates.length
      ? xCoordinates.length % 2
        ? xCoordinates[middle]
        : (xCoordinates[middle - 1] + xCoordinates[middle]) / 2
      : 0;
    const labelY =
      (yCoordinates[upperCoreIndex] || 0) - 13 - Math.min(6, Math.log2(count + 1));
    return {
      color,
      count,
      labelX,
      labelY,
      name,
      radius: topicAnchors[topicIndex]?.radius || galaxyRadius(count),
    };
  });

  const bounds = positioned.length
    ? groups.reduce<Bounds>(
        (current, group) => ({
          minX: Math.min(current.minX, group.labelX - 48),
          maxX: Math.max(current.maxX, group.labelX + 48),
          minY: Math.min(current.minY, group.labelY - 17),
          maxY: Math.max(current.maxY, group.labelY + 12),
        }),
        positioned.reduce<Bounds>(
          (current, node) => ({
            minX: Math.min(current.minX, node.x - node.radius - 24),
            maxX: Math.max(current.maxX, node.x + node.radius + 24),
            minY: Math.min(current.minY, node.y - node.radius - 24),
            maxY: Math.max(current.maxY, node.y + node.radius + 24),
          }),
          {
            minX: Number.POSITIVE_INFINITY,
            maxX: Number.NEGATIVE_INFINITY,
            minY: Number.POSITIVE_INFINITY,
            maxY: Number.NEGATIVE_INFINITY,
          },
        ),
      )
    : { minX: -1, maxX: 1, minY: -1, maxY: 1 };

  return {
    bounds,
    edges,
    groups,
    neighbors,
    nodes: positioned,
    spatialIndex: buildSpatialIndex(positioned),
  };
}

function fitViewport(bounds: Bounds, size: Size): Viewport {
  const worldWidth = Math.max(1, bounds.maxX - bounds.minX);
  const worldHeight = Math.max(1, bounds.maxY - bounds.minY);
  const horizontalPadding = Math.min(76, Math.max(24, size.width * 0.08));
  const verticalPadding = Math.min(64, Math.max(22, size.height * 0.1));
  const scale = Math.max(
    0.05,
    Math.min(
      (size.width - horizontalPadding * 2) / worldWidth,
      (size.height - verticalPadding * 2) / worldHeight,
    ),
  );

  return {
    centerX: (bounds.minX + bounds.maxX) / 2,
    centerY: (bounds.minY + bounds.maxY) / 2,
    scale,
  };
}

function worldToScreen(node: { x: number; y: number }, viewport: Viewport, size: Size) {
  return {
    x: (node.x - viewport.centerX) * viewport.scale + size.width / 2,
    y: (node.y - viewport.centerY) * viewport.scale + size.height / 2,
  };
}

function cssVariable(styles: CSSStyleDeclaration, name: string, fallback: string) {
  return styles.getPropertyValue(name).trim() || fallback;
}

type ScreenLabelBox = {
  bottom: number;
  left: number;
  right: number;
  top: number;
};

function labelsOverlap(a: ScreenLabelBox, b: ScreenLabelBox) {
  const margin = 5;
  return !(
    a.right + margin < b.left ||
    a.left - margin > b.right ||
    a.bottom + margin < b.top ||
    a.top - margin > b.bottom
  );
}

function drawGalaxyLabels(
  context: CanvasRenderingContext2D,
  styles: CSSStyleDeclaration,
  layout: MapLayout,
  size: Size,
  viewport: Viewport,
  paper: string,
  inkMuted: string,
) {
  const compact = size.width < 620;
  const placed: ScreenLabelBox[] = [];
  const order = [...layout.groups].sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name),
  );
  const fontFamily = cssVariable(
    styles,
    "--font-editorial",
    '"Iowan Old Style", "Palatino Linotype", Georgia, serif',
  );

  for (const group of order) {
    const projectedRadius = group.radius * viewport.scale;
    const visibilityThreshold = compact ? 8.5 : 11.5;
    if (projectedRadius < visibilityThreshold && group.count < 10) continue;

    const point = worldToScreen(
      { x: group.labelX, y: group.labelY },
      viewport,
      size,
    );
    const fontSize = compact
      ? clamp(11.2 + Math.log2(group.count + 1) * 0.22, 11.5, 13)
      : clamp(12.8 + Math.log2(group.count + 1) * 0.42, 13.2, 16);
    const label = `${group.name}  ·  ${group.count}`;
    context.font = `600 ${fontSize}px ${fontFamily}`;
    const textWidth = context.measureText(label).width;
    const width = textWidth + 9;
    const height = fontSize + 7;
    const row = height + 5;
    const horizontalStep = Math.max(22, width * 0.58);
    const offsets: Array<{ x: number; y: number }> = [
      { x: 0, y: 0 },
      { x: 0, y: -row },
      { x: 0, y: row },
      { x: -horizontalStep, y: 0 },
      { x: horizontalStep, y: 0 },
      { x: -horizontalStep, y: -row },
      { x: horizontalStep, y: -row },
      { x: -horizontalStep, y: row },
      { x: horizontalStep, y: row },
      { x: 0, y: -row * 2 },
      { x: 0, y: row * 2 },
    ];

    let selected: ScreenLabelBox | null = null;
    let selectedScore = Number.POSITIVE_INFINITY;
    for (const offset of offsets) {
      const left = clamp(
        point.x - width / 2 + offset.x,
        5,
        Math.max(5, size.width - width - 5),
      );
      const top = clamp(
        point.y - height / 2 + offset.y,
        5,
        Math.max(5, size.height - height - 5),
      );
      const candidate = {
        bottom: top + height,
        left,
        right: left + width,
        top,
      };
      const collisions = placed.reduce(
        (total, existing) => total + Number(labelsOverlap(candidate, existing)),
        0,
      );
      const score = collisions * 10_000 + Math.hypot(offset.x, offset.y);
      if (score < selectedScore) {
        selected = candidate;
        selectedScore = score;
      }
      if (collisions === 0) break;
    }
    if (!selected) continue;
    placed.push(selected);

    // Labels float over the empty margin above each cluster. The paper wash is
    // rectangular and borderless: it protects type from crossing link lines
    // without implying a visible boundary around the galaxy.
    context.globalAlpha = 0.9;
    context.fillStyle = paper;
    context.fillRect(
      selected.left,
      selected.top,
      selected.right - selected.left,
      selected.bottom - selected.top,
    );
    context.globalAlpha = 0.96;
    context.fillStyle = cssVariable(styles, group.color, inkMuted);
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(
      label,
      (selected.left + selected.right) / 2,
      (selected.top + selected.bottom) / 2 + 0.4,
    );
  }

  context.textAlign = "start";
  context.textBaseline = "alphabetic";
  context.globalAlpha = 1;
}

function drawMap(
  canvas: HTMLCanvasElement,
  layout: MapLayout,
  size: Size,
  viewport: Viewport,
  hoveredIndex: number | null,
) {
  const context = canvas.getContext("2d");
  if (!context || size.width <= 0 || size.height <= 0) return;

  const styles = getComputedStyle(canvas);
  const paper = cssVariable(styles, "--paper-raised", styles.backgroundColor);
  const ink = cssVariable(styles, "--ink", styles.color);
  const inkMuted = cssVariable(styles, "--ink-muted", ink);
  const rule = cssVariable(styles, "--rule", inkMuted);
  const accent = cssVariable(styles, "--accent", ink);

  context.clearRect(0, 0, size.width, size.height);
  context.fillStyle = paper;
  context.fillRect(0, 0, size.width, size.height);
  context.lineCap = "round";
  context.lineJoin = "round";

  context.globalAlpha = hoveredIndex === null ? 0.26 : 0.055;
  context.strokeStyle = rule;
  context.lineWidth = 0.65;
  context.beginPath();
  for (const edge of layout.edges) {
    const related = edge.source === hoveredIndex || edge.target === hoveredIndex;
    if (related) continue;
    const source = worldToScreen(layout.nodes[edge.source], viewport, size);
    const target = worldToScreen(layout.nodes[edge.target], viewport, size);
    if (
      Math.max(source.x, target.x) < 0 ||
      Math.min(source.x, target.x) > size.width ||
      Math.max(source.y, target.y) < 0 ||
      Math.min(source.y, target.y) > size.height
    ) {
      continue;
    }
    context.moveTo(source.x, source.y);
    context.lineTo(target.x, target.y);
  }
  context.stroke();

  if (hoveredIndex !== null) {
    context.globalAlpha = 0.65;
    context.strokeStyle = accent;
    context.lineWidth = 1.05;
    context.beginPath();
    for (const edge of layout.edges) {
      if (edge.source !== hoveredIndex && edge.target !== hoveredIndex) continue;
      const source = worldToScreen(layout.nodes[edge.source], viewport, size);
      const target = worldToScreen(layout.nodes[edge.target], viewport, size);
      context.moveTo(source.x, source.y);
      context.lineTo(target.x, target.y);
    }
    context.stroke();
  }

  const hoveredNeighbors =
    hoveredIndex === null ? null : layout.neighbors[hoveredIndex] || new Set<number>();
  for (let index = 0; index < layout.nodes.length; index += 1) {
    const node = layout.nodes[index];
    const point = worldToScreen(node, viewport, size);
    const active = index === hoveredIndex;
    const neighboring = hoveredNeighbors?.has(index) || false;
    const screenRadius = active
      ? Math.max(6.2, node.radius * viewport.scale + 2.4)
      : neighboring
        ? Math.max(3.2, node.radius * viewport.scale + 0.9)
        : clamp(node.radius * viewport.scale, 1.4, 7);

    if (
      point.x + screenRadius < 0 ||
      point.x - screenRadius > size.width ||
      point.y + screenRadius < 0 ||
      point.y - screenRadius > size.height
    ) {
      continue;
    }

    context.globalAlpha =
      hoveredIndex === null || active || neighboring ? (active ? 1 : 0.88) : 0.18;
    context.fillStyle = cssVariable(
      styles,
      layout.groups[node.topicIndex].color,
      accent,
    );

    // A restrained halo and paper-colored glint give high-degree nodes a
    // planet-like presence without drawing containers around subject areas.
    if (screenRadius >= 2.35) {
      context.globalAlpha = active ? 0.2 : neighboring ? 0.11 : 0.065;
      context.beginPath();
      context.arc(point.x, point.y, screenRadius * 2.15, 0, Math.PI * 2);
      context.fill();
      context.globalAlpha =
        hoveredIndex === null || active || neighboring ? (active ? 1 : 0.88) : 0.18;
    }
    context.beginPath();
    context.arc(point.x, point.y, screenRadius, 0, Math.PI * 2);
    context.fill();

    if (screenRadius >= 2.6) {
      context.globalAlpha = active ? 0.72 : 0.4;
      context.fillStyle = paper;
      context.beginPath();
      context.arc(
        point.x - screenRadius * 0.28,
        point.y - screenRadius * 0.28,
        Math.max(0.45, screenRadius * 0.18),
        0,
        Math.PI * 2,
      );
      context.fill();
    }

    if (active) {
      context.globalAlpha = 0.92;
      context.strokeStyle = ink;
      context.lineWidth = 1.1;
      context.beginPath();
      context.arc(point.x, point.y, screenRadius + 3, 0, Math.PI * 2);
      context.stroke();
    }
  }

  drawGalaxyLabels(context, styles, layout, size, viewport, paper, inkMuted);

  context.globalAlpha = 1;
}

export function UniverseMap({
  nodes,
  className,
  height,
  label = "Interactive universe map of Rome",
}: UniverseMapProps) {
  const router = useRouter();
  const descriptionId = useId();
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gestureRef = useRef<PointerGesture | null>(null);
  const hasInteractedRef = useRef(false);
  const layout = useMemo(() => makeLayout(nodes), [nodes]);
  const [size, setSize] = useState<Size>({ height: 0, width: 0 });
  const [viewport, setViewport] = useState<Viewport>({ centerX: 0, centerY: 0, scale: 1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [textIndexOpen, setTextIndexOpen] = useState(false);

  const textTopics = useMemo(
    () =>
      layout.groups.map((group, topicIndex) => ({
        ...group,
        nodes: layout.nodes
          .filter((node) => node.topicIndex === topicIndex)
          .sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true })),
      })),
    [layout],
  );

  useEffect(() => {
    hasInteractedRef.current = false;
  }, [layout]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const rectangle = frame.getBoundingClientRect();
      const next = {
        height: Math.max(1, Math.round(rectangle.height)),
        width: Math.max(1, Math.round(rectangle.width)),
      };
      setSize((current) =>
        current.height === next.height && current.width === next.width ? current : next,
      );
    };

    measure();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }

    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (size.width <= 0 || size.height <= 0 || hasInteractedRef.current) return;
    const frame = window.requestAnimationFrame(() => {
      if (!hasInteractedRef.current) setViewport(fitViewport(layout.bounds, size));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [layout, size]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || size.width <= 0 || size.height <= 0) return;

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const pixelWidth = Math.round(size.width * pixelRatio);
    const pixelHeight = Math.round(size.height * pixelRatio);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    const frame = window.requestAnimationFrame(() => {
      const context = canvas.getContext("2d");
      if (!context) return;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      drawMap(canvas, layout, size, viewport, hoveredIndex);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hoveredIndex, layout, size, viewport]);

  const hitTest = (x: number, y: number) => {
    let bestIndex: number | null = null;
    let bestRatio = Number.POSITIVE_INFINITY;
    const worldX = (x - size.width / 2) / viewport.scale + viewport.centerX;
    const worldY = (y - size.height / 2) / viewport.scale + viewport.centerY;

    const { cellSize, cells } = layout.spatialIndex;
    const searchRadius = Math.max(7.5, 8 / viewport.scale);
    const minimumCellX = Math.floor((worldX - searchRadius) / cellSize);
    const maximumCellX = Math.floor((worldX + searchRadius) / cellSize);
    const minimumCellY = Math.floor((worldY - searchRadius) / cellSize);
    const maximumCellY = Math.floor((worldY + searchRadius) / cellSize);

    for (let cellY = minimumCellY; cellY <= maximumCellY; cellY += 1) {
      for (let cellX = minimumCellX; cellX <= maximumCellX; cellX += 1) {
        const candidates = cells.get(spatialKey(cellX, cellY));
        if (!candidates) continue;
        for (const index of candidates) {
          const node = layout.nodes[index];
          const dx = worldX - node.x;
          const dy = worldY - node.y;
          const hitRadius = Math.max(node.radius + 1.5, 8 / viewport.scale);
          const ratio = (dx * dx + dy * dy) / (hitRadius * hitRadius);
          if (ratio <= 1 && ratio < bestRatio) {
            bestIndex = index;
            bestRatio = ratio;
          }
        }
      }
    }

    return bestIndex;
  };

  const canvasPoint = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    const rectangle = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rectangle.left, y: event.clientY - rectangle.top };
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (event.button !== 0) return;
    const point = canvasPoint(event);
    gestureRef.current = {
      moved: false,
      pointerId: event.pointerId,
      startViewport: viewport,
      startX: point.x,
      startY: point.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    const point = canvasPoint(event);
    const gesture = gestureRef.current;
    if (gesture && gesture.pointerId === event.pointerId) {
      const dx = point.x - gesture.startX;
      const dy = point.y - gesture.startY;
      if (!gesture.moved && Math.hypot(dx, dy) > 4) {
        gesture.moved = true;
        hasInteractedRef.current = true;
        setDragging(true);
        setHoveredIndex(null);
      }
      if (gesture.moved) {
        setViewport({
          centerX: gesture.startViewport.centerX - dx / gesture.startViewport.scale,
          centerY: gesture.startViewport.centerY - dy / gesture.startViewport.scale,
          scale: gesture.startViewport.scale,
        });
      }
      return;
    }

    const nextHovered = hitTest(point.x, point.y);
    setHoveredIndex((current) => (current === nextHovered ? current : nextHovered));
  };

  const finishPointer = (event: ReactPointerEvent<HTMLCanvasElement>, cancelled = false) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const point = canvasPoint(event);
    gestureRef.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (!cancelled && !gesture.moved) {
      const selectedIndex = hitTest(point.x, point.y);
      if (selectedIndex !== null) {
        router.push(`/articles/${layout.nodes[selectedIndex].slug}/`);
      }
    }
  };

  const handleWheel = (event: ReactWheelEvent<HTMLCanvasElement>) => {
    if (size.width <= 0 || size.height <= 0) return;
    event.preventDefault();
    hasInteractedRef.current = true;
    const rectangle = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;
    const worldX = (x - size.width / 2) / viewport.scale + viewport.centerX;
    const worldY = (y - size.height / 2) / viewport.scale + viewport.centerY;
    const fitted = fitViewport(layout.bounds, size).scale;
    const zoomFactor = Math.exp(-event.deltaY * 0.0012);
    const nextScale = clamp(viewport.scale * zoomFactor, fitted * 0.48, fitted * 14);

    setViewport({
      centerX: worldX - (x - size.width / 2) / nextScale,
      centerY: worldY - (y - size.height / 2) / nextScale,
      scale: nextScale,
    });
  };

  const hoveredNode = hoveredIndex === null ? null : layout.nodes[hoveredIndex];
  const hoveredPoint = hoveredNode ? worldToScreen(hoveredNode, viewport, size) : null;
  const tooltipWidth = Math.min(232, Math.max(180, size.width - 24));
  const tooltipLeft = hoveredPoint
    ? clamp(hoveredPoint.x + 13, 8, Math.max(8, size.width - tooltipWidth - 8))
    : 0;
  const tooltipTop = hoveredPoint
    ? clamp(hoveredPoint.y > 82 ? hoveredPoint.y - 68 : hoveredPoint.y + 14, 8, size.height - 68)
    : 0;
  const frameHeight =
    typeof height === "number" ? `${Math.max(MIN_FRAME_HEIGHT, height)}px` : height || "clamp(24rem, 56vw, 36rem)";
  const mapLabel = `${label}: ${layout.nodes.length} articles across ${layout.groups.length} labeled topic galaxies`;
  const classNames = ["universe-map", className].filter(Boolean).join(" ");

  return (
    <figure className={classNames} style={figureStyle}>
      <figcaption style={metaStyle}>
        <strong
          style={{
            color: "var(--accent)",
            fontSize: "0.82rem",
            letterSpacing: "0.085em",
            textTransform: "uppercase",
          }}
        >
          The universe of Rome
        </strong>
        <span
          role="status"
          aria-live="polite"
          style={{ color: "var(--ink-muted)", fontSize: "0.8rem", lineHeight: 1.25 }}
        >
          {hoveredNode
            ? `${hoveredNode.title} · ${layout.neighbors[hoveredIndex ?? 0]?.size || 0} linked articles`
            : "Drag to travel · scroll to zoom · select a point to read"}
        </span>
      </figcaption>

      <div
        className="universe-map-body"
        style={{ height: frameHeight, minHeight: MIN_FRAME_HEIGHT }}
      >
        <ul aria-label="Map colors by section" style={legendStyle}>
          {layout.groups.map((group) => (
            <li
              key={group.name}
              style={{
                display: "grid",
                gridTemplateColumns: "0.72rem minmax(0, 1fr)",
                gap: "0.45rem",
                alignItems: "start",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: "0.62rem",
                  height: "0.62rem",
                  marginTop: "0.12rem",
                  borderRadius: "50%",
                  background: `var(${group.color})`,
                }}
              />
              <span>
                {group.name} <sup>{group.count}</sup>
              </span>
            </li>
          ))}
        </ul>

        <div
          ref={frameRef}
          className="universe-map-frame"
          style={{ position: "relative", width: "100%", height: "100%", minHeight: 0 }}
        >
          <p id={descriptionId} className="visually-hidden">
            Articles form labeled topic galaxies under local gravity. Nearby points repel one
            another, while links and shared tags pull related articles together within and across
            subjects. Color indicates subject. Hovering a point emphasizes linked neighbors. An
            expandable keyboard-accessible article index follows the map.
          </p>
          <canvas
            ref={canvasRef}
            className="universe-map-canvas"
            role="img"
            aria-label={mapLabel}
            aria-describedby={descriptionId}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={(event) => finishPointer(event)}
            onPointerCancel={(event) => finishPointer(event, true)}
            onPointerLeave={() => {
              if (!gestureRef.current) setHoveredIndex(null);
            }}
            onWheel={handleWheel}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              cursor: dragging ? "grabbing" : hoveredNode ? "pointer" : "grab",
              touchAction: "none",
            }}
          >
            {mapLabel}. Use the text index below if canvas is unavailable.
          </canvas>

          {hoveredNode && hoveredPoint ? (
            <div
              className="universe-map-tooltip"
              aria-hidden="true"
              style={{
                position: "absolute",
                zIndex: 2,
                top: tooltipTop,
                left: tooltipLeft,
                width: tooltipWidth,
                maxWidth: "calc(100% - 1rem)",
                padding: "0.55rem 0.65rem 0.6rem",
                border: "1px solid var(--rule-strong)",
                color: "var(--paper-raised)",
                background: "var(--ink)",
                fontFamily: "var(--font-editorial)",
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  display: "block",
                  marginBottom: "0.2rem",
                  color: "var(--paper-deep)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                }}
              >
                {hoveredNode.topic}
              </span>
              <strong style={{ display: "block", fontSize: "0.92rem", lineHeight: 1.3 }}>
                {hoveredNode.title}
              </strong>
            </div>
          ) : null}
        </div>
      </div>

      <details
        className="universe-map-fallback"
        onToggle={(event) => setTextIndexOpen(event.currentTarget.open)}
        style={{ borderTop: "1px solid var(--rule)" }}
      >
        <summary style={fallbackSummaryStyle}>
          Browse the map as text ({layout.nodes.length} articles)
        </summary>
        {textIndexOpen ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 15rem), 1fr))",
              gap: "1.5rem 2rem",
              padding: "0.5rem 0.9rem 1.2rem",
            }}
          >
            {textTopics.map((topic) => (
              <section key={topic.name} aria-labelledby={`${descriptionId}-${topic.name.replace(/[^a-z0-9]+/gi, "-")}`}>
                <strong
                  id={`${descriptionId}-${topic.name.replace(/[^a-z0-9]+/gi, "-")}`}
                  style={{
                    display: "block",
                    marginBottom: "0.45rem",
                    color: "var(--ink)",
                    fontFamily: "var(--font-editorial)",
                    fontSize: "0.84rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-block",
                      width: "0.48rem",
                      height: "0.48rem",
                      marginRight: "0.36rem",
                      borderRadius: "50%",
                      background: `var(${topic.color})`,
                    }}
                  />
                  {topic.name}
                </strong>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.1rem",
                    fontFamily: "var(--font-editorial)",
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                  }}
                >
                  {topic.nodes.map((node) => (
                    <li key={node.slug}>
                      <Link href={`/articles/${node.slug}/`}>{node.title}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : null}
      </details>
    </figure>
  );
}
