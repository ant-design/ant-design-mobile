# CapsuleTabs

<code src="./demos/demo1.tsx"></code>

## CapsuleTabs

### Props

| Name             | Description                                                                | Type                    | Default                     |
| ---------------- | -------------------------------------------------------------------------- | ----------------------- | --------------------------- |
| activeKey        | The `key` of the currently active `tab` panel                              | `string \| null`        | -                           |
| defaultActiveKey | The initialized `key` of the selected panel, if the `activeKey` is not set | `string \| null`        | the `key` of the 1st pannel |
| onChange         | Callback when switching panel                                              | `(key: string) => void` | -                           |

## CapsuleTabs.Tab

| Name           | Description                                       | Type        | Default |
| -------------- | ------------------------------------------------- | ----------- | ------- |
| key            | Corresponding to `activeKey`                      | `string`    | -       |
| title          | The displayed text of the tab header              | `ReactNode` | -       |
| disabled       | Whether to disable the tab                        | `boolean`   | `false` |
| forceRender    | Whether to render the `DOM` structure when hidden | `boolean`   | `false` |
| destroyOnClose | Unmount content when not visible                  | `boolean`   | `false` |

The usage of CapsuleTabs is very similar to that of Tabs, so see the documentation for [Tabs](./tabs) for more usage guidelines.
