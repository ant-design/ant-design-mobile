---
title: 数字键盘
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 单独使用
<code src="./demo/single.tsx" />

### 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| header | 自定义虚拟键盘头部 | ReactNode | null |
| disabledKeys | 禁用部分数字按键 | array | null |
| defaultValue | 设置初始默认值 | string | '' |
| placeholder | placeholder | string | null |
| customKey | 自定义位置 | 'X'\|'.'\|'-' | null |
| value | 输入框值 | string | - |
| className | 类名 | string | '' |
| keypadClassName | 键盘类名 | string | '' |
| confirmLabel | 确认键，可提供自定义文字 | string | null |
| confirmDisabled | 确认键是否禁用 | boolean | false |
| onConfirm | 确认键点击 | (v?: string) => void | () => null |
| confirm | 是否显示确认按钮 | boolean | false |
| onFocus | 获得焦点回调 | (v?: string) => void | () => null |
| onBlur | 失去焦点回调 | (v?: string) => void | () => null |
| clear | 是否显示清除图标 | boolean | false |
| disabledAutoScroll | 是否禁用自动滚动 | boolean | false |

> 其他属性见 BaseFormItemType
