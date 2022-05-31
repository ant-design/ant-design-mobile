# TabBar

Navigation tabs at the bottom of the page.

## When to Use

Useful for switching between different pages.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## TabBar

### Props

| Name             | Description                                                                 | Type                    | Default                |
| ---------------- | --------------------------------------------------------------------------- | ----------------------- | ---------------------- |
| activeKey        | `key` of currently active `item`                                            | `string \| null`        | -                      |
| defaultActiveKey | The initialized `key` of the selected `item`, if the `activeKey` is not set | `string \| null`        | `key` of the 1st `Tab` |
| onChange         | Callback when switching panel                                               | `(key: string) => void` | -                      |
| safeArea         | Whether to enable safe area padding                                         | `boolean`               | `false`                |

## TabBar.Item

### Props

| Name  | Description                                        | Type                                            | Default |
| ----- | -------------------------------------------------- | ----------------------------------------------- | ------- |
| badge | Badge，the same as [Badge](./badge) `content` prop | `React.ReactNode \| typeof Badge.dot`           | -       |
| icon  | Icon                                               | `ReactNode \| ((active: boolean) => ReactNode)` | -       |
| key   | Corresponding to `activeKey`                       | `string`                                        | -       |
| title | Title                                              | `ReactNode \| ((active: boolean) => ReactNode)` | -       |

## FAQ

### Why can't the TabBar be fixed at the bottom of the page?

The layout logic in different business projects is different. TabBar itself does not contain logic related to positioning and outer layout, and needs to be controlled by writing CSS in the business project.
