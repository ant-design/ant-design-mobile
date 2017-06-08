---
category: Components
type: Feedback
title: Popup
---

A modal box pops up from the top or bottom (will interrupt the user operation)

## API

Support WEB, React-Native.

#### static show(content: React.Element, options: Object):

`options`:

- animationType (string) - Animation type, choose one of `slide-down`(default) and `slide-up`
- transitionName (string) (`web only`) - Customize the transform animation used to show and hide
- maskTransitionName (string) (`web only`) - Customize the transform animation used to the mask
- onMaskClose (function) - The callback when the mask is closed, support `Promise`
- maskClosable (bool) - Whether it's allowed to close when you click the mask (default true)

For `web` platform, you can set `prefixCls`/`className`/`wrapClassName`/`maskStyle` and so on, ref [rc-dialog](https://github.com/react-component/dialog#rc-dialogweb).

#### static hide(): close Popup

#### static newInstance() (`web only`)
In some cases, the page needs multiple popups, For example, Popup in the Popup.

This function returns the Popup instance object, which includes:

- show (function) - same as `static show`
- hide (function) - same as `static hide`
