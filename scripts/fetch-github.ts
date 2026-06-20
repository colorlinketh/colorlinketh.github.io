import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import type { GitHubData, GitHubProfileSnapshot, GitHubRepo } from "../src/data/types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(__dirname, "../src/data/github.generated.json");

function readExisting(): GitHubData {
  if (!existsSync(outputPath)) {
    return { fetchedAt: null, profile: null, repos: [] };
  }

  return JSON.parse(readFileSync(outputPath, "utf8")) as GitHubData;
}

function normalizeProfile(input: Record<string, unknown>): GitHubProfileSnapshot {
  return {
    login: String(input.login ?? "colorlinketh"),
    html_url: String(input.html_url ?? "https://github.com/colorlinketh"),
    avatar_url: String(input.avatar_url ?? "https://github.com/colorlinketh.png"),
    public_repos: Number(input.public_repos ?? 0),
    followers: Number(input.followers ?? 0),
    following: Number(input.following ?? 0),
  };
}

function normalizeRepo(input: Record<string, unknown>): GitHubRepo {
  return {
    name: String(input.name ?? ""),
    html_url: String(input.html_url ?? ""),
    description: typeof input.description === "string" ? input.description : null,
    language: typeof input.language === "string" ? input.language : null,
    stargazers_count: Number(input.stargazers_count ?? 0),
    forks_count: Number(input.forks_count ?? 0),
    fork: Boolean(input.fork),
    archived: Boolean(input.archived),
    updated_at: String(input.updated_at ?? new Date(0).toISOString()),
    topics: Array.isArray(input.topics) ? input.topics.map(String) : [],
  };
}

async function fetchJson(url: string) {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "colorlinketh-homepage-build",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`GitHub request failed (${response.status}) for ${url}`);
  }

  return response.json();
}

async function main() {
  const existing = readExisting();

  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetchJson("https://api.github.com/users/colorlinketh"),
      fetchJson("https://api.github.com/users/colorlinketh/repos?sort=updated&per_page=100"),
    ]);

    const next: GitHubData = {
      fetchedAt: new Date().toISOString(),
      profile: normalizeProfile(profileResponse as Record<string, unknown>),
      repos: Array.isArray(reposResponse)
        ? reposResponse.map((repo) => normalizeRepo(repo as Record<string, unknown>))
        : [],
    };

    writeFileSync(outputPath, `${JSON.stringify(next, null, 2)}\n`, "utf8");
    process.stdout.write(`Fetched ${next.repos.length} public repos into src/data/github.generated.json\n`);
  } catch (error) {
    writeFileSync(outputPath, `${JSON.stringify(existing, null, 2)}\n`, "utf8");
    console.warn("GitHub fetch failed. Reusing existing github.generated.json.");
    console.warn(error instanceof Error ? error.message : String(error));
  }
}

await main();
