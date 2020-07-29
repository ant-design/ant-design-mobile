---
title: 搜索框
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 参数

### SearchBar

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue |    搜索框的默认值     | String |    |
| value      |  搜索框的当前值  | String |    |
| placeholder    |    placeholder     | String |    |
| onSubmit    |  submit 事件 (点击键盘的 enter)  | (val: string): void |    |
| onChange    |    change 事件的回调     | (val: string): void |    |
| onFocus    |    focus 事件的回调     | (): void |    |
| onBlur    |    blur 事件的回调     | (): void |    |
| onCancel  | 点击`取消`按钮触发 | (val: string): void |    |
| showCancelButton    |    是否一直显示`取消`按钮     | bool |  `false`  |
| cancelText    |   定制`取消`按钮的文字     | String |  `取消`  |
| disabled    |  设置禁用   | bool |  `false`  |
| onClear    |    点击 clear 图标触发  | (val: string): void |    |
| maxLength      |  最多允许输入的字符个数    | number | -  |
| borderColor      |  搜索框颜色    | string | -  |

#### SearchBar ref methods

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| focus     | 使 SearchBar 聚焦  | (): void |  -  |
