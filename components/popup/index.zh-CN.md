---
category: Components
type: Feedback
chinese: 弹出层
english: Popup
---


从顶部或底部浮出的模态，提供标题和关闭按钮，展示和当前内容相关的信息或提供相关操作。

### 规则
- 提供清晰的关闭按钮。
- Popup 会打断用户操作，所以用在重要的时候， eg.买入股票。

## API ( 适用平台：WEB、React-Native )

#### static show(content: React.Element, options: Object):

`options`可选项：

- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许
- animationType (string) - 可选 `slide-down` (默认)、`slide-up` 弹出动画类型
- transitionName (string) (`web only`) 自定义显示隐藏变换动画
- maskTransitionName (string) (`web only`) 自定义遮罩层变换动画
- onMaskClose (function) 遮罩层关闭时的回调，支持返回 Promise

#### static hide(): 关闭 Popup

#### static newInstance() (`web only`)
有些情况下，页面需要多处出现 Popup ，或在 Popup 里再产生 Popup。

返回 Popup 实例对象。对象包括：

- show (function) - 同 static show
- hide (function) - 同 static hide
