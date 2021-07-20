# IndexBar 序列

<code src="./demo/demo1.tsx" />

## API

### IndexBar

| 属性            | 说明                                  | 类型    | 默认值 |
| --------------- | ------------------------------------- | ------- | ------ |
| sticky          | 是否开启锚点自动吸顶                  | boolean | true   |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离，单位为 px | number  | 0      |

### IndexBar Ref

| 属性     | 说明           | 类型                    |
| -------- | -------------- | ----------------------- |
| scrollTo | 滚动到指定锚点 | (index: string) => void |

### IndexBar.Panel

| 属性  | 说明 | 类型   | 默认值         |
| ----- | ---- | ------ | -------------- |
| index | 索引 | string | -              |
| title | 标题 | string | 默认使用 index |
