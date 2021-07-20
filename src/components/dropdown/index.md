# Dropdown 下拉菜单

<code src="./demos/demo1.tsx" />

# API

| 属性        | 说明                 | 类型                        | 默认值 |
| ----------- | -------------------- | --------------------------- | ------ |
| activeKey   | 激活的 Item key      | string                      | -      |
| onChange    | activeKey 变化时触发 | (activeKey?: string)=> void | -      |
| forceRender | 强制渲染内容         | boolean                     | false  |

## Dropdown.Item

| 属性      | 说明   | 类型      | 默认值 |
| --------- | ------ | --------- | ------ |
| key       | 唯一值 | string    | -      |
| title     | 标题   | ReactNode | -      |
| highlight | 高亮   | boolean   | false  |
