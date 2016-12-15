---
category: Components
type: Layout
chinese: Flex布局
english: Flex
---


Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

如果不熟悉推荐学习下这个 [Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


## API ( 适用平台：WEB、React-Native )

### Flex

| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|-----------|---------------|
| direction    |  子元素的排列方向，可选`row`,`row-reverse`,`column`,`column-reverse`,RN 仅支持`row`,`column`  | String  | `row` |
| wrap    |  子元素的换行方式，可选`nowrap`,`wrap`,`wrap-reverse`,RN 仅支持`nowrap`,`wrap`  | String  | `nowrap` |
| justify  | 子元素在主轴上的对齐方式，可选`start`,`end`,`center`,`between`,`around`    | String   | `start` |
| align    | 子元素在交叉轴上的对齐方式，可选`start/top`,`center/middle`,`end/bottom`,`baseline`,`stretch` RN仅支持`start`,`end`,`center`,`stretch`  | String   | `center` |
| alignContent(`web only`) | 有多根轴线时的对齐方式，可选`start`,`end`,`center`,`between`,`around`,`stretch`    | String  | `stretch` |

### Flex.Item

Flex.Item 组件默认加上了样式`flex:1`,保证所有 item 平均分宽度, Flex 容器的 children 不一定是 Flex.Item
