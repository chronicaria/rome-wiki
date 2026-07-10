import { spawn } from "node:child_process";

function inferBasePath() {
  if (Object.hasOwn(process.env, "PAGES_BASE_PATH")) return process.env.PAGES_BASE_PATH;
  const [owner, repository] = (process.env.GITHUB_REPOSITORY || "").split("/");
  if (repository) {
    return repository.toLowerCase() === `${owner}.github.io`.toLowerCase()
      ? ""
      : `/${repository}`;
  }
  return "/rome-wiki";
}

const basePath = inferBasePath();
const buildEnv = {
  ...process.env,
  PAGES_BASE_PATH: basePath,
  NEXT_PUBLIC_BASE_PATH: basePath,
};

function run(args, env = process.env) {
  return new Promise((resolve, reject) => {
    const child = spawn("npm", args, { stdio: "inherit", env });
    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (signal) reject(new Error(`Command stopped by ${signal}.`));
      else if (code === 0) resolve();
      else reject(new Error(`npm ${args.join(" ")} exited with ${code}.`));
    });
  });
}

try {
  await run(["run", "sync"]);
  await run(["run", "audit:public"]);
  await new Promise((resolve, reject) => {
    const child = spawn("npx", ["next", "build"], { stdio: "inherit", env: buildEnv });
    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (signal) reject(new Error(`Next static export stopped by ${signal}.`));
      else if (code === 0) resolve();
      else reject(new Error(`Next static export exited with ${code}.`));
    });
  });
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
