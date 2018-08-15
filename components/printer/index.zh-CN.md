---
category: Components
type: Data Display
title: Printer
subtitle: 打印机
---

模拟打印机打印效果。当点击下拉按钮，组件下拉，逐渐显示上部分容器信息，来下箭头改变方向，变成上升按钮。点击上升按钮，容器收回，回归到默认显示状态。当结合Tab标签使用时，可以通过改变`switchCls` 来获得切换时的动画回收效果。详见示例 Printer with Tabs。

## API

### Printer

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| prefixCls    | CSS前缀    | string |  am-printer   |
| disable      | 是否禁用下拉 | Boolean | false |
| switchCls    | 切换时显示动画 | Boolean | false |
| initialAnim  | 初始化动画    | Boolean  | false |
| onDropdrop   | 下拉Printer时的回调函数 | (): void | - |
| onPushUp     | 收回Printer时的回调函数 | (): void | - |

更多 API 可查看 [rmc-tooltip](https://github.com/react-component/m-tooltip#api)
