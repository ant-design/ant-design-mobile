# NoticeBar 通告栏

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性      | 说明                             | 类型                                        | 默认值              |
| --------- | -------------------------------- | ------------------------------------------- | ------------------- |
| color     | 通告栏的类型                     | `'default' \| 'alert' \| 'error' \| 'info'` | `'default'`         |
| delay     | 开始滚动的延迟，单位 `ms`        | `number`                                    | `2000`              |
| speed     | 滚动速度，单位 `px/s`            | `number`                                    | `50`                |
| content   | 公告内容                         | `React.ReactNode`                           | -                   |
| closeable | 是否可关闭                       | `boolean`                                   | `false`             |
| onClose   | 关闭时的回调                     | `() => void`                                | -                   |
| extra     | 额外操作区域，显示在关闭按钮左侧 | `React.ReactNode`                           | -                   |
| icon      | 左侧广播图标                     | `React.ReactNode`                           | `<SoundOutlined />` |

### CSS 变量

| 属性               | 说明           | 默认值    |
| ------------------ | -------------- | --------- |
| --background-color | 背景色         | `#ababab` |
| --border-color     | 边框颜色       | `#999999` |
| --text-color       | 文字颜色       | `#ffffff` |
| --font-size        | 文字字号       | `15px`    |
| --icon-font-size   | 左侧图标的字号 | `18px`    |
| --height           | 整体高度       | `38px`    |
