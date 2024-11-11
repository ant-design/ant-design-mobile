# PasscodeInput 密码输入框 <Experimental></Experimental>

密码输入本文框。

## 何时使用

适用于输入密码时需要脱敏显示。

密码、验证码输入框

## 示例

<code src="./demos/demo1.tsx"></code>

## PasscodeInput

### 属性

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| caret | 是否展示光标 | `boolean` | `true` |  |
| className | 外层 className | `string` | - |  |
| defaultValue | 非受控值 | `string` | - |  |
| error | 是否有错 | `boolean` | `false` |  |
| keyboard | 键盘组件，如不传，默认使用系统原生的键盘 | `NumberKeyboard` | - |  |
| inputMode | 输入框类型, 改变原生键盘类型 | `'numeric' \| 'text'` | `'numeric'` | 5.39.0 |
| length | 输入框长度 | `number` | `6` |  |
| plain | 是否展示明文 | `boolean` | `false` |  |
| seperated | 格子是否是彼此分离的 | `boolean` | `false` |  |
| style | 外层 style | `CSSProperties` | - |  |
| value | 受控值 | `string` | - |  |
| onBlur | 失去焦点回调 | `() => void` | - |  |
| onChange | 输入时回调 | `(value: string) => void` | - |  |
| onFill | 填写完成回调 | `() => void` | - |  |
| onFocus | 获取焦点回调 | `() => void` | - |  |

当 `length` 为非正数时以默认值为准。

### Ref

| 属性  | 说明             | 类型         |
| ----- | ---------------- | ------------ |
| blur  | 让输入框失去焦点 | `() => void` |
| focus | 让输入框获得焦点 | `() => void` |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --border-color | 边框颜色 | `var(--adm-color-border)` |
| --border-radius | 边框圆角 | `8px` |
| --cell-gap | 单元格间距，仅在 `seperated` 模式下生效 | `6px` |
| --cell-size | 单元格大小 | `40px` |
| --dot-size | 密码隐藏时，点的大小 | `10px` |
