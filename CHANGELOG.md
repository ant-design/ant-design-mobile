---
order: 2
chinese: 更新日志
---

## 0.12.13

`2016-03-29`

- 按照最新的规范修正 Message、Alert、Notification 的默认图标。
- 统一梳理和优化了各浮层组件的 `z-index`，并增加了对应的 less 变量。
- 修复一个 Breadcrumb 组件未指定 breadcrumbName 导致的解析问题。[#1251](https://github.com/ant-design/ant-design/pull/1251)
- 现在 Upload 服务端返回数据不是 JSON 格式时将不判断为出错。[#1248](https://github.com/ant-design/ant-design/issues/1248)
- 修复 Cascader 在 Chrome 下无法滚动菜单的问题。
- 修复 Select、Radio、Progress、Table、DatePicker 的一些样式细节。

## 0.12.12

`2016-03-18`

- 更新了设计资源文件 `Axure Components` 和 `Axure Box`。
- 修复 Popover 和 Popconfirm 箭头消失的问题。
- 修复一个 Table 切换分页长度时的页码溢出的问题。
