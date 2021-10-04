# TabBar

<code src="./demos/index.tsx"></code>

## API

### TabBar

| Name             | Description                                                                 | Type                    | Default                |
| ---------------- | --------------------------------------------------------------------------- | ----------------------- | ---------------------- |
| activeKey        | `key` of currently active `item`                                            | `string \| null`        | -                      |
| defaultActiveKey | the initialized `key` of the selected `item`, if the `activeKey` is not set | `string \| null`        | `key` of the 1st `Tab` |
| onChange         | callback when switching panel                                               | `(key: string) => void` | -                      |

### TabBar.Item

| Name  | Description                                        | Type                                            | Default |
| ----- | -------------------------------------------------- | ----------------------------------------------- | ------- |
| key   | corresponding to `activeKey`                       | `string`                                        | -       |
| title | title                                              | `ReactNode`                                     | -       |
| icon  | icon                                               | `ReactNode \| ((active: boolean) => ReactNode)` | -       |
| badge | badge，the same as [Badge](./badge) `content` prop | `React.ReactNode \| typeof Badge.dot`           | -       |
