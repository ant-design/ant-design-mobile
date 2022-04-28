# Tabs

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

<code src="./demos/demo4.tsx"></code>

## Tabs

### Props

| Name             | Description                                                                | Type                          | Default                     |
| ---------------- | -------------------------------------------------------------------------- | ----------------------------- | --------------------------- |
| activeKey        | The `key` of the currently active `tab` panel                              | `string \| null`              | -                           |
| defaultActiveKey | The initialized `key` of the selected panel, if the `activeKey` is not set | `string \| null`              | the `key` of the 1st pannel |
| activeLineMode   | Activate `tab` underline mode                                              | `'auto' \| 'full' \| 'fixed'` | `'auto'`                    |
| onChange         | Callback when switching panel                                              | `(key: string) => void`       | -                           |
| stretch          | Whether stretch the tab header                                             | `boolean`                     | `true`                      |

### CSS Variables

| Name                        | Description                                                                                 | Default                     |
| --------------------------- | ------------------------------------------------------------------------------------------- | --------------------------- |
| --fixed-active-line-width   | The width of the active tab underline. Only take effect when `activeLineMode` is `'fixed'`. | `30px`                      |
| --title-font-size           | Font size of the displayed text of the tab header                                           | `17px`                      |
| --content-padding           | Padding of the tab content                                                                  | `12px`                      |
| --content-padding           | Padding of the tab content                                                                  | `12px`                      |
| --active-line-height        | The height of the active tab underline                                                      | `2px`                       |
| --active-line-border-radius | The borderRadius of the active tab underline                                                | `var(--active-line-height)` |

## Tabs.Tab

| Name           | Description                                       | Type        | Default |
| -------------- | ------------------------------------------------- | ----------- | ------- |
| key            | Corresponding to `activeKey`                      | `string`    | -       |
| title          | The displayed text of the tab header              | `ReactNode` | -       |
| disabled       | Whether to disable the tab                        | `boolean`   | `false` |
| forceRender    | Whether to render the `DOM` structure when hidden | `boolean`   | `false` |
| destroyOnClose | Unmount content when not visible                  | `boolean`   | `false` |

## FAQ

### Does Tabs support sticky effect?

Yes, but Tabs doesn't have a property like `sticky`. You can add the CSS `position: sticky` to the outer container of Tabs to achieve the ceiling effect.

### How does Tabs work with Swiper, PullToRefresh, and InfiniteScroll to implement a complex information flow interface?

You can refer to this [demo](https://codesandbox.io/s/mystifying-glitter-knpc7u?file=/src/components/getPullToRefreshlData.tsx).
