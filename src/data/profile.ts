import type { NavItem } from "./types";

export const profile = {
  handle: "colorlinketh",
  displayName: "colorlinketh",
  headline: "AI Agent & Creative Automation Builder",
  headlineZh: "AI Agent 与创意自动化构建者",
  taglineZh:
    "把 AI Agent、知识库、设计系统和视频工作流连接成可复用的生产力系统。",
  taglineEn:
    "Linking agents, knowledge systems, design tooling, and creative media workflows into reusable systems.",
  heroParagraphZh:
    "我关注 AI Agent、Agent Skills、知识管理、AI-native Design 与短视频/短剧自动化。这个主页记录我正在研究、fork、改造和交付的小系统：从 Obsidian 第二大脑，到 Codex / Claude 技能，再到 AI 视频工作流。",
  heroParagraphEn:
    "I explore agent skills, AI-native design systems, knowledge workflows, and creative video automation. This site is a living map of the tools I study, adapt, and build.",
  visionZh:
    "我想构建的是一套可以长期复用的 AI 工作流：让 Agent 会读知识库、会调用工具、会生成设计、会组织创意生产，并且能被普通项目稳定复用。",
  visionChips: [
    "Agent Skills",
    "AI-native Design",
    "Obsidian Workflows",
    "Creative Automation",
    "AI Video / Short Drama",
  ],
  github: "https://github.com/colorlinketh",
  avatar: "https://github.com/colorlinketh.png",
  openTo: [
    "agent workflow experiments",
    "AI creative tools",
    "knowledge systems",
    "product prototypes",
  ],
};

export const navItems: NavItem[] = [
  { id: "vision", labelZh: "愿景", labelEn: "Vision" },
  { id: "updates", labelZh: "近况", labelEn: "Updates" },
  { id: "focus", labelZh: "关注领域", labelEn: "Focus" },
  { id: "projects", labelZh: "精选项目", labelEn: "Projects" },
  { id: "github-lab", labelZh: "GitHub Lab", labelEn: "GitHub Lab" },
  { id: "skills", labelZh: "技能与工具", labelEn: "Stack" },
  { id: "notes", labelZh: "笔记与写作", labelEn: "Writing" },
  { id: "timeline", labelZh: "项目演化", labelEn: "Timeline" },
  { id: "contact", labelZh: "联系", labelEn: "Contact" },
];
