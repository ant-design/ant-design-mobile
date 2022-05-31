# CapsuleTabs

Navigate between content groups.

## When to Use

Another style for tabs, used in lists or modules in presentational interfaces.

## Demos

<code src="./demos/demo1.tsx"></code>

## CapsuleTabs

### Props

| Name             | Description                                                                | Type                    | Default                     |
| ---------------- | -------------------------------------------------------------------------- | ----------------------- | --------------------------- |
| activeKey        | The `key` of the currently active `tab` panel                              | `string \| null`        | -                           |
| defaultActiveKey | The initialized `key` of the selected panel, if the `activeKey` is not set | `string \| null`        | the `key` of the 1st pannel |
| onChange         | Callback when switching panel                                              | `(key: string) => void` | -                           |

## CapsuleTabs.Tab

### Props

| Name           | Description                                       | Type        | Default |
| -------------- | ------------------------------------------------- | ----------- | ------- |
| destroyOnClose | Unmount content when not visible                  | `boolean`   | `false` |
| disabled       | Whether to disable the tab                        | `boolean`   | `false` |
| forceRender    | Whether to render the `DOM` structure when hidden | `boolean`   | `false` |
| key            | Corresponding to `activeKey`                      | `string`    | -       |
| title          | The displayed text of the tab header              | `ReactNode` | -       |

The usage of CapsuleTabs is very similar to that of Tabs, so see the documentation for [Tabs](./tabs) for more usage guidelines.
