# 建议内容模型

状态：技术栈确定前的框架无关草案。

目标是让内容与页面组件分离。最终可实现为 Markdown/MDX front matter、YAML/JSON 或框架的内容集合；字段名可以适配框架，但语义应保持一致。

## 通用约定

- 稳定内容使用唯一 `slug`。
- 日期内部使用 ISO 8601，例如 `2026-08-08`；页面可按语言格式化。
- `status` 使用受控值，不用自由文本暗示论文或项目阶段。
- 所有外链使用带名称的对象，避免页面猜测链接类型。
- `featured` 只表示首页精选，不等于质量评价。
- `draft` 控制是否构建/发布，不应只依赖页面隐藏。
- `sources` 和 `visibility` 用于编辑审核，默认不渲染到公开页面。

## Project

```yaml
title: "TBD"
slug: "tbd"
summary: "TBD"
startDate: "YYYY-MM"
endDate: null
status: "active" # active | completed | archived
kind: "research" # research | engineering | data | other
role: "TBD"
contributions:
  - "TBD"
methods:
  - "TBD"
results:
  - label: "TBD"
    value: "TBD"
    context: "TBD"
links:
  - label: "Repository"
    url: "https://example.com"
tags: []
cover: null
featured: false
order: 0
draft: true
visibility: "private-draft" # private-draft | public
sources: []
```

结果必须包含足够上下文；不要只写无法解释的数据或百分比。

## Publication / Research Output

```yaml
title: "TBD"
slug: "tbd"
authors: []
year: 2026
venue: null
status: "in-progress" # published | accepted | under-review | preprint | working-paper | in-progress
type: "paper" # paper | workshop | poster | thesis | report | dataset | software
summary: "TBD"
contribution: null
equalContributionNote: null
links:
  - label: "Paper"
    url: "https://example.com"
doi: null
bibtex: null
image: null
tags: []
featured: false
order: 0
draft: true
visibility: "private-draft"
sources: []
```

论文状态、作者顺序、共同贡献标记和 venue 必须来自可核验来源。

## Experience

```yaml
organization: "TBD"
role: "TBD"
location: null
startDate: "YYYY-MM"
endDate: null
summary: "TBD"
highlights: []
organizationUrl: null
order: 0
draft: true
sources: []
```

## Talk / Award

```yaml
title: "TBD"
kind: "talk" # talk | award | teaching | service
organization: "TBD"
date: "YYYY-MM-DD"
location: null
summary: null
url: null
order: 0
draft: true
sources: []
```

## Post / Poetry

Poetry 已在首篇真实诗歌加入后注册为内容集合。其他文章类型仍只保留模型；没有真实文章时不要生成空文章或公开 Writing 导航。

```yaml
title: null # 英文译名；未翻译时为 null
titleZh: "TBD"
slug: "tbd"
summary: "TBD"
publishedAt: null
updatedAt: null
languages: ["zh"] # 有英文译文后改为 ["en", "zh"]
englishStanzas: [] # 未翻译时允许为空
chineseStanzas: []
tags: []
series: null
canonicalUrl: null
draft: true
```

Poetry 额外要求 `publishedAt` 非空，并可用 `displayDate` 保存作者指定的页面日期写法；内部排序仍以 ISO 8601 日期为准。`titleZh`、`chineseStanzas` 保存必填的中文原文；`title`、`englishStanzas` 保存可后续补充的英文译文。有英文译文时，页面固定英文在前、中文在后。

## Site Profile / Global Settings

```yaml
name: "TBD"
preferredName: null
headline: "TBD"
shortBio: "TBD"
longBio: "TBD"
affiliation: null
location: null
email: null
socialLinks: []
defaultLanguage: "en"
availableLanguages:
  - "en"
siteUrl: null
```

全站仍以英文为主。Poetry 是中文内容例外，必须由内容文件显式保存中文原文；英文译文可后续加入，但不在构建时调用机器翻译。标记为含英文的诗歌若缺少英文标题或正文，构建失败。
