# SideBar

Display the navigation bar vertically.

## When to Use

Users are required to quickly navigate to a collection of content and switch back and forth between multiple pieces of content.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

<code src="./demos/demo4.tsx"></code>

## SideBar

### Props

| Name             | Description                                                                 | Type                    | Default                 |
| ---------------- | --------------------------------------------------------------------------- | ----------------------- | ----------------------- |
| activeKey        | `key` of currently active `item`                                            | `string \| null`        | -                       |
| defaultActiveKey | The initialized `key` of the selected `item`, if the `activeKey` is not set | `string \| null`        | `key` of the 1st `item` |
| onChange         | Callback when switching panel                                               | `(key: string) => void` | -                       |

### CSS Variables

| Name                 | Description                                      | Default   |
| -------------------- | ------------------------------------------------ | --------- |
| --background-color   | Color of background                              | `#f5f5f5` |
| --height             | the height of the SideBar                        | `100%`    |
| --item-border-radius | the border-radius of the currently active `item` | `8px`     |
| --width              | the width of the SideBar                         | `96px`    |

### SideBar.Item

### Props

| Name     | Description                   | Type                    | Default |
| -------- | ----------------------------- | ----------------------- | ------- |
| badge    | Badge of the `item`           | `BadgeProps['content']` | -       |
| disabled | Should the `item` be disabled | `boolean`               | `false` |
| key      | Corresponding to `activeKey`  | `string`                | -       |
| title    | Title of the `item`           | `ReactNode`             | -       |
