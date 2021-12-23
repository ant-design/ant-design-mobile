# NavBar 导航栏

<code src="./demos/demo1.tsx"></code>

## 属性

| 属性      | 说明                                                       | 类型                   | 默认值 |
| --------- | ---------------------------------------------------------- | ---------------------- | ------ |
| back      | 返回区域的文字，如果为 `null` 的话，`backArrow` 也不会渲染 | `string \| null`       | `''`   |
| backArrow | 是否显示返回区域的箭头，也可以传入 `ReactNode` 进行自定义  | `boolean \| ReactNode` | `true` |
| onBack    | 点击返回区域后的回调                                       | `() => void`           | -      |
| left      | 左侧内容，渲染在返回区域的右侧                             | `ReactNode`            | -      |
| children  | 标题                                                       | `ReactNode`            | -      |
| right     | 右侧内容                                                   | `ReactNode`            | -      |

## CSS 变量

| 属性            | 说明         | 默认值 |
| --------------- | ------------ | ------ |
| --height        | 导航栏高度   | `45px` |
| --border-bottom | 导航栏下边框 | `none` |
