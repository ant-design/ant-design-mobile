# SideBar 侧边导航

垂直展示导航栏。

## 何时使用

需要用户快速导航至某一项内容集合，并可以在多个内容之间来回切换。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

<code src="./demos/demo4.tsx"></code>

## SideBar

### 属性

| 属性             | 说明                                                 | 类型                    | 默认值                 |
| ---------------- | ---------------------------------------------------- | ----------------------- | ---------------------- |
| activeKey        | 当前激活 `item` 的 `key`                             | `string \| null`        | -                      |
| defaultActiveKey | 初始化选中 `item` 的 `key`，如果没有设置 `activeKey` | `string \| null`        | 第一个 `item` 的 `key` |
| onChange         | 切换面板的回调                                       | `(key: string) => void` | -                      |

### CSS 变量

| 属性                 | 说明                 | 默认值    |
| -------------------- | -------------------- | --------- |
| --background-color   | 背景颜色             | `#f5f5f5` |
| --height             | 侧边导航高度         | `100%`    |
| --item-border-radius | 当前激活`item`的圆角 | `8px`     |
| --width              | 侧边导航宽度         | `96px`    |

## SideBar.Item

### 属性

| 属性     | 说明             | 类型                    | 默认值  |
| -------- | ---------------- | ----------------------- | ------- |
| badge    | 徽标             | `BadgeProps['content']` | -       |
| disabled | 是否禁用         | `boolean`               | `false` |
| key      | 对应 `activeKey` | `string`                | -       |
| title    | 显示内容         | `ReactNode`             | -       |
