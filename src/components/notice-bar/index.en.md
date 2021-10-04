# NoticeBar

<code src="./demos/index.tsx"></code>

## API

| Name      | Description                                                          | Type                                        | Default             |
| --------- | -------------------------------------------------------------------- | ------------------------------------------- | ------------------- |
| color     | the type of the NoticeBar                                            | `'default' \| 'alert' \| 'error' \| 'info'` | `'default'`         |
| delay     | delay to start scrolling, unit `ms`                                  | `number`                                    | `2000`              |
| speed     | scroll speed, unit `px/s`                                            | `number`                                    | `50`                |
| content   | the content of the NoticeBar                                         | `React.ReactNode`                           | -                   |
| closeable | whether it can be closed                                             | `boolean`                                   | `false`             |
| onClose   | callback when closed                                                 | `() => void`                                | -                   |
| extra     | additional operating area, displayed to the left of the close button | `React.ReactNode`                           | -                   |
| icon      | radio icon on the left                                               | `React.ReactNode`                           | `<SoundOutlined />` |

## CSS Variables

| Name               | Description      | Default   |
| ------------------ | ---------------- | --------- |
| --background-color | background color | `#b2b2b2` |
| --border-color     | border color     | `#a0a0a0` |
| --text-color       | text color       | `#ffffff` |
