# Dropdown 下拉菜单

<code src="./demos/demo1.tsx"></code>

# API

| 属性             | 说明                    | 类型                                 | 默认值 |
| ---------------- | ----------------------- | ------------------------------------ | ------ |
| activeKey        | 激活的 `Item` `key`     | `string \| null`                     | -      |
| defaultActiveKey | 默认激活的 `Item` `key` | `string \| null`                     | `null` |
| onChange         | `activeKey` 变化时触发  | `(activeKey: string \| null)=> void` | -      |

## Dropdown.Item

| 属性                | 说明                         | 类型        | 默认值  |
| ------------------- | ---------------------------- | ----------- | ------- |
| key                 | 唯一值                       | `string`    | -       |
| title               | 标题                         | `ReactNode` | -       |
| highlight           | 高亮                         | `boolean`   | `false` |
| forceRender         | 被隐藏时是否渲染 `DOM` 结构  | `boolean`   | `false` |
| destroyOnClose      | 不可见时卸载内容             | `boolean`   | `false` |
| closeOnContentClick | 是否在点击下拉内容后自动隐藏 | `boolean`   | `false` |
| closeOnMaskClick    | 是否在点击遮罩后自动隐藏     | `boolean`   | `true`  |
