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

## Future Post

保留模型即可；MVP 没有真实文章时不要生成空文章或公开 Writing 导航。

```yaml
title: "TBD"
slug: "tbd"
summary: "TBD"
publishedAt: null
updatedAt: null
language: "en" # en | zh
tags: []
series: null
canonicalUrl: null
draft: true
```

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

如果将来支持双语，优先让每条内容明确语言或翻译关联；不要依赖机器翻译在构建时自动生成未经审核的个人事实。
