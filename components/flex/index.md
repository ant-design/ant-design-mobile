---
category: Others
type: Others
chinese: Flex布局
english: Flex
---


### 定义／Definition
flexbox 布局

### 规则 / Rule
Flex布局的相关知识请先阅读阮一峰的博客
[Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


## API

### Flex

| 成员        | 说明           | 类型       |   可选值     | 默认值       |
|------------|----------------|-----------|---------|--------------|
| direction    |     Flex子元素的排列方向     | String    | `row`（水平方向，起点在左端), `row-reverse`（水平方向，起点在右端), `column`（垂直方向，起点在上沿), `column-reverse`（垂直方向，起点在下沿),RN仅支持`row`,`column` | `row` |
| wrap    |    Flex 子元素的换行方式     | String    | `nowrap`（不换行）, `wrap`（换行，第一行在上方）, `wrap-reverse`（换行，第一行在下方）,RN仅支持`nowrap`,`wrap` | `nowrap` |
| justify    |    Flex 子元素在主轴上的对齐方式     | String    | `start`, `end`, `center`, `between`, `around`）,RN全部支持 | `start` |
| align    |    Flex 子元素在交叉轴上的对齐方式, top和start等价,middle和center等价,bottom和end等价, 优先使用后者（后者定义更规范）,RN仅支持`start`,`end`,`center`,`stretch`     | String    | `start/top`, `center/middle`, `end/bottom`, `baseline`, `stretch` | `center` |
| alignContent    |    Flex有多根轴线时的对齐方式,一般用不到,RN不支持    | String    | `start`, `end`, `center`, `between`, `around`, `stretch` | `stretch` |

### Flex.Item

Flex.Item组件默认加上了样式`flex:1`,保证所有item平均分宽度,Flex容器的children不一定是Flex.Item

| 成员        | 说明           | 类型       |    可选值    | 默认值       |
|------------|----------------|-----------|----     -----|--------------|
