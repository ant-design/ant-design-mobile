---
category: UI Views
type: UI Views
chinese: 弹出层
english: Popup
---

### 定义／Definition
弹出层是由其他控件触发上的，可以通过列表项进行选择、操作。

### 规则 / Rule
- 弹出层项可以是选择也可以是行为（筛选、跳转…）
- 内容支持完全自定义

## API

#### static show(content: React.Element, options: Object):

`options`可选项：

- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许
- animationType (string) - 可选`slide-down`(默认)、`slide-up` 弹出动画类型
- transitionName (string) (web) 自定义显示隐藏变换动画
- maskTransitionName (string) (web) 自定义遮罩层变换动画

#### static hide(): 关闭 Popup

#### static newInstance() (web only)
有些情况下，页面需要多处出现 Popup ，或在 Popup 里再产生 Popup。

返回 Popup 实例对象。对象包括：

- show (function) - 同 static show
- hide (function) - 同 static hide
