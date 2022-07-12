# Input 输入框

通过键盘输入内容，是最基础的表单域包装。

## 何时使用

一般用在表单页进行信息的收集，提供文本框、选择框两种类型。

`Input` 组件是布局无关的， 它只包括了最基本的输入框部分，如果你想为它增加边框、标题、或是一些操作按钮，可以配合 `List` 或 `Form` 组件使用。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Input

### 属性

| 属性                   | 说明                                                                                                      | 类型                                                 | 默认值  |
| ---------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------- |
| clearable              | 是否启用清除图标，点击清除图标后会清空输入框                                                              | `boolean`                                            | `false` |
| defaultValue           | 默认值                                                                                                    | `string`                                             | -       |
| disabled               | 是否禁用                                                                                                  | `boolean`                                            | `false` |
| id                     | `input` 元素的 `id`，常用来配合 `label` 使用                                                              | `string`                                             | -       |
| max                    | 最大值，仅在 `type` 为 `number` 时生效                                                                    | `number`                                             | -       |
| min                    | 最小值，仅在 `type` 为 `number` 时生效                                                                    | `number`                                             | -       |
| onChange               | 输入框内容变化时触发                                                                                      | `(value: string) => void`                            | -       |
| onClear                | 点击清除按钮后触发                                                                                        | `() => void`                                         | -       |
| onEnterPress           | 按下回车的回调                                                                                            | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | -       |
| onlyShowClearWhenFocus | 如果 `true`，那么只有输入框聚焦时才会显示清除按钮；如果为 `false`，那么输入框失去焦点后依旧会显示清除按钮 | `boolean`                                            | `true`  |
| placeholder            | 提示文本                                                                                                  | `string`                                             | -       |
| readOnly               | 是否只读                                                                                                  | `boolean`                                            | `false` |
| value                  | 输入值                                                                                                    | `string`                                             | -       |

此外还支持以下原生属性：`maxLength` `minLength` `autoComplete` `autoFocus` `enterKeyHint` `pattern` `inputMode` `type` `onFocus` `onBlur` `autoCapitalize` `autoCorrect` `onKeyDown` `onKeyUp` `onCompositionStart` `onCompositionEnd` `onClick`

### CSS 变量

| 属性                | 说明                   | 默认值                   |
| ------------------- | ---------------------- | ------------------------ |
| --color             | 文字颜色               | `var(--adm-color-text)`  |
| --font-size         | 字号                   | `17px`                   |
| --placeholder-color | `placeholder` 文字颜色 | `var(--adm-color-light)` |
| --text-align        | 文字对齐方式           | `left`                   |

### Ref

| 属性          | 说明             | 类型                         |
| ------------- | ---------------- | ---------------------------- |
| blur          | 让输入框失去焦点 | `() => void`                 |
| clear         | 清空输入内容     | `() => void`                 |
| focus         | 让输入框获得焦点 | `() => void`                 |
| nativeElement | 原始 input 元素  | `HtmlInputElement` \| `null` |

## FAQ

### 当 type 为 number 时，maxLength 限制为什么没有生效？

在原生 `input` 中，`maxlength` 只在 `type` 为 `text`, `search`, `url`, `tel`, `email`, `password` 时生效，请参考 [MDN 上的文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-maxlength)。

如果需要对 number 类型的输入框进行限制，可以通过 `max` `min` 属性。

### 在 iOS 下，当我使用输入法输入文字时，点击清除按钮，为什么有时候会导致输入框失去焦点？

这是预期行为，具体当原因请查阅这个 [issue](https://github.com/ant-design/ant-design-mobile/issues/5212)。

### 在 iOS 下，为什么设置了 `autoFocus` 还是不能自动获取焦点？

这是预期行为，因为 iOS 系统对聚焦有限制。具体原因请查阅这个 [issue](https://github.com/ant-design/ant-design-mobile/issues/5256)。
