---
category: Components
type: Navigation
title: Pagination
---

分隔长列表，每次只加载一个页面。

### 规则
- 当加载/渲染所有数据将花费很多时间或者流量时使用

## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
|  mode  | 形态，可选`button`,`number`,`pointer` | string | `button`  |
|  current  | 当前索引(注意索引是从0开始计数的) | number  |  无  |
|  total  | 数据总数 | number  |  0  |
|  simple  | 是否隐藏数值 | boolean | false  |
|  disabled  | 禁用状态 | boolean | false  |
| locale |  国际化, 可以覆盖全局`LocaleProvider`的配置 | Object：{prevText, nextText} | 无 |
|  onChange | change 事件触发的回调函数 | (e: Object): void | 无 |
