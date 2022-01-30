# Form

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

Customized or third-party form controls can be used in Form, too. Controls must follow these conventions:

> - It has a controlled property `value`.
> - It has event `onChange`.

<code src="./demos/demo4.tsx"></code>

## Form

### Props

| Name             | Description                                                                                | Type                                           | Default      |
| ---------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------ |
| hasFeedback      | Whether to show error feedback                                                             | `boolean`                                      | `true`       |
| layout           | Layout mode                                                                                | `'vertical' \| 'horizontal'`                   | `'vertical'` |
| mode             | Support two modes: default and card.                                                       | `'default' \| 'card'`                          | `'default'`  |
| footer           | The footer content. Commonly used for placing submit buttons.                              | `ReactNode`                                    | -            |
| form             | Form control instance created by `Form.useForm()`. Automatically created when not provided | `FormInstance`                                 | -            |
| initialValues    | Set value by Form initialization or reset                                                  | `object`                                       | -            |
| name             | Form name. Will be the prefix of Field `id`                                                | `string`                                       | -            |
| preserve         | Keep field value even when field removed                                                   | `boolean`                                      | `true`       |
| validateMessages | Validation prompt template, description see below                                          | `ValidateMessages`                             | -            |
| validateTrigger  | Config field validate trigger                                                              | `string \| string[]`                           | `'onChange'` |
| onFieldsChange   | Trigger when field updated                                                                 | `(changedFields, allFields) => void`           | -            |
| onFinish         | Trigger after submitting the form and verifying data successfully                          | `(values) => void`                             | -            |
| onFinishFailed   | Trigger after submitting the form and verifying data failed                                | `({ values, errorFields, outOfDate }) => void` | -            |
| onValuesChange   | Trigger when value updated                                                                 | `(changedValues, allValues) => void`           | -            |

### FormInstance

| Name            | Description                                                                                                                                                                       | Type                                                                                                        |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| getFieldValue   | Get the value by the field name                                                                                                                                                   | `(name: NamePath) => any`                                                                                   |
| getFieldsValue  | Get values by a set of field names. Return according to the corresponding structure. Default return mounted field value, but you can use `getFieldsValue(true)` to get all values | `(nameList?: NamePath[], filterFunc?: (meta: { touched: boolean, validating: boolean }) => boolean) => any` |
| getFieldError   | Get the error messages by the field name                                                                                                                                          | `(name: NamePath) => string[]`                                                                              |
| getFieldsError  | Get the error messages by the fields name. Return as an array                                                                                                                     | `(nameList?: NamePath[]) => FieldError[]`                                                                   |
| isFieldTouched  | Check if a field has been operated                                                                                                                                                | `(name: NamePath) => boolean`                                                                               |
| isFieldsTouched | Check if fields have been operated. Check if all fields is touched when `allTouched` is `true`                                                                                    | `(nameList?: NamePath[], allTouched?: boolean) => boolean`                                                  |
| resetFields     | Reset fields to `initialValues` `initialValues`                                                                                                                                   | `(fields?: FieldData[]) => void`                                                                            |
| setFields       | Set fields status                                                                                                                                                                 | `(fields: FieldData[]) => void`                                                                             |
| setFieldsValue  | Set fields value(Will directly pass to form store. If you do not want to modify passed object, please clone first)                                                                | `(values) => void`                                                                                          |
| submit          | Submit the form. It's same as click `submit` button                                                                                                                               | `() => void`                                                                                                |
| validateFields  | Validate fields                                                                                                                                                                   | `(nameList?: NamePath[]) => Promise`                                                                        |

### validateMessages

Form provides [default verification error messages](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts). You can modify the template by configuring `validateMessages` property. A common usage is to configure localization:

```jsx
const validateMessages = {
  required: "'${name}' is required!",
  // ...
};
<Form validateMessages={validateMessages} />;
```

## Form.Item

### Props

| Name             | Description                                                                                                                                                                     | Type                                          | Default                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------------------------------- |
| label            | Label name                                                                                                                                                                      | `ReactNode`                                   | -                                                                     |
| help             | Prompt text                                                                                                                                                                     | `ReactNode`                                   | -                                                                     |
| extra            | The right area of the form item.                                                                                                                                                | `ReactNode`                                   | -                                                                     |
| required         | Whether it is required                                                                                                                                                          | `boolean`                                     | `false`（if `rules` is set, it would be judged according to `rules`） |
| disabled         | Whether it is disabled                                                                                                                                                          | `boolean`                                     | `false`                                                               |
| noStyle          | No styles, only use field management                                                                                                                                            | `boolean`                                     | `false`                                                               |
| hidden           | Hide this field                                                                                                                                                                 | `boolean`                                     | `false`                                                               |
| layout           | Layout mode                                                                                                                                                                     | `'vertical' \| 'horizontal'`                  | The `layout` of parent Form                                           |
| hasFeedback      | Whether to show error feedback                                                                                                                                                  | `boolean`                                     | `true`                                                                |
| arrow            | Whether to show the arrow icon on the right side                                                                                                                                | `boolean \| ReactNode`                        | -                                                                     |
| onClick          | Trigger when item get clicked                                                                                                                                                   | `(e: React.MouseEvent) => void`               | -                                                                     |
| dependencies     | Set the dependency field. See below                                                                                                                                             | `NamePath[]`                                  | -                                                                     |
| valuePropName    | Props of children node, for example, the prop of Switch is 'checked'. This prop is an encapsulation of `getValueProps`, which will be invalid after customizing `getValueProps` | `string`                                      | `value`                                                               |
| name             | Field name, support array                                                                                                                                                       | `NamePath`                                    | -                                                                     |
| rules            | Rules for field validation.                                                                                                                                                     | `Rule[]`                                      | -                                                                     |
| messageVariables | The default validate field info                                                                                                                                                 | `Record<string, string>`                      | -                                                                     |
| trigger          | When to collect the value of children node.                                                                                                                                     | `string`                                      | `onChange`                                                            |
| validateTrigger  | When to validate the value of children node                                                                                                                                     | `string \| string[]`                          | `onChange`                                                            |
| shouldUpdate     | Custom field update logic. See below                                                                                                                                            | `boolean \| (prevValue, curValue) => boolean` | `false`                                                               |

After wrapped by `Form.Item` with `name` property, `value`(or other property defined by `valuePropName`) `onChange`(or other property defined by `trigger`) props will be added to form controls, the flow of form data will be handled by Form which will cause:

1. You shouldn't use `onChange` on each form control to **collect data**(use `onValuesChange` of Form), but you can still listen to `onChange`.
2. You cannot set value for each form control via `value` or `defaultValue` prop, you should set default value with `initialValues` of Form. Note that `initialValues` cannot be updated by `setState` dynamically, you should use `setFieldsValue` in that situation.
3. You shouldn't call `setState` manually, please use `form.setFieldsValue` to change value programmatically.

### dependencies

Used when there are dependencies between fields. If a field has the `dependencies` prop, this field will automatically trigger updates and validations when upstream is updated. A common scenario is a user registration form with "password" and "confirm password" fields. The "Confirm Password" validation depends on the "Password" field. After setting `dependencies`, the "Password" field update will re-trigger the validation of "Check Password".

`dependencies` shouldn't be used together with `shouldUpdate`, since it may result in conflicting update logic.

### shouldUpdate

Form updates only the modified field-related components for performance optimization purposes by incremental update. In most cases, you only need to write code or do validation with the [`dependencies`](#dependencies) property. In some specific cases, such as when a new field option appears with a field value changed, or you just want to keep some area updating by form update, you can modify the update logic of Form.Item via the `shouldUpdate`.

When `shouldUpdate` is `true`, any Form update will cause the Form.Item to be re-rendered. This is very helpful for custom rendering some areas:

```jsx
<Form.Item shouldUpdate>
  {() => {
    return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
  }}
</Form.Item>
```

When `shouldUpdate` is a function, it will be called by form values update. Providing original values and current value to compare. This is very helpful for rendering additional fields based on values:

```jsx
<Form.Item shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}>
  {() => {
    return (
      <Form.Item name="other">
        <Input />
      </Form.Item>
    );
  }}
</Form.Item>
```

### messageVariables

You can modify the default verification information of Form.Item through `messageVariables`.

```jsx
<Form>
  <Form.Item messageVariables={{ another: 'good' }} label="user">
    <Input />
  </Form.Item>
  <Form.Item messageVariables={{ label: 'good' }} label={<span>user</span>}>
    <Input />
  </Form.Item>
</Form>
```

## Some Common Type Definitions

### NamePath

`string | number | (string | number)[]`

### FieldData

| Name       | Description              | Type         |
| ---------- | ------------------------ | ------------ |
| errors     | Error messages           | `string[]`   |
| name       | Field name path          | `NamePath[]` |
| touched    | Whether is operated      | `boolean`    |
| validating | Whether is in validating | `boolean`    |
| value      | Field value              | `any`        |
