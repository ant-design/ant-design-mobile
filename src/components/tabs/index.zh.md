# Tabs 标签页

<code src="./demos/demo1.tsx"></code>

## Tabs

### 属性

| 属性             | 说明                                             | 类型                          | 默认值             |
| ---------------- | ------------------------------------------------ | ----------------------------- | ------------------ |
| activeKey        | 当前激活 `tab` 面板的 `key`                      | `string \| null`              | -                  |
| defaultActiveKey | 初始化选中面板的 `key`，如果没有设置 `activeKey` | `string \| null`              | 第一个面板的 `key` |
| activeLineMode   | 激活 `tab` 下划线的模式                          | `'auto' \| 'full' \| 'fixed'` | `'auto'`           |
| onChange         | 切换面板的回调                                   | `(key: string) => void`       | -                  |
| stretch          | 选项卡头部是否拉伸                               | `boolean`                     | `true`             |

### CSS 变量

| 属性                        | 说明                                                                   | 默认值 |
| --------------------------- | ---------------------------------------------------------------------- | ------ |
| --fixed-active-line-width   | 当前激活 `tab` 下划线的宽度，仅在 `activeLineMode` 为 `'fixed'` 时有效 | `30px` |
| --title-font-size           | 选项卡头文字的大小                                                     | `17px` |
| --content-padding           | `tab` 内容区的 `padding`                                               | `12px` |
| --active-line-height        | 当前激活 `tab` 下划线的高度                                            | `2px`  |
| --active-line-border-radius | 当前激活 `tab` 下划线的圆角                                            | `0`    |

## Tabs.Tab

| 属性        | 说明                        | 类型        | 默认值  |
| ----------- | --------------------------- | ----------- | ------- |
| key         | 对应 `activeKey`            | `string`    | -       |
| title       | 选项卡头显示文字            | `ReactNode` | -       |
| disabled    | 是否禁用                    | `boolean`   | `false` |
| forceRender | 被隐藏时是否渲染 `DOM` 结构 | `boolean`   | `false` |
