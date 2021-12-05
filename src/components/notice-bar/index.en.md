# NoticeBar

<code src="./demos/demo1.tsx"></code>

## API

| Name      | Description                                                          | Type                                        | Default             |
| --------- | -------------------------------------------------------------------- | ------------------------------------------- | ------------------- |
| color     | The type of the NoticeBar                                            | `'default' \| 'alert' \| 'error' \| 'info'` | `'default'`         |
| delay     | Delay to start scrolling, unit `ms`                                  | `number`                                    | `2000`              |
| speed     | Scroll speed, unit `px/s`                                            | `number`                                    | `50`                |
| content   | The content of the NoticeBar                                         | `React.ReactNode`                           | -                   |
| closeable | Whether it can be closed                                             | `boolean`                                   | `false`             |
| onClose   | Callback when closed                                                 | `() => void`                                | -                   |
| extra     | Additional operating area, displayed to the left of the close button | `React.ReactNode`                           | -                   |
| icon      | Radio icon on the left                                               | `React.ReactNode`                           | `<SoundOutlined />` |

## CSS Variables

| Name               | Description      | Default   |
| ------------------ | ---------------- | --------- |
| --background-color | background color | `#b2b2b2` |
| --border-color     | border color     | `#a0a0a0` |
| --text-color       | text color       | `#ffffff` |
