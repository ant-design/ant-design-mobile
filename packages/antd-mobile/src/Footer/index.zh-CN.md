---
title: 页脚
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 参数

#### Footer

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children |  页脚内容 |  Footer.Text \| Footer.Links \| Footer.Tags \| Footer.Logo  | `-` |

#### Footer.Text

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 文字内容 | string | `-` |


#### Footer.Links

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| links |  链接数组 | [{value: string; onPress: function}] | `[]` |
#### Footer.Links

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| links |  链接数组 | [{value: string; onPress: function}] | `[]` |

#### Foot.Tags

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tags | 标签数组 | [{value: string; onPress: function}] | `[]` |

#### Footer.Logo

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | string | `-` |
