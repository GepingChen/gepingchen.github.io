# 项目简报与决策记录

状态：首版已实现并发布到 GitHub Pages
最后更新：2026-08-11

这个文件记录会影响实现方向的产品决定。专业邮箱、GitHub、LinkedIn、公开仓库和首页头像已经确认；Google Scholar / ORCID 和未发表项目公开范围仍待确认。

## 一句话目标

用一套可信、结构化的内容，为招聘者和学术访客提供两条快速浏览路径，并为未来个人写作保留低成本扩展空间。

## 受众与首要任务

### 招聘者 / Hiring Manager

希望在很短时间内确认：你是谁、擅长什么、做过什么、个人贡献和结果是什么、如何联系你。

建议路径：Home → Projects → Education background → Contact。

### 学术访客 / Collaborator

希望快速确认：研究方向、代表论文或研究项目、当前身份、精选背景和联系方式。

建议路径：Home → Research/Publications → Education background → Contact。

## MVP 范围

包括：

- 首页定位、双路径入口、短简介、代表工作概述、教育背景和联系方式。
- Research/Publications、Projects。
- 本科与 PhD 教育经历。
- 移动端、键盘操作、基础无障碍、SEO、社交分享预览和 404 页面。
- 内容与页面布局分离，便于持续维护。

首版不包括：

- CMS、数据库、登录、评论、站内搜索、订阅系统。
- 复杂动画或 WebGL 展示。
- 完整博客、标签筛选、RSS 和多作者流程。
- 未经明确决定的访问追踪或 Cookie。

## 决策状态

| 优先级 | 决定 | 推荐默认值 | 当前结论 | 为什么重要 |
| --- | --- | --- | --- | --- |
| 阻塞 | 网站主要语言 | 英文为主；如中文内容重要，再做双语 | 已确定：全站英文为主；Poetry 固定为英文译文在前、中文原文在后 | 影响文案、路由、字体和维护成本 |
| 阻塞 | 首发身份定位 | 一句清晰的 role + research/technical focus | 已确定：Statistics PhD Candidate；Causal Inference + Tabular Foundation Models | 决定首页第一屏和信息排序 |
| 阻塞 | 技术栈 | Astro + TypeScript + Markdown/MDX | 已确定 | 影响目录、内容集合和构建命令 |
| 阻塞 | 部署平台 | GitHub Pages 用户站点；源码和发布流程保持在同一 GitHub 仓库 | 已确定：通过 GitHub Actions 静态部署到 GitHub Pages | 影响仓库命名、Actions 和 URL 配置 |
| 阻塞 | 首版域名 | 使用 GitHub Pages 用户站点地址，未来可绑定自有姓名域名 | 已确定：`https://gepingchen.github.io` | 影响仓库名、canonical URL 和长期品牌 |
| 高 | 首页首要受众 | 两类并重，但只设一个主标题 | 已确定：研究身份优先，项目与方法便于招聘者扫描 | 避免首页信息竞争 |
| 高 | 代表工作 | 首页个人陈述用几句话概括，完整证据与贡献放在 Projects / Research | 已确定：首页不设 Selected work 板块 | 保持首页简短，同时保留可核验详情入口 |
| 高 | CV 公开方式 | 只展示筛选后的网页内容 | 已确定：CV 仅作为内部内容来源；无 PDF 下载、无独立 CV 路由 | 保护完整履历文件，同时保留必要事实 |
| 高 | 联系方式 | 专业邮箱 + GitHub + LinkedIn/Google Scholar（按实际） | 专业邮箱可公开；其他资料链接待确认；不展示电话 | 影响隐私和转化路径 |
| 中 | 视觉风格 | 简洁、研究型、文字优先、克制动效 | 已确定：modern academic minimal，浅色、低饱和蓝绿色点缀 | 影响设计系统与素材需求 |
| 中 | 深浅主题 | 首版只做一个高质量主题 | 已确定：首版仅浅色 | 双主题会增加设计和测试量 |
| 中 | 分析服务 | 首版不启用，或选择隐私友好且无需 Cookie 的方案 | 已确定：首版不启用 | 涉及隐私披露和外部脚本 |
| 低 | 博客启用时间 | 有经过确认的真实内容后按类型开放 | 已更新：Poetry 栏目随首篇诗歌公开；不启用完整 Writing 系统 | 让真实内容可访问，同时继续控制范围 |
| 低 | 中英文双语 | 内容稳定后再评估完整双语 | 已更新：不做全站双语；Poetry 每篇必须包含英文与中文 | 双语会显著增加内容维护与 QA |

## 技术选型提示

### 推荐：Astro

适合内容为主、静态优先、未来需要 Markdown/MDX 博客的个人站。Astro 的[官方内容集合](https://docs.astro.build/en/guides/content-collections/)支持结构校验和构建期内容，静态输出也是默认路径，因此建立 projects/publications/posts 等集合比较自然。

### 何时考虑 Next.js

如果已经确定需要登录、动态数据、服务端 API、复杂交互应用，或团队生态强依赖 React/Next.js。仅展示个人内容时通常不是必需。

### 何时考虑纯静态 HTML

如果页面极少、几乎不更新、也不准备扩展文章。它最简单，但当项目、论文和文章逐渐增加时，内容维护容易重复。

### 部署选择

- [GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)区分用户站点与项目站点。首版采用用户站点：仓库命名为 `gepingchen.github.io`，默认地址为 `https://gepingchen.github.io`。
- [Astro 官方 GitHub Pages 指南](https://docs.astro.build/en/guides/deploy/github/)推荐使用 GitHub Actions 构建并部署静态站点。用户站点位于域名根路径，因此不配置项目站点所需的 `base`。

Astro 保持默认静态输出，不添加服务端 adapter；只有未来确实需要服务端功能时再评估。GitHub Pages 不默认提供每个 Pull Request 的独立预览 URL，首版使用本地 `astro preview` 做预览，并让 Pull Request 运行构建检查。

## 建议的信息架构

- `/`：定位、短简介与代表工作概述、双路径入口、本科与 PhD 教育背景、联系方式。
- `/research/`：研究方向、论文和研究项目。
- `/projects/`：TabCF、tabular FM pretraining、Iowa Nitrogen Initiative 和 UHI 等项目；首版可使用列表而不创建每项详情页。
- `/blog/poetry/`：公开诗歌索引；每首诗使用独立静态页面。

About、Education background 和 Contact 合并进首页；不设独立 Selected work 或 Technical toolkit 板块。CV 只作为私有来源，不复制进公开目录，也不创建 `/cv/`。除 Poetry 外，`/writing/` 相关类型只保留未来内容模型，不创建空路由。

## 发布验收问题

- 第一次访问的人能否在约 10 秒内说出你的定位？
- 两类访客能否在两次交互内找到各自最关心的内容？
- 每个精选成果是否明确写出“你做了什么”，并提供可核验链接？
- 手机上的阅读顺序、触控目标和导航是否可靠？
- 关闭 JavaScript 后，核心内容和导航是否仍然可用？
- 所有事实、论文状态、日期、链接和下载文件是否经过核对？
