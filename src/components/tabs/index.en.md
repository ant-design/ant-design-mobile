# Tabs

<code src="./demos/index.tsx"></code>

## Tabs

### Props

| Name             | Description                                                                | Type                          | Default                     |
| ---------------- | -------------------------------------------------------------------------- | ----------------------------- | --------------------------- |
| activeKey        | The `key` of the currently active `tab` panel                              | `string \| null`              | -                           |
| defaultActiveKey | The initialized `key` of the selected panel, if the `activeKey` is not set | `string \| null`              | the `key` of the 1st pannel |
| activeLineMode   | Activate `tab` underline mode                                              | `'auto' \| 'full' \| 'fixed'` | `'auto'`                    |
| onChange         | Callback when switching panel                                              | `(key: string) => void`       | -                           |

### CSS Variables

| Name                      | Description                           | Default |
| ------------------------- | ------------------------------------- | ------- |
| --fixed-active-line-width | The width of the active tab underline | `30px`  |

## Tabs.TabPane

| Name        | Description                                       | Type        | Default |
| ----------- | ------------------------------------------------- | ----------- | ------- |
| key         | Corresponding to `activeKey`                      | `string`    | -       |
| title       | The displayed text of the tab header              | `ReactNode` | -       |
| disabled    | Whether to disable the tab                        | `boolean`   | `false` |
| forceRender | Whether to render the `DOM` structure when hidden | `boolean`   | `false` |
