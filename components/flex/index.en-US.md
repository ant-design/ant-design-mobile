---
category: Components
type: Layout
title: Flex
---


Flex is a wrap of  Flexible Box.



## API ( Support PlatForm：WEB、React-Native )

### Flex

| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|-----------|---------------|
| direction    |   how flex items are placed in the flex container，value could be `row`,`row-reverse`,`column`,`column-reverse`,RN 仅支持`row`,`column`  | String  | `row` |
| wrap    |  子元素的换行方式，可选`nowrap`,`wrap`,`wrap-reverse`,RN 仅支持`nowrap`,`wrap`  | String  | `nowrap` |
| justify  | 子元素在主轴上的对齐方式，可选`start`,`end`,`center`,`between`,`around`    | String   | `start` |
| align    | 子元素在交叉轴上的对齐方式，可选`start/top`,`center/middle`,`end/bottom`,`baseline`,`stretch` RN仅支持`start`,`end`,`center`,`stretch`  | String   | `center` |
| alignContent(`web only`) | 有多根轴线时的对齐方式，可选`start`,`end`,`center`,`between`,`around`,`stretch`    | String  | `stretch` |

### Flex.Item

Flex.Item 组件默认加上了样式`flex:1`,保证所有 item 平均分宽度, Flex 容器的 children 不一定是 Flex.Item
