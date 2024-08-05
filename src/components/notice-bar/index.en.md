# NoticeBar

Displays a set of message notifications.

## When to Use

It is applicable to the notification of information in the current page, which is a more conspicuous in-page notification method.

## Demos

<code src="./demos/demo1.tsx"></code>

## NoticeBar

### Props

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| closeable | Whether it can be closed | `boolean` | `false` |
| closeIcon | Custom close button icon | `ReactNode` | `<CloseOutline />` |
| color | The type of the NoticeBar | `'default' \| 'alert' \| 'error' \| 'info' \| 'success'` | `'default'` |
| content | The content of the NoticeBar | `React.ReactNode` | - |
| delay | Delay to start scrolling, unit `ms` | `number` | `2000` |
| extra | Additional operating area, displayed to the left of the close button | `React.ReactNode` | - |
| icon | Radio icon on the left | `React.ReactNode` | `<SoundOutline />` |
| onClose | Callback when closed | `() => void` | - |
| onClick | Click event | `() => void` | - |
| speed | Scroll speed, unit `px/s` | `number` | `50` |
| wrap | Whether to display multiple lines | `boolean` | `false` |
| shape | Shape of the NoticeBar (rectangular: sharp; neutral: round corner; rounded: circle/pill shape) | `'rectangular' \| 'neutral' \| 'rounded'` | `'rectangular'` | 5.38.0 |
| bordered | Border visibility of the NoticeBar (`block`: top and bottom border; `true`: full border; `false`: no border) | `'block' \| boolean` | `'block'` | 5.38.0 |

### CSS Variables

| Name | Description | Default | Global | Version |
| --- | --- | --- | --- | --- |
| --background-color | background color | `var(--adm-color-weak)` |
| --border-color | border color | `var(--adm-color-weak)` |
| --font-size | Font size of notice text content. | `15px` |
| --height | Height of the whole element. | `40px` |
| --icon-font-size | Font size of left icon. | `18px` |
| --text-color | text color | `#ffffff` |
| `--adm-notice-bar-border-radius` | Border radius of neutral shape NoticeBar | `4px` | `--adm-notice-bar-border-radius` | 5.38.0 |
| `--adm-notice-bar-border-width` | Border width of bordered NoticeBar | `1px` | `--adm-notice-bar-border-width` | 5.38.0 |
