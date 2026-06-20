import type { FocusArea } from "./types";

export const focusAreas: FocusArea[] = [
  {
    index: "01",
    titleZh: "Agent Skills 与编码智能体",
    titleEn: "Agent Skills / Coding Agents",
    descriptionZh:
      "围绕 Codex / Claude 风格编码智能体，构建可复用指令、技能包、工作流与工具接口。",
    tags: ["agent-skills", "Codex", "Claude Code", "MCP", "workflow"],
    repoHints: [
      "agent-skills",
      "yao-meta-skill",
      "llm-wiki-skill",
      "narrator-ai-cli-skill",
      "awesome-claude-code",
    ],
  },
  {
    index: "02",
    titleZh: "知识系统与第二大脑",
    titleEn: "Knowledge Systems / Obsidian",
    descriptionZh:
      "把本地优先的笔记系统、微信到 Obsidian 流程与 AI 可读知识库连接成长期复利资产。",
    tags: ["Obsidian", "local-first", "knowledge base", "RAG"],
    repoHints: [
      "kepano-obsidian",
      "wechat-to-obsidian",
      "obsidian-second-brain",
    ],
  },
  {
    index: "03",
    titleZh: "创意 AI 与视频自动化",
    titleEn: "Creative AI / Video Automation",
    descriptionZh:
      "探索从故事、角色、分镜到视频、解说与传播的自动化链路，尤其关注 AI 短剧与可复用媒体工作流。",
    tags: ["AI video", "short drama", "storyboard", "automation"],
    repoHints: ["AI_Drama", "pixelle-video", "MoneyPrinterTurbo", "BiliMusic", "lil-agents"],
  },
  {
    index: "04",
    titleZh: "AI 原生设计与产品原型",
    titleEn: "AI-native Design / Product Prototyping",
    descriptionZh:
      "用设计提示、品牌系统和快速原型方法，帮助编码智能体稳定产出更有辨识度的产品体验。",
    tags: ["design systems", "prototyping", "frontend", "product"],
    repoHints: ["baoyu-design", "awesome-design-md", "tinacms", "hermes-web-ui", "pilotdeck"],
  },
];
