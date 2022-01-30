# Form 表单

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：

> - 提供受控属性 `value` 值同名的属性。
> - 提供 `onChange` 事件。

<code src="./demos/demo4.tsx"></code>

<code src="./demos/demo-error.tsx" debug></code>

## Form

### 属性

| 属性             | 说明                                                         | 类型                                           | 默认值       |
| ---------------- | ------------------------------------------------------------ | ---------------------------------------------- | ------------ |
| hasFeedback      | 是否展示错误反馈                                             | `boolean`                                      | `true`       |
| layout           | 布局模式                                                     | `'vertical' \| 'horizontal'`                   | `'vertical'` |
| mode             | 支持默认和卡片两种模式                                       | `'default' \| 'card'`                          | `'default'`  |
| footer           | 表单尾部的内容，常常用来放置提交按钮                         | `ReactNode`                                    | -            |
| form             | 经 `Form.useForm()` 创建的 form 控制实例，不提供时会自动创建 | `FormInstance`                                 | -            |
| initialValues    | 表单默认值，只有初始化以及重置时生效                         | `object`                                       | -            |
| name             | 表单名称，会作为表单字段 `id` 前缀使用                       | `string`                                       | -            |
| preserve         | 当字段被删除时保留字段值                                     | `boolean`                                      | `true`       |
| validateMessages | 验证提示模板，说明见下                                       | `ValidateMessages`                             | -            |
| validateTrigger  | 统一设置字段触发验证的时机                                   | `string \| string[]`                           | `'onChange'` |
| onFieldsChange   | 字段更新时触发                                               | `(changedFields, allFields) => void`           | -            |
| onFinish         | 提交表单且数据验证成功后触发                                 | `(values) => void`                             | -            |
| onFinishFailed   | 提交表单且数据验证失败后触发                                 | `({ values, errorFields, outOfDate }) => void` | -            |
| onValuesChange   | 字段值更新时触发                                             | `(changedValues, allValues) => void`           | -            |

### FormInstance

| 属性            | 说明                                                                                                       | 类型                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| getFieldValue   | 获取对应字段名的值                                                                                         | `(name: NamePath) => any`                                                                                   |
| getFieldsValue  | 获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 `getFieldsValue(true)` 时返回所有值 | `(nameList?: NamePath[], filterFunc?: (meta: { touched: boolean, validating: boolean }) => boolean) => any` |
| getFieldError   | 获取对应字段名的错误信息                                                                                   | `(name: NamePath) => string[]`                                                                              |
| getFieldsError  | 获取一组字段名对应的错误信息，返回为数组形式                                                               | `(nameList?: NamePath[]) => FieldError[]`                                                                   |
| isFieldTouched  | 检查对应字段是否被用户操作过                                                                               | `(name: NamePath) => boolean`                                                                               |
| isFieldsTouched | 检查一组字段是否被用户操作过，`allTouched` 为 `true` 时检查是否所有字段都被操作过                          | `(nameList?: NamePath[], allTouched?: boolean) => boolean`                                                  |
| resetFields     | 重置一组字段到 `initialValues`                                                                             | `(fields?: FieldData[]) => void`                                                                            |
| setFields       | 设置一组字段状态                                                                                           | `(fields: FieldData[]) => void`                                                                             |
| setFieldsValue  | 设置表单的值（该值将直接传入 form store 中。如果你不希望传入对象被修改，请克隆后传入）                     | `(values) => void`                                                                                          |
| submit          | 提交表单，与点击 `submit` 按钮效果相同                                                                     | `() => void`                                                                                                |
| validateFields  | 触发表单验证                                                                                               | `(nameList?: NamePath[]) => Promise`                                                                        |

### validateMessages

Form 为验证提供了[默认的错误提示信息](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts)，你可以通过配置 `validateMessages` 属性，修改对应的提示模板。一种常见的使用方式，是配置国际化提示信息：

```jsx
const validateMessages = {
  required: "'${name}' 是必选字段",
  // ...
};
<Form validateMessages={validateMessages} />;
```

## Form.Item

### 属性

| 属性             | 说明                                                                                                         | 类型                                          | 默认值                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------- | -------------------------------------------------- |
| label            | 标签名                                                                                                       | `ReactNode`                                   | -                                                  |
| help             | 提示文本                                                                                                     | `ReactNode`                                   | -                                                  |
| extra            | 表单项右侧区域                                                                                               | `ReactNode`                                   | -                                                  |
| required         | 是否必选                                                                                                     | `boolean`                                     | `false`（如有设置 `rules`，则会根据 `rules` 判断） |
| disabled         | 是否禁用                                                                                                     | `boolean`                                     | `false`                                            |
| noStyle          | 不使用样式，只使用字段管理                                                                                   | `boolean`                                     | `false`                                            |
| hidden           | 是否隐藏整个字段                                                                                             | `boolean`                                     | `false`                                            |
| layout           | 布局模式                                                                                                     | `'vertical' \| 'horizontal'`                  | 父级 Form 的 `layout`                              |
| hasFeedback      | 是否展示错误反馈                                                                                             | `boolean`                                     | `true`                                             |
| arrow            | 是否展示右侧箭头                                                                                             | `boolean \| ReactNode`                        | -                                                  |
| onClick          | 点击时触发                                                                                                   | `(e: React.MouseEvent) => void`               | -                                                  |
| dependencies     | 设置依赖字段，说明见下                                                                                       | `NamePath[]`                                  | -                                                  |
| valuePropName    | 子节点的值的属性，如 Switch 的是 'checked'。该属性为 `getValueProps` 的封装，自定义 `getValueProps` 后会失效 | `string`                                      | `value`                                            |
| name             | 字段名，支持数组                                                                                             | `NamePath`                                    | -                                                  |
| rules            | 校验规则，设置字段的校验逻辑                                                                                 | `Rule[]`                                      | -                                                  |
| messageVariables | 默认验证字段的信息                                                                                           | `Record<string, string>`                      | -                                                  |
| trigger          | 设置收集字段值变更的时机                                                                                     | `string`                                      | `onChange`                                         |
| validateTrigger  | 设置字段校验的时机                                                                                           | `string \| string[]`                          | `onChange`                                         |
| shouldUpdate     | 自定义字段更新逻辑，说明见下                                                                                 | `boolean \| (prevValue, curValue) => boolean` | `false`                                            |

被设置了 `name` 属性的 `Form.Item` 包装的控件，表单控件会自动添加 `value`（或 `valuePropName` 指定的其他属性） `onChange`（或 `trigger` 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果：

1. 你**不再需要也不应该**用 `onChange` 来做数据收集同步（你可以使用 Form 的 `onValuesChange`），但还是可以继续监听 `onChange` 事件。
2. 你不能用控件的 `value` 或 `defaultValue` 等属性来设置表单域的值，默认值可以用 Form 里的 `initialValues` 来设置。注意 `initialValues` 不能被 `setState` 动态更新，你需要用 `setFieldsValue` 来更新。
3. 你不应该用 `setState`，可以使用 `form.setFieldsValue` 来动态改变表单值。

### dependencies

当字段间存在依赖关系时使用。如果一个字段设置了 `dependencies` 属性。那么它所依赖的字段更新时，该字段将自动触发更新与校验。一种常见的场景，就是注册用户表单的“密码”与“确认密码”字段。“确认密码”校验依赖于“密码”字段，设置 `dependencies` 后，“密码”字段更新会重新触发“校验密码”的校验逻辑。

`dependencies` 不应和 `shouldUpdate` 一起使用，因为这可能带来更新逻辑的混乱。

### shouldUpdate

Form 通过增量更新方式，只更新被修改的字段相关组件以达到性能优化目的。大部分场景下，你只需要编写代码或者与 [`dependencies`](#dependencies) 属性配合校验即可。而在某些特定场景，例如修改某个字段值后出现新的字段选项、或者纯粹希望表单任意变化都对某一个区域进行渲染。你可以通过 `shouldUpdate` 修改 Form.Item 的更新逻辑。

当 `shouldUpdate` 为 `true` 时，Form 的任意变化都会使该 Form.Item 重新渲染。这对于自定义渲染一些区域十分有帮助：

```jsx
<Form.Item shouldUpdate>
  {() => {
    return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
  }}
</Form.Item>
```

当 `shouldUpdate` 为方法时，表单的每次数值更新都会调用该方法，提供原先的值与当前的值以供你比较是否需要更新。这对于是否根据值来渲染额外字段十分有帮助：

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

你可以通过 `messageVariables` 修改 Form.Item 的默认验证信息。

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

## 一些通用的类型定义

### NamePath

`string | number | (string | number)[]`

### FieldData

| 属性       | 说明             | 类型         |
| ---------- | ---------------- | ------------ |
| errors     | 错误信息         | `string[]`   |
| name       | 字段名称         | `NamePath[]` |
| touched    | 是否被用户操作过 | `boolean`    |
| validating | 是否正在校验     | `boolean`    |
| value      | 字段对应值       | `any`        |
