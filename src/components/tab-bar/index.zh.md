# TabBar 标签栏

页面底部导航标签。

## 何时使用

适用于在不同页面之间进行切换。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## TabBar

### 属性

| 属性             | 说明                                                 | 类型                    | 默认值                |
| ---------------- | ---------------------------------------------------- | ----------------------- | --------------------- |
| activeKey        | 当前激活 `item` 的 `key`                             | `string \| null`        | -                     |
| defaultActiveKey | 初始化选中 `item` 的 `key`，如果没有设置 `activeKey` | `string \| null`        | 第一个 `Tab` 的 `key` |
| onChange         | 切换面板的回调                                       | `(key: string) => void` | -                     |
| safeArea         | 是否开启安全区适配                                   | `boolean`               | `false`               |

## TabBar.Item

### 属性

| 属性  | 说明                                        | 类型                                            | 默认值 |
| ----- | ------------------------------------------- | ----------------------------------------------- | ------ |
| badge | 徽标，同 [Badge](./badge) 的 `content` 属性 | `React.ReactNode \| typeof Badge.dot`           | -      |
| icon  | 图标                                        | `ReactNode \| ((active: boolean) => ReactNode)` | -      |
| key   | 对应 `activeKey`                            | `string`                                        | -      |
| title | 标题                                        | `ReactNode \| ((active: boolean) => ReactNode)` | -      |

## FAQ

### TabBar 为什么不能固定在页面底部？

不同业务项目中的布局逻辑是不一样的，TabBar 本身是不含定位和外层布局相关的逻辑的，需要业务项目中自己写 CSS 来控制。
