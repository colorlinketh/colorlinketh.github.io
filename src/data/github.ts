import rawData from "./github.generated.json";
import type { GitHubData, GitHubRepo } from "./types";

const KEYWORDS = [
  "agent",
  "skill",
  "ai",
  "obsidian",
  "video",
  "design",
  "mcp",
  "codex",
  "claude",
  "story",
  "workflow",
];

export const githubData = rawData as GitHubData;

export function scoreRepo(repo: GitHubRepo): number {
  const haystack = [
    repo.name,
    repo.description ?? "",
    ...(repo.topics ?? []),
  ]
    .join(" ")
    .toLowerCase();

  const keywordScore = KEYWORDS.reduce((score, keyword) => {
    return haystack.includes(keyword) ? score + 8 : score;
  }, 0);

  const daysSinceUpdate = Math.max(
    0,
    (Date.now() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24),
  );
  const freshnessScore = Math.max(0, 28 - daysSinceUpdate / 6);
  const starScore = Math.min(repo.stargazers_count, 80) / 8;
  const forkSignal = repo.fork ? -5 : 3;
  const archivePenalty = repo.archived ? -12 : 0;
  const descriptionPenalty = repo.description ? 0 : -2;

  return keywordScore + freshnessScore + starScore + forkSignal + archivePenalty + descriptionPenalty;
}

export function getFeaturedRepos(limit = 8): GitHubRepo[] {
  return [...githubData.repos]
    .sort((left, right) => scoreRepo(right) - scoreRepo(left))
    .slice(0, limit);
}

export function formatRepoDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}
