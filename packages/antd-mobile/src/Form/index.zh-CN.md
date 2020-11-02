---
title: 表单
nav:
  title: 组件
  path: /components
---

表单组件，可先阅读[表单设计](../wiki/form)

### 展示

<code src="./demo/form.tsx" />

### Form

> 以下列出的 Form 属性可参考 https://github.com/react-component/field-form

| 属性             | 说明       | 类型                    | 默认值 |
| ---------------- | ---------- | ----------------------- | ------ |
| initialValues    | 表单初始值 | any[]                   | []     |
| form             | form 对象  | FormInstance            | -      |
| validateMessages | 验证信息   | ValidateMessages        | -      |
| onFinish         | 提交成功   | (values: any[]) => void | -      |
| onFinishFailed   | 提交失败   | (errorInfo) => void     | -      |

### Form.Group

| 属性             | 说明                                                      | 类型            | 默认值 |
| ---------------- | --------------------------------------------------------- | --------------- | ------ |
| renderHeader     | 分组 header 信息                                          | React.ReactNode | -      |
| unstable_noStyle | 不使用默认样式，一般在 Checkbox.Group, Radio.Group 时使用 | boolean         | false  |

### Form.Item

| 属性              | 说明             | 类型                                       | 默认值    |
| ----------------- | ---------------- | ------------------------------------------ | --------- |
| label             | title 信息       | React.ReactNode                            | -         |
| position          | 控件所在位置     | 'default' \| 'thumb' \| 'brief' \| 'label' | 'default' |
| arrow             | 是否有箭头       | boolean                                    | false     |
| extra             | 额外信息         | React.ReactNode                            | -         |
| unstable_noStyle  | 不使用默认样式   | boolean                                    | false     |
| disabled          | 是否禁用         | boolean                                    | false     |
| dependencies      | 同 rc-field-form | NamePath[]                                 | -         |
| getValueFromEvent | 同 rc-field-form | (...args: EventArgs) => StoreValue         | -         |
| name              | 同 rc-field-form | NamePath                                   | -         |
| rules             | 同 rc-field-form | Rule[]                                     | -         |
| validateFirst     | 同 rc-field-form | boolean \| 'parallel'                      | false     |
| valuePropName     | 同 rc-field-form | string                                     | -         |
| initialValue      | 同 rc-field-form | any                                        | -         |

> 注意如果使用了 unstable_noStyle 的时候，renderHeader，label，position，arrow，extra 等于样式布局相关的属性不生效
