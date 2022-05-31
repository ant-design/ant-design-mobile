# Dropdown 下拉菜单 <Experimental></Experimental>

向下弹出的菜单面板。

## 何时使用

适用于筛选、排序并更改当前页面内容展示范围或顺序。

## 示例

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx"></code>

## Dropdown

### 属性

| 属性             | 说明                         | 类型                                 | 默认值  |
| ---------------- | ---------------------------- | ------------------------------------ | ------- |
| activeKey        | 激活的 `Item` `key`          | `string \| null`                     | -       |
| arrow            | 自定义 arrow                 | `React.ReactNode`                    | -       |
| closeOnClickAway | 是否在点击外部区域后自动隐藏 | `boolean`                            | `false` |
| closeOnMaskClick | 是否在点击遮罩后自动隐藏     | `boolean`                            | `true`  |
| defaultActiveKey | 默认激活的 `Item` `key`      | `string \| null`                     | `null`  |
| onChange         | `activeKey` 变化时触发       | `(activeKey: string \| null)=> void` | -       |

### Ref

| 属性  | 说明         | 类型         |
| ----- | ------------ | ------------ |
| close | 关闭下拉菜单 | `() => void` |

## Dropdown.Item

### 属性

| 属性           | 说明                        | 类型              | 默认值  |
| -------------- | --------------------------- | ----------------- | ------- |
| arrow          | 自定义 arrow                | `React.ReactNode` | -       |
| destroyOnClose | 不可见时卸载内容            | `boolean`         | `false` |
| forceRender    | 被隐藏时是否渲染 `DOM` 结构 | `boolean`         | `false` |
| highlight      | 高亮                        | `boolean`         | `false` |
| key            | 唯一值                      | `string`          | -       |
| title          | 标题                        | `ReactNode`       | -       |
