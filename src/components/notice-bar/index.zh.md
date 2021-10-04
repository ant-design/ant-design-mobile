# NoticeBar 通告栏

<code src="./demos/index.tsx"></code>

## 属性

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

## CSS 变量

| 属性               | 说明     | 默认值    |
| ------------------ | -------- | --------- |
| --background-color | 背景色   | `#b2b2b2` |
| --border-color     | 边框颜色 | `#a0a0a0` |
| --text-color       | 文字颜色 | `#ffffff` |
