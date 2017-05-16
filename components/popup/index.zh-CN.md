---
category: Components
type: Feedback
title: Popup
subtitle: 弹出层
---

从顶部或底部浮出的模态框 (会打断用户操作)

## API

适用平台：WEB、React-Native

#### static show(content: React.Element, options: Object):

`options`可选项：

- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许
- animationType (string) - 可选 `slide-down` (默认)、`slide-up` 弹出动画类型
- transitionName (string) (`web only`) 自定义显示隐藏变换动画
- maskTransitionName (string) (`web only`) 自定义遮罩层变换动画
- onMaskClose (function) 遮罩层关闭时的回调，支持返回 Promise

#### static hide(): 关闭 Popup

#### static newInstance() (`web only`)
有些情况下，页面需要多处出现 Popup ，比如在 Popup 里再产生 Popup。

这个函数会返回 Popup 实例对象，对象成员包括：

- show (function) - 同 static show
- hide (function) - 同 static hide
