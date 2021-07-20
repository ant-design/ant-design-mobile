# Search 搜索

<code src="./demo/demo1.tsx" />

## API

| 属性             | 说明                                         | 类型                    | 默认值 |
| ---------------- | -------------------------------------------- | ----------------------- | ------ |
| value            | 输入值                                       | string                  | -      |
| placeholder      | 提示文本                                     | string                  | -      |
| maxLength        | 输入的最大字符数                             | number \| string        | -      |
| clearable        | 是否启用清除图标，点击清除图标后会清空输入框 | boolean                 | true   |
| showCancelButton | 是否在搜索框右侧显示按钮                     | boolean                 | false  |
| onSearch         | 输入框回车时触发                             | (value: string) => void | -      |
| onChange         | 输入框内容变化时触发                         | (value: string) => void | -      |
| onFocus          | 输入框获得焦点时触发                         | event: Event            | -      |
| onBlur           | 输入框失去焦点时触发                         | event: Event            | -      |
| onClear          | 点击清除按钮后触发                           | event: Event            | -      |
| onCancel         | 点击取消按钮时触发                           | () => void              | -      |
