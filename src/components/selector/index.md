# Selector 选择组

<code src="./demos/demo1.tsx"></code>

## API

| 属性         | 说明             | 类型                                                | 默认值 |
| ------------ | ---------------- | --------------------------------------------------- | ------ |
| value        | 选中项           | string[]                                            | []     |
| defaultValue | 默认项           | string[]                                            | []     |
| columns      | 行展示数         | number                                              | -      |
| options      | 可选项           | [label: string; value: string; disabled?: boolean;] | -      |
| multiple     | 是否允许多选     | boolean                                             | false  |
| disabled     | 是否全局禁止选中 | boolean                                             | false  |
| onChange     | 选项改变时触发   | (value: string[]) => void                           | -      |
