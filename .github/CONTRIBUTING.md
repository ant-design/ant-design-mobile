# 参与 Ant Design Mobile 建设

[//]: # 'TODO: 翻译成英文版'

感谢参与 Ant Design Mobile（下文中使用 antd-mobile 指代）的开源建设，目前我们正在进行 v5 版本的开发，这里是一些相关信息的指引。

## 在开始之前的准备

### 了解我们的路线图

路线图（Roadmap）是我们对近期的大致规划和重点工作的方向，当我们确定了一份路线图后，会尽快发布到 GitHub 仓库的 discussion 板块中，所以可以去[这里](https://github.com/ant-design/ant-design-mobile/discussions)查阅最新的内容。

当然，如果你对我们的规划有任何建议的话，也欢迎参与讨论。

### 加入我们的社区钉钉群

如果你希望更直接地和我们参与讨论，可以加入 antd-mobile 的开发者钉钉群：32473590。

## 我可以做什么？

参与社区建设 & 贡献并不仅仅是提交代码，如果你和我们一样，都很热爱 antd-mobile，那么可以考虑从这些方面参与进来：

### 解决 issue

在 antd-mobile 的仓库，有很多被标为 help wanted 的 issue，这些 issue 是我们非常希望得到社区同学的帮助的，你可翻阅 issue 列表找到自己感兴趣的 issue。**如果你想认领一条 issue，我们建议在它下面发一条“我来做一下”之类的评论**，这样可以避免其他社区同学重复提交代码。

当然，并不是只有 help wanted 的 issue 才可以参与开发，对于其他的 issue，也是非常各位社区同学参与讨论的，只是如果你想提交一些代码上来的话，最好是预先在 issue 中和我们的 collaborators 沟通过，这样可以避免出现 PR 提交之后发现思路有问题或是和官方的开发计划有冲突等等尴尬的情况。

### 提交 bug

如果你发现了 antd-mobile 的 bug，不要犹豫，请直接提交 GitHub issue，尽快让其他社区同学了解到，也尽快让我们可以安排修复。

不过在提交 issue 的时候，需要留意一些注意事项：

- 请尽可能准确、具体地描述你认为的预期行为应该是什么样的，现在的行为又是什么样的
- 请尽可能准备的附加上你的环境信息，包括但不限于：antd-mobile 的版本号、浏览器类型、设备型号、本地的构建环境/脚手架
- 最好可以提供一份完整的可复现问题的 demo，我们推荐在 [codesandbox](https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json) 或 [stackblitz](https://stackblitz.com/edit/antd-mobile?file=index.tsx) 直接创建一份 demo

### 回答其他社区同学的疑问

在 GitHub 仓库的 issues 和 discussions 版本，经常会有很多其他社区同学的提问，如果你发现有个 issue/discussion 你有所了解，那请不要犹豫，你的回答或者建议很有可能会拯救其他社区同学脱离苦海。

### 贡献新功能

如果你希望贡献一些新功能（例如增加一个新组件），那么**请先提交一条 RFC issue**，这样可以让我们的整个沟通过程更加的高效。或许这看起来增加了额外的工作量和时间成本，但是我们相信通过 RFC 中的讨论和确认，可以规避掉很多方向错误导致的问题和浪费。

## 开发指南

- 请务必使用 pnpm 作为包管理器
- 推荐使用英文写 commit message
- 代码中的注释并不是什么要紧的东西，我们更推荐写出自释性更强的代码

## 其他问题

### 我想参与 v2 版本的建设，该如何做？

v2 版本现在已经不再进行官方维护了，如果你想对 v2 进行修改，可以考虑自己从 `v2` 分支 fork 一份代码并发布一个单独的 npm 包。除非存在严重的安全性问题，否则我们不会进行官方的更新。

## 附录

- [Using ARIA](https://w3c.github.io/using-aria/)
- [ISO Language Codes](https://www.w3schools.com/tags/ref_language_codes.asp) and [ISO Country Codes](https://www.w3schools.com/tags/ref_country_codes.asp) for locale files naming
