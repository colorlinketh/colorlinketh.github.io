import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    titleZh: "AI Agents",
    titleEn: "AI Agents",
    items: ["Codex", "AGENTS.md", "Claude Code", "agent skills", "MCP"],
    note: "围绕智能体的指令层、技能层和工具调用方式持续积累可复用模式。",
  },
  {
    titleZh: "前端 / 产品",
    titleEn: "Frontend / Product",
    items: ["TypeScript", "Astro", "React", "Tailwind CSS", "design systems"],
    note: "关注可以被编码智能体稳定复用的前端骨架、组件体系和品牌化原型方法。",
  },
  {
    titleZh: "知识系统",
    titleEn: "Knowledge",
    items: ["Obsidian", "Markdown", "local-first workflows", "RAG-ready notes"],
    note: "强调长期可维护的知识结构，而不是一次性内容堆砌。",
  },
  {
    titleZh: "创意 AI",
    titleEn: "Creative AI",
    items: ["text-to-video", "image generation", "voice pipelines", "story workflows"],
    note: "把创意生产链路拆成可组合的步骤，而不是孤立的单次生成。",
  },
  {
    titleZh: "开发流程",
    titleEn: "Dev Workflow",
    items: ["Git", "GitHub", "terminal workflows", "Xcode source control"],
    note: "坚持 Git 驱动、终端优先和可验证自动化的工程习惯。",
  },
];
