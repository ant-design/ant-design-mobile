---
title: Form
nav:
  title: components
  path: /components
---

Should know[form](../wiki/form) first


### DEMO

<code src="./demo/form.tsx" />

### Form

> The props as follow can be found https://github.com/react-component/field-form

| Properties       | Description                  | Type                    | Default |
| ---------------- | ---------------------------- | ----------------------- | ------- |
| initialValues    | initial values of Form       | any[]                   | []      |
| form             | FormInstance                 | FormInstance            | -       |
| validateMessages | validateMessages             | ValidateMessages        | -       |
| onFinish         | callback when submit success | (values: any[]) => void | -       |
| onFinishFailed   | callback when submit error   | (errorInfo) => void     | -       |

### Form.Group

| Properties       | Description               | Type            | Default |
| ---------------- | ------------------------- | --------------- | ------- |
| renderHeader     | header react node         | React.ReactNode | -       |
| unstable_noStyle | do not use internal style | boolean         | false   |

### Form.Item

| Properties        | Description               | Type                                       | Default   |
| ----------------- | ------------------------- | ------------------------------------------ | --------- |
| label             | title of input            | React.ReactNode                            | -         |
| position          | position of input control | 'default' \| 'thumb' \| 'brief' \| 'label' | 'default' |
| arrow             | has arrow                 | boolean                                    | false     |
| extra             | extra react node          | React.ReactNode                            | -         |
| unstable_noStyle  | do not use internal style | boolean                                    | false     |
| disabled          | is disabled               | boolean                                    | false     |
| dependencies      | as rc-field-form          | NamePath[]                                 | -         |
| getValueFromEvent | as rc-field-form          | (...args: EventArgs) => StoreValue         | -         |
| name              | as rc-field-form          | NamePath                                   | -         |
| rules             | as rc-field-form          | Rule[]                                     | -         |
| validateFirst     | as rc-field-form          | boolean \| 'parallel'                      | false     |
| valuePropName     | as rc-field-form          | string                                     | -         |
| initialValue      | as rc-field-form          | any                                        | -         |

> renderHeader，label，position，arrow，extra will have no effect if unstable_noStyle is true
