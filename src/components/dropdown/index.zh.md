# Dropdown 下拉菜单 <Experimental></Experimental>

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx"></code>

## Dropdown

### 属性

| 属性             | 说明                         | 类型                                 | 默认值  |
| ---------------- | ---------------------------- | ------------------------------------ | ------- |
| activeKey        | 激活的 `Item` `key`          | `string \| null`                     | -       |
| defaultActiveKey | 默认激活的 `Item` `key`      | `string \| null`                     | `null`  |
| closeOnMaskClick | 是否在点击遮罩后自动隐藏     | `boolean`                            | `true`  |
| closeOnClickAway | 是否在点击外部区域后自动隐藏 | `boolean`                            | `false` |
| onChange         | `activeKey` 变化时触发       | `(activeKey: string \| null)=> void` | -       |
| arrow            | 自定义 arrow                 | `React.ReactNode`                    | -       |

### Ref

| 属性  | 说明         | 类型         |
| ----- | ------------ | ------------ |
| close | 关闭下拉菜单 | `() => void` |

## Dropdown.Item

### 属性

| 属性           | 说明                        | 类型              | 默认值  |
| -------------- | --------------------------- | ----------------- | ------- |
| key            | 唯一值                      | `string`          | -       |
| title          | 标题                        | `ReactNode`       | -       |
| highlight      | 高亮                        | `boolean`         | `false` |
| forceRender    | 被隐藏时是否渲染 `DOM` 结构 | `boolean`         | `false` |
| destroyOnClose | 不可见时卸载内容            | `boolean`         | `false` |
| arrow          | 自定义 arrow                | `React.ReactNode` | -       |
