# 首版网站实施计划

状态：首版已实现并完成首次发布
计划日期：2026-08-09
内容来源：`/Users/chgp/Desktop/intern_cv_26_1.tex`（只读）

## 1. 已确定方向

- 网站语言：英文。
- 站点定位：研究优先，同时让 data science / ML / statistics 岗位招聘者快速理解能力与贡献。
- 技术栈：Astro + TypeScript + npm + Markdown/MDX 内容集合。
- 输出方式：完全静态；不添加 React、Tailwind、CMS、数据库或服务端 adapter。
- 部署：通过 GitHub Actions 发布到 GitHub Pages 用户站点 `https://gepingchen.github.io`；仓库为 `GepingChen/gepingchen.github.io`。
- 导航：Home、Research、Projects、Poetry。
- About、Experience、Skills 和 Contact 合并到 Home。
- CV 仅作私有内容来源；不创建 CV 下载、公开 PDF 或独立 `/cv/` 路由。
- 博客：已按 2026-08-10 的明确请求启用 Poetry 内容集合与 `/blog/poetry/`；不扩展 RSS、搜索、评论或完整 Writing 系统。
- 视觉：modern academic minimal；浅色背景、深灰/海军蓝文字、低饱和蓝绿色强调色、少量边框，无复杂动效。

## 2. CV 推导的英文定位草案

姓名：`Geping Chen`

主标题：

> Statistics PhD Candidate working on causal inference and tabular foundation models.

首页辅助句：

> I develop statistical and machine-learning methods for causal inference and tabular data, with applications in precision medicine, agriculture, and remote sensing.

身份行：

> PhD Candidate in Statistics at Iowa State University.

研究标签：

- Causal Inference
- Tabular Foundation Models
- Bayesian Modeling
- Optimal Experimental Design

这些句子是基于 CV 的编辑草案，不应在用户审阅前被称为最终个人陈述。

## 3. 首版内容取舍

### 首页三项精选成果

1. **TabCF**：最强的论文、代码和方法证据；突出 two-stage IV control function、distributional effects 和 reproducible Python package。
2. **Pretraining Tabular Foundation Models toward Causal Discovery**：突出 tabular in-context learning、synthetic priors、probabilistic regression 和独立复现/扩展能力。
3. **Iowa Nitrogen Initiative**：突出 Bayesian hierarchical modeling、APSIM calibration、uncertainty quantification 和 optimal experimental design，展示真实科学应用。

### Research 页面

- Research interests：Causal Inference、Tabular Foundation Models、Precision Medicine、Agricultural Statistics、Experimental Design。
- Publications：按 CV 收录的 5 项分组为 Published / Preprint or Under Review / Manuscripts in Preparation。
- 论文状态必须在发布当天重新核对；不能把 `under review`、`2026+` 或 manuscript 状态当作永久事实。
- Manuscripts in preparation 仅在用户确认允许公开后显示。

### Projects 页面

首版采用一页式项目列表，不做独立详情页：

- TabCF
- Tabular Foundation Model Pretraining toward Causal Discovery
- Iowa Nitrogen Initiative
- Urban Heat Island / Prithvi Foundation Model
- Confidence-Calibrated Causal Feature Screening（公开范围待确认）

### CV 推导的背景内容

- 首页展示当前身份、教育和精选工作经历。
- Research 展示经过核对的论文和研究项目。
- 不在网页重复完整 CV，不提供文件下载，也不创建名为 CV 的导航入口。

## 4. CV 来源与隐私规则

当前 LaTeX CV 只作为内容来源，绝不复制到站点公开目录。源文件中存在以下问题，因此即使未来改变决定，也不能原样发布：

- PDF metadata 仍为 `John Doe`。
- 邮箱显示为学校邮箱，但 `mailto:` 目标仍是模板地址。
- 电话链接目标与页面显示号码不一致；网站首版建议完全不展示电话。
- `Last updated in September 2024` 文案已过期（即使当前宏可能没有被调用，也应清理）。
- TabCF 的投稿状态以及所有 `2026+` manuscript 状态需要发布前复核。
- 涉及 private thermal/remote-sensing data 的项目不能发布私有数据、截图或内部链接。

这些 PDF、邮件链接和电话问题不再阻塞网站实施，因为网站不会发布 CV 文件。本计划不修改桌面上的 CV 源文件；只从中提取用户允许公开且重新核对过的事实。

## 5. 视觉参考与最终选择

### [Julia Silge](https://juliasilge.com/)

适合借鉴：清晰的姓名、职业标题、短介绍和资料链接；首页第一屏非常直接，符合 data scientist 身份展示。

不直接照搬：大幅插画和以博客为主的行动入口。

### [Chelsea Finn](https://ai.stanford.edu/~cbfinn/)

适合借鉴：研究者身份、研究兴趣、CV/Scholar 等权威链接，以及 research-first 的信息层级。

不直接照搬：密集的长列表和较传统的页面视觉。

### [Mine Çetinkaya-Rundel](https://mine-cr.com/)

适合借鉴：柔和而专业的统计学者配色、大字号姓名和明确的内容导航。

不直接照搬：首版不需要完整 Teaching、Talks、Blog 体系或倾斜照片装饰。

### 本站采用的组合

- Julia Silge 式简洁 hero。
- Chelsea Finn 式研究与证据优先级。
- Mine Çetinkaya-Rundel 式低饱和学术配色。
- 没有合适头像时使用纯文字 hero，不使用占位人物图或 AI 生成头像。

## 6. 实施阶段与验证点

### Phase 0：内容与隐私确认

任务：

- 专业邮箱已确认可公开；确认 GitHub、LinkedIn、Google Scholar/ORCID。
- 确认是否提供头像；没有也不阻塞。
- 确认 manuscript-in-preparation 和未公开项目的公开范围。

通过条件：网站所需公开事实和链接均有明确来源；没有电话、CV 文件、私有数据或模板信息。

### Phase 1：最小 Astro 骨架

任务：

- 在临时空目录创建 Astro minimal 项目，再把框架文件合并到当前目录，保留已有文档。
- 使用 TypeScript strict 配置和 npm lockfile。
- 只安装 Astro；没有已证实需求时不增加 UI 框架或 CSS 库。
- 建立 `src/pages`、`src/components`、`src/layouts`、`src/styles`、`src/content` 和 `public`。
- 写入 `dev`、`build`、`preview`、`check` 命令。

验证：依赖可重复安装；开发服务器启动；空站构建和 Astro 检查通过。

### Phase 2：结构化内容

任务：

- 建立 `projects` 和 `publications` 内容集合及 schema。
- 建立全局 profile 配置。
- 从 CV 转写内容，保留来源字段且默认不渲染来源。
- 对未确认项目设置 draft 或直接不加入公开集合。

验证：错误状态、缺少标题、非法链接或错误日期会在构建期失败；页面代码中不重复硬编码条目。

### Phase 3：四个页面与设计系统

任务：

- Home：hero、研究/职业双入口、三项精选、skills/experience 摘要、contact/footer。
- Research：研究兴趣和分状态 publications。
- Projects：项目列表、个人贡献、方法和证据链接。
- 建立颜色、字体、间距、内容宽度、边框、focus 和 reduced-motion tokens。

验证：桌面和手机无横向溢出；键盘可达；核心内容关闭 JavaScript 仍可使用；没有空导航或无效按钮。

### Phase 4：发布质量

任务：

- 添加 title/description、canonical、Open Graph、favicon、robots、sitemap 和 404。
- 检查 heading、landmarks、focus、对比度、alternative text 和触控目标。
- 检查所有内部链接和外链，并确认不存在 CV 下载或意外公开文件。
- 审核最终英文文案、作者顺序、论文状态与个人贡献。

验证：`npm run check`、`npm run build` 和链接检查通过；在窄屏与宽屏进行人工视觉检查；构建产物不含秘密或私有草稿。

### Phase 5：GitHub Pages 发布

任务：

- GitHub 用户名已确认为 `GepingChen`；用户已创建 `gepingchen.github.io` 仓库并授权首次推送。
- Astro `site` 已配置为 `https://gepingchen.github.io`。这是用户站点仓库，不设置项目站点所需的 `base`。
- 添加 `.github/workflows/deploy.yml`，使用 Astro 官方 GitHub Action 构建，并使用 GitHub Pages deployment action 发布；提交 npm lockfile，确保 Actions 能识别包管理器。
- 添加 Pull Request 构建检查（`npm run check` 与 `npm run build`），但只允许 `main` 触发生产部署。
- 在仓库 **Settings → Pages** 中把发布来源设为 **GitHub Actions**，推送 `main` 后检查 Actions 构建和部署结果。
- 用真实 URL 复核 canonical、sitemap、分享预览、刷新深层链接和 404，并确认常见 CV 路径不会暴露文件。

通过条件：`https://gepingchen.github.io` 可访问；后续推送到 `main` 会自动部署；Pull Request 会运行构建检查；没有购买域名或启用分析服务。

验证记录（2026-08-09）：GitHub Actions build 与 deploy 均成功；Home、Research、Projects、robots、sitemap 和分享图返回 200，自定义 404 返回 404；production canonical 和 Open Graph URL 使用正式域名。

## 7. 最简单的零域名发布 Tutorial

以下步骤在网站本地构建通过后执行：

1. GitHub 用户名为 `GepingChen`，用户站点仓库命名为 `gepingchen.github.io`，网站地址为 `https://gepingchen.github.io`。这类用户站点每个账号只能有一个。
2. 已创建 Public 空仓库 `GepingChen/gepingchen.github.io`，且没有远程初始化文件与本地冲突。
3. 在本地项目中初始化 Git、添加该远程仓库、提交并推送到 `main`。实际命令在执行前根据仓库 URL 生成，不在计划阶段写死。
4. `astro.config.mjs` 中的 `site` 已设为 `https://gepingchen.github.io`。仓库名与用户站点规则匹配，因此不设置 `base`。
5. 添加 Astro 官方建议的 `.github/workflows/deploy.yml`：推送 `main` 时 checkout、用 `withastro/action` 安装并构建，再用 `actions/deploy-pages` 发布；同时保留手动触发入口。
6. 打开 GitHub 仓库的 **Settings → Pages**，在 **Build and deployment → Source** 中选择 **GitHub Actions**。
7. 推送部署 workflow，前往 **Actions** 查看构建与发布；成功后访问 `https://gepingchen.github.io`。首次或更新后的发布可能需要几分钟。
8. 用生产地址检查首页、`/research/`、`/projects/`、404、canonical、sitemap、robots 和社交分享元数据。此后推送到 `main` 会更新生产站；Pull Request 只运行检查，不假设存在独立在线预览地址。

当前官方资料：

- [Astro 创建项目](https://docs.astro.build/en/getting-started/)
- [Astro 内容集合](https://docs.astro.build/en/guides/content-collections/)
- [Astro 的 GitHub Pages 部署](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub Pages 用户站点与项目站点](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Pages 快速开始](https://docs.github.com/en/pages/quickstart)

### 可选：首版完成后再绑定自定义域名

- 自定义域名不阻塞开发或首次发布，也不需要修改页面架构。
- 可优先检查简短的姓名 `.com`；`gepingchen.com`、`geping-chen.com` 等候选的可用性尚未核验。
- 购买时比较续费价而不只是首年促销价，并确认 WHOIS privacy、DNSSEC 和自动续费设置。
- 购买和绑定域名属于外部付费操作，必须由用户明确授权后执行。
- 绑定完成后在 GitHub Pages 设置中配置自定义域名和 HTTPS，并更新 Astro `site`、canonical、sitemap 和社交分享 URL。

## 8. 本计划停止点

实施已获用户明确授权。当前 CV 源文件仍保持只读；没有购买域名、启用分析服务、发布电话、复制 CV 文件或公开未确认 manuscripts。
