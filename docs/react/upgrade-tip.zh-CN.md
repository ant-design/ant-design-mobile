---
order: 5
title: 升级提示功能
---

## 介绍
`antd-mobile` 组件库本身是由底层组件库 `react-component` 和 `antd-mobile` 两部分组成，`antd-mobile` 不固定底层组件的依赖版本，所以如果bug在底层组件组件修复，将不能及时感知，对用户排查bug也带来困扰。

所以 `antd-mobile` 添加了升级提示功能，在安装 `antd-mobile` 时会 **在本地`node_modules/antd-mobile/lib/_util/version.json`** 记录 `antd-mobile` 及所依赖的 `rc/rmc` 组件版本。

在 **NODE_ENV=development** 情况下会向服务器请求最新组件版本数据 (**GET请求，不上传附加信息**) 在比对后会在控制台进行输出提示 (版本，重大更新tip等)。

本功能使用 `process.env.NODE_ENV === 'development'` 进行判断，将不会打入生产环境（`NODE_ENV != development`）。

## 关闭方法
在项目的 `package.json`，添加 `"antd-mobile": { "upgrade-tip": false }` (需要删除重新安装 `antd-mobile` 生效)。
