# Input 输入框

`Input` 组件是布局无关的， 它只包括了最基本的输入框部分，如果你想为它增加边框、标题、或是一些操作按钮，可以配合 `List` 或 `Form` 组件使用。

<code src="./demos/index.tsx"></code>

### 属性

| 属性         | 说明                                         | 类型                                                 | 默认值  |
| ------------ | -------------------------------------------- | ---------------------------------------------------- | ------- |
| value        | 输入值                                       | `string`                                             | -       |
| defaultValue | 默认值                                       | `string`                                             | -       |
| onChange     | 输入框内容变化时触发                         | `(value: string) => void`                            | -       |
| placeholder  | 提示文本                                     | `string`                                             | -       |
| disabled     | 是否禁用                                     | `boolean`                                            | `false` |
| readOnly     | 是否只读                                     | `boolean`                                            | `false` |
| clearable    | 是否启用清除图标，点击清除图标后会清空输入框 | `boolean`                                            | `false` |
| onClear      | 点击清除按钮后触发                           | `() => void`                                         | -       |
| id           | input 元素的 id，常用来配合 label 使用       | `string`                                             | -       |
| onEnterPress | 按下回车的回调                               | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | -       |

此外还支持以下原生属性：`maxLength` `minLength` `max` `min` `autoComplete` `enterKeyHint` `pattern` `type` `onFocus` `onBlur` `autoCapitalize` `autoCorrect` `onKeyDown` `onKeyUp`

### CSS 变量

| 属性                | 说明                   | 默认值                   |
| ------------------- | ---------------------- | ------------------------ |
| --font-size         | 字号                   | `17px`                   |
| --color             | 文字颜色               | `var(--adm-color-text)`  |
| --placeholder-color | `placeholder` 文字颜色 | `var(--adm-color-light)` |
| --disabled-color    | 禁用状态下的文字颜色   | `var(--adm-color-weak)`  |

### Ref

| 属性  | 说明             | 类型         |
| ----- | ---------------- | ------------ |
| clear | 清空输入内容     | `() => void` |
| focus | 让输入框获得焦点 | `() => void` |
| blur  | 让输入框失去焦点 | `() => void` |

## FAQ

### 当 type 为 number 时，maxLength 限制为什么没有生效？

在原生 `input` 中，`maxlength` 只在 `type` 为 `text`, `search`, `url`, `tel`, `email`, `password` 时生效，请参考 [MDN 上的文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-maxlength)。

如果需要对 number 类型对输入框进行限制，可以通过 `max` `min` 属性。
