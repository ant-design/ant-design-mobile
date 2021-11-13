# CapsuleTabs 胶囊选项卡

<code src="./demos/index.tsx"></code>

## CapsuleTabs

### 属性

| 属性             | 说明                                             | 类型                    | 默认值             |
| ---------------- | ------------------------------------------------ | ----------------------- | ------------------ |
| activeKey        | 当前激活 `tab` 面板的 `key`                      | `string \| null`        | -                  |
| defaultActiveKey | 初始化选中面板的 `key`，如果没有设置 `activeKey` | `string \| null`        | 第一个面板的 `key` |
| onChange         | 切换面板的回调                                   | `(key: string) => void` | -                  |

## CapsuleTabs.Tab

| 属性        | 说明                        | 类型        | 默认值  |
| ----------- | --------------------------- | ----------- | ------- |
| key         | 对应 `activeKey`            | `string`    | -       |
| title       | 选项卡头显示文字            | `ReactNode` | -       |
| disabled    | 是否禁用                    | `boolean`   | `false` |
| forceRender | 被隐藏时是否渲染 `DOM` 结构 | `boolean`   | `false` |
