# Tabs

<code src="./demos/index.tsx"></code>

## API

### Tabs

| Name             | Description                                                                | Type                    | Default                     |
| ---------------- | -------------------------------------------------------------------------- | ----------------------- | --------------------------- |
| activeKey        | The `key` of the currently active `tab` panel                              | `string`                | -                           |
| defaultActiveKey | The initialized `key` of the selected panel, if the `activeKey` is not set | `string`                | the `key` of the 1st pannel |
| onChange         | Callback when switching panel                                              | `(key: string) => void` | -                           |

### Tabs.TabPane

| Name        | Description                                       | Type        | Default |
| ----------- | ------------------------------------------------- | ----------- | ------- |
| key         | Corresponding to `activeKey`                      | `string`    | -       |
| title       | The displayed text of the tab header              | `ReactNode` | -       |
| forceRender | Whether to render the `DOM` structure when hidden | `boolean`   | `false` |
