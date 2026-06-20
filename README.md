# colorlinketh.github.io

`colorlinketh` 的个人主页源码。站点定位为中文优先的 builder / curator 主页，围绕 AI Agents、知识系统、设计工具链与创意自动化展开。

## Stack

- Astro + TypeScript
- Tailwind CSS 4
- pnpm
- GitHub Pages via GitHub Actions

## Local Development

```bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
pnpm dev
```

默认开发地址通常是 `http://localhost:4321`。

## GitHub Data

站点会在构建前尝试抓取 `colorlinketh` 的公开 GitHub Profile 和仓库数据，并写入：

```text
src/data/github.generated.json
```

手动更新：

```bash
pnpm fetch:github
```

如果 GitHub API 临时失败，脚本会保留上一次成功生成的 JSON，构建不会被阻塞。

如需提高 CI 的 rate limit，可在 GitHub Actions 中添加：

```text
GITHUB_TOKEN
```

注意：该 token 只在服务端抓取脚本中使用，不会进入客户端 bundle。

## Content Maintenance

核心内容通过数据文件维护：

- `src/data/profile.ts`
- `src/data/focusAreas.ts`
- `src/data/updates.ts`
- `src/data/featuredProjects.ts`
- `src/data/skills.ts`
- `src/data/timeline.ts`

GitHub 仓库数据由脚本生成：

- `src/data/github.generated.json`

未来如需增加真实文章，可把 Markdown / MDX 放到：

```text
src/content/notes/
```

站点首页会自动检测并列出这些笔记。

## Quality Checks

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm preview
```

## Deployment

1. 创建 GitHub 仓库 `colorlinketh.github.io`
2. 推送当前代码到该仓库的 `main` 分支
3. 在仓库设置中启用 **GitHub Pages**
4. Source 选择 **GitHub Actions**

工作流文件位于：

```text
.github/workflows/deploy.yml
```

## TODO

- 如需公开真实姓名、邮箱、地点、简历或自定义域名，请在内容数据层显式补充。
- `AI_Drama` 目前保留为无公开链接状态；等有验证过的仓库或 demo 后再补入口。
- 如需多页内容、CMS、评论系统或 analytics，建议作为 v2 增量加入。
