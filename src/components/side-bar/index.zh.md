# SideBar 侧边导航

<code src="./demos/index.tsx"></code>

## API

### SideBar

| 属性             | 说明                                                 | 类型                    | 默认值                 |
| ---------------- | ---------------------------------------------------- | ----------------------- | ---------------------- |
| activeKey        | 当前激活 `item` 的 `key`                             | `string \| null`        | -                      |
| defaultActiveKey | 初始化选中 `item` 的 `key`，如果没有设置 `activeKey` | `string \| null`        | 第一个 `item` 的 `key` |
| onChange         | 切换面板的回调                                       | `(key: string) => void` | -                      |

### SideBar.Item

| 属性     | 说明             | 类型        | 默认值  |
| -------- | ---------------- | ----------- | ------- |
| key      | 对应 `activeKey` | `string`    | -       |
| title    | 显示内容         | `ReactNode` | -       |
| disabled | 是否禁用         | `boolean`   | `false` |
| badge    | 徽标             | `ReactNode` | -       |

## CSS 变量

| 属性                 | 说明                 | 默认值 |
| -------------------- | -------------------- | ------ |
| --width              | 侧边导航宽度         | `96px` |
| --height             | 侧边导航高度         | `100%` |
| --item-border-radius | 当前激活`item`的圆角 | `8px`  |
