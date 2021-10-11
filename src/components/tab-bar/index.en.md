# TabBar

<code src="./demos/index.tsx"></code>

## API

### TabBar

| Name             | Description                                                                 | Type                    | Default                |
| ---------------- | --------------------------------------------------------------------------- | ----------------------- | ---------------------- |
| activeKey        | `key` of currently active `item`                                            | `string \| null`        | -                      |
| defaultActiveKey | The initialized `key` of the selected `item`, if the `activeKey` is not set | `string \| null`        | `key` of the 1st `Tab` |
| onChange         | Callback when switching panel                                               | `(key: string) => void` | -                      |

### TabBar.Item

| Name  | Description                                        | Type                                            | Default |
| ----- | -------------------------------------------------- | ----------------------------------------------- | ------- |
| key   | Corresponding to `activeKey`                       | `string`                                        | -       |
| title | Title                                              | `ReactNode`                                     | -       |
| icon  | Icon                                               | `ReactNode \| ((active: boolean) => ReactNode)` | -       |
| badge | Badge，the same as [Badge](./badge) `content` prop | `React.ReactNode \| typeof Badge.dot`           | -       |
