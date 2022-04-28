# Form

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo3.tsx"></code>

<code src="./demos/demo5.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Form

### Props

| Name              | Description                                                                                | Type                                               | Default      |
| ----------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------- | ------------ |
| mode              | Support two modes: default and card.                                                       | `'default' \| 'card'`                              | `'default'`  |
| layout            | Layout mode                                                                                | `'vertical' \| 'horizontal'`                       | `'vertical'` |
| disabled          | Whether it is disabled                                                                     | `boolean`                                          | `false`      |
| hasFeedback       | Whether to show error feedback                                                             | `boolean`                                          | `true`       |
| requiredMarkStyle | The style of required or optional mark                                                     | `'asterisk' \| 'text-required' \| 'text-optional'` | `'asterisk'` |
| footer            | The footer content. Commonly used for placing submit buttons.                              | `ReactNode`                                        | -            |
| form              | Form control instance created by `Form.useForm()`. Automatically created when not provided | `FormInstance`                                     | -            |
| initialValues     | Set value by Form initialization or reset                                                  | `object`                                           | -            |
| name              | Form name. Will be the prefix of Field `id`                                                | `string`                                           | -            |
| preserve          | Keep field value even when field removed                                                   | `boolean`                                          | `true`       |
| validateMessages  | Validation prompt template, description see below                                          | `ValidateMessages`                                 | -            |
| validateTrigger   | Config field validate trigger                                                              | `string \| string[]`                               | `'onChange'` |
| onFieldsChange    | Trigger when field updated                                                                 | `(changedFields, allFields) => void`               | -            |
| onFinish          | Trigger after submitting the form and verifying data successfully                          | `(values) => void`                                 | -            |
| onFinishFailed    | Trigger after submitting the form and verifying data failed                                | `({ values, errorFields, outOfDate }) => void`     | -            |
| onValuesChange    | Trigger when value updated                                                                 | `(changedValues, allValues) => void`               | -            |

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

### CSS Variables

| Name            | Description                     | Default                             |
| --------------- | ------------------------------- | ----------------------------------- |
| --border-inner  | Border style between form items | `solid 1px var(--adm-border-color)` |
| --border-top    | Border style of the form top    | `solid 1px var(--adm-border-color)` |
| --border-bottom | Border style of the form bottom | `solid 1px var(--adm-border-color)` |

## Form.Item

### Props

| Name                                               | Description                                                                                                                                                                     | Type                                          | Default                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------------------------------- |
| label                                              | Label name                                                                                                                                                                      | `ReactNode`                                   | -                                                                     |
| help                                               | Prompt text                                                                                                                                                                     | `ReactNode`                                   | -                                                                     |
| required                                           | Whether it is required                                                                                                                                                          | `boolean`                                     | `false`（if `rules` is set, it would be judged according to `rules`） |
| disabled                                           | Whether it is disabled                                                                                                                                                          | `boolean`                                     | The `disabled` of parent Form                                         |
| noStyle                                            | No styles, only use field management                                                                                                                                            | `boolean`                                     | `false`                                                               |
| hidden                                             | Hide this field                                                                                                                                                                 | `boolean`                                     | `false`                                                               |
| layout                                             | Layout mode                                                                                                                                                                     | `'vertical' \| 'horizontal'`                  | The `layout` of parent Form                                           |
| childElementPosition <Experimental></Experimental> | Position of the widget.                                                                                                                                                         | `'normal' \| 'right'`                         | `'normal'`                                                            |
| hasFeedback                                        | Whether to show error feedback                                                                                                                                                  | `boolean`                                     | `true`                                                                |
| dependencies                                       | Set the dependency field. See below                                                                                                                                             | `NamePath[]`                                  | -                                                                     |
| valuePropName                                      | Props of children node, for example, the prop of Switch is 'checked'. This prop is an encapsulation of `getValueProps`, which will be invalid after customizing `getValueProps` | `string`                                      | `value`                                                               |
| name                                               | Field name, support array                                                                                                                                                       | `NamePath`                                    | -                                                                     |
| rules                                              | Rules for field validation.                                                                                                                                                     | `Rule[]`                                      | -                                                                     |
| messageVariables                                   | The default validate field info                                                                                                                                                 | `Record<string, string>`                      | -                                                                     |
| trigger                                            | When to collect the value of children node.                                                                                                                                     | `string`                                      | `onChange`                                                            |
| validateTrigger                                    | When to validate the value of children node                                                                                                                                     | `string \| string[]`                          | `onChange`                                                            |
| shouldUpdate                                       | Custom field update logic. See below                                                                                                                                            | `boolean \| (prevValue, curValue) => boolean` | `false`                                                               |
| initialValue                                       | Config sub default value. Form `initialValues` get higher priority when conflict.                                                                                               | `any`                                         | -                                                                     |

The layout of Form.Item is based on List.Item. So it also supports these props of [List.Item](./list#listitem):

`onClick` `extra` `clickable` `arrow` `description`

A control wrapped by `Form.Item` with the `name` property set, the form control will **automatically add** `value` (or other properties specified by `valuePropName`) `onChange` (or other properties specified by `trigger`), data synchronization will be taken over by Form. So if you set a `name` property on `Form.Item`, **make sure its `children` is a valid `ReactElement` control** and can accept the `value' mentioned above ` and `onChange` properties (or other properties specified), for example:

```jsx
<Form.Item name='foo'>
  <Input />
</Form.Item>
```

And the following spellings are wrong:

```jsx
<Form.Item name='foo'>
  <Input />
  <div>hello</div>
</Form.Item>
// Wrong: Form.Item's children contain multiple elements
```

```jsx
<Form.Item name='foo'>
  hello
  <Input />
</Form.Item>
// Wrong: Same as above, Form.Item's children contains multiple elements
```

```jsx
<Form.Item name='foo'>
  <div>
    <Input />
  </div>
</Form.Item>
// Wrong: Form.Item's children is actually a div, and div cannot accept value and onChange properties
```

Also, please note:

1. You shouldn't use `onChange` on each form control to **collect data**(use `onValuesChange` of Form), but you can still listen to `onChange`.
2. You cannot set value for each form control via `value` or `defaultValue` prop, you should set default value with `initialValues` of Form. Note that `initialValues` cannot be updated by `setState` dynamically, you should use `setFieldsValue` in that situation.
3. You shouldn't call `setState` manually, please use `form.setFieldsValue` to change value programmatically.

For example, the following code is wrong:

```jsx
<Form.Item name='foo'>
  <Input
    value={myInputValue} // Wrong: Value should not be manually controlled
    onChange={(v) => { setMyInputValue(v) }} // Wrong: Although you can listen to the onChange event, you should not maintain your own state here
  />
</Form.Item>
```

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

## Custom field

Customized or third-party form controls can be used in Form, too. Controls must follow these conventions:

- It has a controlled property `value`.
- It has event `onChange`.

<code src="./demos/demo4.tsx"></code>

## Form.Header

You can use `Form.Header` to group form items.

### Props

| Name     | Description                                                                      | Type        | Default |
| -------- | -------------------------------------------------------------------------------- | ----------- | ------- |
| children | Group header. If not passed, it will be rendered as a delimiter with no content. | `ReactNode` | -       |

## Form.Subscribe

### Props

| Name     | Description                                   | Type                                                                    | Default |
| -------- | --------------------------------------------- | ----------------------------------------------------------------------- | ------- |
| to       | Same as the `dependencies` prop of Form.Item. | `NamePath[]`                                                            | -       |
| children | Render function.                              | `(changedValues: Record<string, any>, form: FormInstance) => ReactNode` | -       |

### useWatch

<code src="./demos/demo-use-watch.tsx"></code>

### Demo

<code src="./demos/demo-subscribe.tsx"></code>

## Form.Array <Experimental></Experimental>

Provides array management for fields.

| Name         | Description                                                                       | Type                                                                          | Default |
| ------------ | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------- |
| name         | Field name, support array.                                                        | `NamePath[]`                                                                  | -       |
| children     | Render function.                                                                  | `(fields: FormArrayField[], operation: FormArrayOperation) => ReactElement[]` | -       |
| renderHeader | Render the header of each field.                                                  | `(field: FormArrayField, operation: FormArrayOperation) => ReactNode`         | -       |
| renderAdd    | Render the content of add button.                                                 | `() => ReactNode`                                                             | -       |
| onAdd        | Custom add function.                                                              | `(operation: FormArrayOperation) => void`                                     | -       |
| initialValue | Config sub default value. Form `initialValues` get higher priority when conflict. | `any[]`                                                                       | -       |

### FormArrayField

| Name  | Description      | Type     |
| ----- | ---------------- | -------- |
| index | The array index. | `number` |
| key   | The unique key.  | `number` |

### FormArrayOperation

The operation functions for Form.Array.

| Name   | Description     | Type                       |
| ------ | --------------- | -------------------------- |
| add    | Add a field.    | `(initValue: any) => void` |
| remove | Remove a field. | `(index: number) => void`  |

### Demo

<code src="./demos/demo-array.tsx"></code>

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

### Rule

Rule supports a config object, or a function returning config object:

```tsx
type Rule = RuleConfig | ((form: FormInstance) => RuleConfig);
```

| Name            | Description                                                                                                                            | Type                       |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| defaultField    | Validate rule for all array elements, valid when `type` is `array`                                                                     | `rule`                     |
| enum            | Match enum value. You need to set `type` to `enum` to enable this                                                                      | `any[]`                    |
| len             | Length of string, number, array                                                                                                        | `number`                   |
| max             | `type` required: max length of `string`, `number`, `array`                                                                             | `number`                   |
| message         | Error message. Will auto generate by [template](#validatemessages) if not provided                                                     | `string`                   |
| min             | `type` required: min length of `string`, `number`, `array`                                                                             | `number`                   |
| pattern         | Regex pattern                                                                                                                          | `RegExp`                   |
| required        | Required field                                                                                                                         | `boolean`                  |
| transform       | Transform value to the rule before validation                                                                                          | `(value) => any`           |
| type            | Normally `string` \|`number` \|`boolean` \|`url` \| `email`. More type to ref [here](https://github.com/yiminghe/async-validator#type) | `string`                   |
| validateTrigger | Set validate trigger event. Must be the sub set of `validateTrigger` in Form.Item                                                      | `string \| string[]`       |
| validator       | Customize validation rule. Accept Promise as return. See [example](#custom-field)                                                      | `(rule, value) => Promise` |
| warningOnly     | Warning only. Not block form submit                                                                                                    | `boolean`                  |
| whitespace      | Failed if only has whitespace, only work with `type: 'string'` rule                                                                    | `boolean`                  |
