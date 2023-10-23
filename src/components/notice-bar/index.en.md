# NoticeBar

Displays a set of message notifications.

## When to Use

It is applicable to the notification of information in the current page, which is a more conspicuous in-page notification method.

## Demos

<code src="./demos/demo1.tsx"></code>

## NoticeBar

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| closeable | Whether it can be closed | `boolean` | `false` |
| color | The type of the NoticeBar | `'default' \| 'alert' \| 'error' \| 'info'` | `'default'` |
| content | The content of the NoticeBar | `React.ReactNode` | - |
| delay | Delay to start scrolling, unit `ms` | `number` | `2000` |
| extra | Additional operating area, displayed to the left of the close button | `React.ReactNode` | - |
| icon | Radio icon on the left | `React.ReactNode` | `<SoundOutline />` |
| onClose | Callback when closed | `() => void` | - |
| onClick | Click event | `() => void` | - |
| speed | Scroll speed, unit `px/s` | `number` | `50` |
| wrap | Whether to display multiple lines | `boolean` | `false` |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --background-color | background color | `var(--adm-color-weak)` |
| --border-color | border color | `var(--adm-color-weak)` |
| --font-size | Font size of notice text content. | `15px` |
| --height | Height of the whole element. | `40px` |
| --icon-font-size | Font size of left icon. | `18px` |
| --text-color | text color | `#ffffff` |
