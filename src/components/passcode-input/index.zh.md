# PasscodeInput 密码输入框 <Experimental></Experimental>

密码、验证码输入框

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性         | 说明                                     | 类型                      | 默认值  |
| ------------ | ---------------------------------------- | ------------------------- | ------- |
| length       | 输入框长度                               | `number`                  | `6`     |
| value        | 受控值                                   | `string`                  | -       |
| defaultValue | 非受控值                                 | `string`                  | -       |
| className    | 外层 className                           | `string`                  | -       |
| style        | 外层 style                               | `CSSProperties`           | -       |
| plain        | 是否展示明文                             | `boolean`                 | `false` |
| error        | 是否有错                                 | `boolean`                 | `false` |
| caret        | 是否展示光标                             | `boolean`                 | `true`  |
| seperated    | 格子是否是彼此分离的                     | `boolean`                 | `false` |
| keyboard     | 键盘组件，如不传，默认使用系统原生的键盘 | `NumberKeyboard`          | -       |
| onChange     | 输入时回调                               | `(value: string) => void` | -       |
| onFocus      | 获取焦点回调                             | `() => void`              | -       |
| onBlur       | 失去焦点回调                             | `() => void`              | -       |
| onFill       | 填写完成回调                             | `() => void`              | -       |

当 `length` 为非正数时以默认值为准。

### Ref

| 属性  | 说明             | 类型         |
| ----- | ---------------- | ------------ |
| focus | 让输入框获得焦点 | `() => void` |
| blur  | 让输入框失去焦点 | `() => void` |

### CSS 变量

| 属性            | 说明                                    | 默认值    |
| --------------- | --------------------------------------- | --------- |
| --cell-gap      | 单元格间距，仅在 `seperated` 模式下生效 | `6px`     |
| --cell-size     | 单元格大小                              | `42px`    |
| --border-color  | 边框颜色                                | `#E5E5E5` |
| --border-radius | 边框圆角                                | `8px`     |
| --dot-size      | 密码隐藏时，点的大小                    | `10px`    |
