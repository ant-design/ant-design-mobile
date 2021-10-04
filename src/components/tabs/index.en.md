# Tabs

<code src="./demos/index.tsx"></code>

## API

### Tabs

| Name             | Description                                                                | Type                    | Default                     |
| ---------------- | -------------------------------------------------------------------------- | ----------------------- | --------------------------- |
| activeKey        | the `key` of the currently active `tab` panel                              | `string`                | -                           |
| defaultActiveKey | the initialized `key` of the selected panel, if the `activeKey` is not set | `string`                | the `key` of the 1st pannel |
| onChange         | callback when switching panel                                              | `(key: string) => void` | -                           |

### Tabs.TabPane

| Name        | Description                                       | Type        | Default |
| ----------- | ------------------------------------------------- | ----------- | ------- |
| key         | corresponding to `activeKey`                      | `string`    | -       |
| title       | the displayed text of the tab header              | `ReactNode` | -       |
| forceRender | whether to render the `DOM` structure when hidden | `boolean`   | `false` |
