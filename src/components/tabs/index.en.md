# Tabs

Navigate between content groups.

## When to Use

The current content needs to be divided into groups of the same hierarchical structure for content switching display, which is often used at the top of a form or list.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

<code src="./demos/demo4.tsx"></code>

<code src="./demos/demo5.tsx"></code>

## Tabs

### Props

| Name             | Description                                                                | Type                          | Default                     |
| ---------------- | -------------------------------------------------------------------------- | ----------------------------- | --------------------------- |
| activeKey        | The `key` of the currently active `tab` panel                              | `string \| null`              | -                           |
| activeLineMode   | Activate `tab` underline mode                                              | `'auto' \| 'full' \| 'fixed'` | `'auto'`                    |
| defaultActiveKey | The initialized `key` of the selected panel, if the `activeKey` is not set | `string \| null`              | the `key` of the 1st pannel |
| onChange         | Callback when switching panel                                              | `(key: string) => void`       | -                           |
| stretch          | Whether stretch the tab header                                             | `boolean`                     | `true`                      |
| direction        | Document layout direction                                                  | `'ltr' \| 'rtl'`              | `'ltr'`                     |

### CSS Variables

| Name                        | Description                                                                                 | Default                     |
| --------------------------- | ------------------------------------------------------------------------------------------- | --------------------------- |
| --active-line-border-radius | The borderRadius of the active tab underline                                                | `var(--active-line-height)` |
| --active-line-color         | The color of the active tab underline                                                       | `var(--adm-color-primary)`  |
| --active-line-height        | The height of the active tab underline                                                      | `2px`                       |
| --active-title-color        | The color of the active tab title                                                           | `var(--adm-color-primary)`  |
| --content-padding           | Padding of the tab content                                                                  | `12px`                      |
| --fixed-active-line-width   | The width of the active tab underline. Only take effect when `activeLineMode` is `'fixed'`. | `30px`                      |
| --title-font-size           | Font size of the displayed text of the tab header                                           | `17px`                      |

## Tabs.Tab

| Name           | Description                                       | Type        | Default |
| -------------- | ------------------------------------------------- | ----------- | ------- |
| destroyOnClose | Destroy `dom` when not visible                    | `boolean`   | `false` |
| disabled       | Whether to disable the tab                        | `boolean`   | `false` |
| forceRender    | Whether to render the `DOM` structure when hidden | `boolean`   | `false` |
| key            | Corresponding to `activeKey`                      | `string`    | -       |
| title          | The displayed text of the tab header              | `ReactNode` | -       |

## FAQ

### Does Tabs support sticky effect?

Yes, but Tabs doesn't have a property like `sticky`. You can add the CSS `position: sticky` to the outer container of Tabs to achieve the ceiling effect.

### How does Tabs work with Swiper, PullToRefresh, and InfiniteScroll to implement a complex information flow interface?

You can refer to this [demo](https://codesandbox.io/s/mystifying-glitter-knpc7u?file=/src/components/getPullToRefreshlData.tsx).

### About the type of Tabs.Tab key

`React` will convert the incoming `key` into `string`, the type of `key` only needs to match `React.Key`.
