# Personal Academic Website

这是一个同时面向招聘者和学术访客的个人网站项目。首版目标是可信、清晰、快速、易维护；未来可扩展个人博客，但暂不把博客系统纳入 MVP。

## 当前状态

首版已使用 Astro + TypeScript + npm 实现，并通过 GitHub Actions 发布到 GitHub Pages 用户站点：<https://gepingchen.github.io>。站点保持完全静态，不启用分析服务；自定义域名在首版上线后再决定。

已有文件：

- `AGENTS.md`：开发代理必须遵守的范围、内容真实性、安全和验收要求。
- `docs/PROJECT_BRIEF.md`：产品范围、已确定方向和剩余确认项。
- `docs/IMPLEMENTATION_PLAN.md`：基于 CV 的内容取舍、实施阶段、验收点和最简发布教程。
- `docs/CONTENT_INVENTORY.md`：上线前需要准备的资料清单。
- `docs/CONTENT_MODEL.md`：项目、论文、经历和未来文章的建议数据结构。

## 本地命令

```bash
npm install
npm run dev
npm run check
npm run build
npm run check:dist
npm run verify
```

`npm run verify` 会依次执行 Astro/TypeScript 检查、静态构建、必需产物检查、内部链接检查和公开构建隐私扫描。

## 建议的下一步

1. 审阅首版英文文案与项目取舍。
2. 补充 Google Scholar / ORCID（如公开）以及经过授权的头像（如需要）。
3. 明确哪些 manuscript-in-preparation 项目可以公开；未确认内容当前不会构建。

首版未引入 React、Tailwind、CMS、数据库或服务端适配器；内容使用 Astro 内容集合和 Markdown，保持静态输出。2026-08-10 起，站点新增独立的 Poetry 内容集合与 `/blog/poetry/` 静态栏目；每首诗必须同时包含英文译文与中文原文，并按英文在前、中文在后的顺序展示。未引入完整博客、RSS、搜索或评论系统。

## MVP 页面

- Home
- Research
- Projects
- Poetry

About、Experience 和 Contact 合并进 Home。CV 只作为内容来源，不创建下载文件或独立公开路由。Poetry 已因首篇真实内容而公开；其他 Writing/Posts 类型仍只保留内容模型，不创建空页面或主导航入口。
