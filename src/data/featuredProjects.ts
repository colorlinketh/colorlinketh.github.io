import type { FeaturedProject } from "./types";

export const featuredProjects: FeaturedProject[] = [
  {
    title: "AI_Drama",
    status: "in progress",
    type: "original / local project",
    summaryZh:
      "面向 AI 短剧与故事视频生产的创意自动化实验：从文本、角色、分镜到视频工作流。",
    summaryEn:
      "A creative automation experiment for AI short-drama production, connecting text, characters, storyboards, and video workflows.",
    tags: ["AI video", "short drama", "workflow", "creative automation"],
    note: "Only link this when a verified public repository or demo exists.",
  },
  {
    title: "Agent Skills Lab",
    status: "curation / experiments",
    type: "public GitHub curation",
    summaryZh:
      "围绕 Codex、Claude Code 与可复用 Agent Skill 的仓库收藏、改造和实验。",
    tags: ["Codex", "Claude Code", "AGENTS.md", "agent skills"],
    repoHints: ["agent-skills", "yao-meta-skill", "llm-wiki-skill", "narrator-ai-cli-skill"],
  },
  {
    title: "Obsidian Knowledge Workflows",
    status: "curation / workflow",
    type: "public GitHub curation",
    summaryZh:
      "把微信收藏、文件助手、笔记库和 AI 检索整理为可持续的个人知识系统。",
    tags: ["Obsidian", "knowledge base", "local-first", "AI research"],
    repoHints: ["wechat-to-obsidian", "obsidian-second-brain", "kepano-obsidian"],
  },
  {
    title: "AI-native Design Toolkit",
    status: "curation / product design",
    type: "public GitHub curation",
    summaryZh:
      "用设计提示、品牌系统和自包含 HTML 原型，让编码 Agent 更稳定地产出高质量 UI。",
    tags: ["design systems", "UI", "prototyping", "agent design"],
    repoHints: ["baoyu-design", "awesome-design-md", "tinacms"],
  },
];
