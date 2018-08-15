---
category: Components
type: Feedback
title: Sticky
subtitle: 吸顶
---

Sticky 组件当页面滚动到指定位置时，触发吸附效果，其在没有到达指定位置时在文档流中表现为relative, 当触发了以后表现为fixed。吸顶组件固定在指定的位置。


## API

### Sticky

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| prefixCls    | CSS前缀    | string |  am-sticky   |
| disable      | 是否禁用吸顶 | Boolean | false |
| isHidden     | （iOS中）祖先容器中是否存在overflow: hidden 或者 overflow: auto  | Boolean | false |
| stickTop    | 距离顶部的距离 | Number | 0 |
| onSticky()   | 当吸顶时触发的回调函数 | (): void | - |
| offSticky()     | 取消吸顶时触发的回调函数 | (): void | - |


更多 API 可查看 [rmc-tooltip](https://github.com/react-component/m-tooltip#api)

##### 注意事项

* iOS 平台使用CSS(position:sticky)实现，但是sticky的所有父类容器中存在overflow: hidden 或者auto, 则不能使用，请添加参数isHidden