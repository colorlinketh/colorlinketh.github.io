export type NavItem = {
  id: string;
  labelZh: string;
  labelEn: string;
};

export type FocusArea = {
  index: string;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  tags: string[];
  repoHints: string[];
};

export type UpdateItem = {
  date: string;
  label?: string;
  titleZh: string;
  titleEn?: string;
  tags: string[];
};

export type FeaturedProject = {
  title: string;
  status: string;
  type: string;
  summaryZh: string;
  summaryEn?: string;
  tags: string[];
  links?: Array<{ label: string; href: string }>;
  repoHints?: string[];
  note?: string;
};

export type SkillGroup = {
  titleZh: string;
  titleEn: string;
  items: string[];
  note: string;
};

export type TimelineItem = {
  date: string;
  titleZh: string;
  summaryZh: string;
};

export type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  updated_at: string;
  topics?: string[];
};

export type GitHubProfileSnapshot = {
  login: string;
  html_url: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

export type GitHubData = {
  fetchedAt: string | null;
  profile: GitHubProfileSnapshot | null;
  repos: GitHubRepo[];
};
