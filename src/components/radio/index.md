# Radio 单选框

<code src="./demos/index.tsx" />

## API

```ts | pure
type RadioValue = string | number
```

### Radio

| 参数           | 说明                          | 类型                   | 默认值 |
| -------------- | ----------------------------- | ---------------------- | ------ |
| checked        | 指定当前是否选中              | boolean                | false  |
| defaultChecked | 初始是否选中                  | boolean                | false  |
| disabled       | 失效状态                      | boolean                | false  |
| onChange       | 变化时回调函数                | (val: boolean) => void | -      |
| value          | 携带的标识值，用于 Group 模式 | RadioValue             | -      |
| block          | 是否渲染为块级元素            | boolean                | false  |

### Radio.Group

| 参数         | 说明           | 类型                        | 默认值 |
| ------------ | -------------- | --------------------------- | ------ |
| defaultValue | 默认选中的选项 | RadioValue                  | -      |
| disabled     | 整组失效       | boolean                     | false  |
| value        | 指定选中的选项 | RadioValue                  | -      |
| onChange     | 变化时回调函数 | (value: RadioValue) => void | -      |
