# 表单设计

Form 在 pc 端一直是讨论的焦点，原生 form 组件虽然功能丰富，但是受限于不同平台导致表现不一（比如 type=number 等），使用起来并不方便。直到 antd@4 的表单的出现，其提供了相对一致且简单的使用方式。

虽然移动端对于大型表单的需求不大，但是很多页面都是有信息提交的。在这之前，基本上都是各自实现各自的（比如直接在 onClick 后把相关数据提交给后台），这对于新增提交前校验这样的需求来讲，基本上又要把代码重新实现一遍，且容易出 bug 。
根本原因是大家在写相关代码的时候，并没有一个可以参考的基准。因此，将 Form 移植到移动端也是很有必要的。

## Form

看一下 Form 的结构

![](https://gw.alipayobjects.com/mdn/rms_8ba022/afts/img/A*b5lqSJPRIvcAAAAAAAAAAAAAARQnAQ)
从图中可以看到和 List 的结构是一样的，因此后面很多名字也是和 List 保持一致

- Group

  同 List 一样，表单组件可以分组显示
  同时，考虑布局的问题， Radio.Group 和 Checkbox.Group 都是单独成组

- Item

  - 每一个 Item 对应一个输入组件，其拥有以下 props

  ```tsx | pure
  interface FormItemPropsType {
    // 表单控件
    children: React.ReactNode
    // 标题说明
    label?: React.ReactNode
    // 控件位置
    // default 表示跟随在 label 后面 如图中的 c1
    // thumb 表示在 label 前，如图中 a1
    // brief 表示另起一行，如图中的 b1
    // label 表示直接替换原本 label 的内容，在图中没有体现，常用与 textarea 这种场景
    position?: 'default' | 'thumb' | 'brief' | 'label'
    // 额外的信息, 如图中的 b1 右边 [支] 字图标
    extra?: React.ReactNode
    // 是否有箭头，这对于选择类的组件来说很有用，比如 Picker
    arrow?: boolean
  }
  ```

  - 所有使用 Form 样式的控件都分为两类，在 Form 中，这两类都是内部自动控制的，无法通过参数更改，具体情况见下表

  1. withLabel, 点击整行都能触发或者 focus 的
  2. withoutLabel, 仅点击控件本身才能触发的

  > 其中，虽然 Stepper 可以有 label 的效果，但是由于其加减按钮误触 label 的可能，在 Form 中，暂时不支持整行 label

  | withLabel                              | withoutLabel            | others                           |
  | -------------------------------------- | ----------------------- | -------------------------------- |
  | Checkbox,InputItem,NumericInput,Picker | Selector,Switch,Stepper | Checkbox.Group,Radio.Group,Terms |

- Button
  Button 组件新增了 `htmlType="submit"` 的用法，用于触发表单提交

- 关于 Form 和 Item 其他用法可以见 [rc-field-form](https://github.com/react-component/field-form)

## 输入组件

除了将 Form 直接移植外，还针对各个输入组件做了一些工作

- 首先我们定义一个合格的表单组件拥有以下 `BaseFormItemPropsWithoutFocus` ，同时，如果对于需要 focus 的额外拥有一些其他的 `BaseFormItemProps` ，出于使用有限以及模拟表单元素（设置了 `readonly=true`）的原因，暂时不提供 `readOnly` 的支持

  ```tsx | pure
  interface BaseFormItemPropsWithoutFocus<T = any> {
    // 提供自定义样式修改的可能
    className?: string
    // 配合 label 使用，有些组合组件可能没法使用，因为不知道 label 的行为应该是什么，比如 Selector, Checkbox.Group, Radio.Group
    id?: string
    // 原生表单的 name 属性，在使用原生 form 提交的时候有用
    name?: string
    // 是否禁用
    disabled?: boolean
    // 表单发生变化的回调，注意回调参数被修正为了 value/checked, 而非 event
    onChange?: (v: T) => void
  }

  interface BaseFormItemProps<T> extends BaseFormItemPropsWithoutFocus<T> {
    // 自动聚焦，对于直接使用原生控件的组件（比如 InputItem）可能会受限 ios 的安全策略而不能聚焦
    // 而对于模拟的组件（比如 NumericInput）则会正常 focus
    autoFocus?: boolean
    // 仅提供了 focus 和 blur 两个方法
    ref?: React.Ref<{
      focus?: () => void
      blur?: () => void
    }>
    // focus 回调，注意回调参数被修正为了 value/checked, 而非 event
    onFocus?: (v: T) => void
    // blur 回调，注意回调参数被修正为了 value/checked, 而非 event
    onBlur?: (v: T) => void
  }
  ```

- 分为直接使用输入框控件（InputItem）和模拟控件（NumericInput）两类

  - InputItem 直接使用 input 原生控件
  - NumericInput 则额外加入了隐藏的 `<input readOnly />` 输入框，使其更像真正的输入控件，具体来讲是按以下方式来引入的。NumericInput 的 focus 通过 Labelable 的 onFocus 回调触发。

    Labelable 组件内部包含了一个隐藏的 input 节点，正如其名字一样，由于有了 `<input id />` 的属性，NumericInput 可以像原生 input 一样通过外部 label 标签触发 focus

  ```tsx | pure
  <Labelable onFocus={handleFocus} value={value}></Labelable>
  ```

- 分为可 focus（InputItem）和无需 focus （Switch） 两类

  从交互体验来看，只有需要输入的空间才有 focus 的需要（比如 InputItem, NumericInput），而其他（比如 Switch, Selector）基本上都是不需要的

- 如下视觉所示，Checkbox, Radio 是需要有多个选项的使用方式的，参考 antd 的设计，分别新加了 `Checkbox.Group` 和 `Radio.Group` 的使用方式

  > 另外受限于 Radio 的视觉展示，`checked=false` 的时候是不显示的，因此不提供 Radio 单独的使用方式，Checkbox 不受此限制

  ![](https://gw.alipayobjects.com/mdn/rms_8ba022/afts/img/A*d5qaQI-pqGwAAAAAAAAAAAAAARQnAQ)

- 所有组件都有受控模式和非受控模式

  受控与非受控的实现在之前的很多实现中多种多样，很多地方采用的是 `'value' in props`，实际上根据[官方文档](https://reactjs.org/docs/forms.html#controlled-input-null-value)，`value == null` 的时候也是非受控模式。

  在这个 Form 版本中，统一了受控与非受控的逻辑，实现一个表单组件的受控和非受控只需要像以下添加代码，然后用 value, onChange 分别替换 `props.value`, `props.onChange` 即可

  不过，仍然推荐使用受控代替非受控

  ```tsx | pure
  const { value, onChange } = useControlledByValue(props)
  // 或者
  const { checked, onChange } = useControlledByChecked(props)
  ```

- 所有输入组件都支持在 移植的 Form 中使用，也支持单独使用（确保使用原生 form 提交时，值是正确的）

  ```tsx | pure
  import { Form } from '@ant-design/mobile'
  <Form onFinish={x}>
    <Form.Group>
      <Form.Item name="a">
        <NumericInput />
      </Form.Item>
    </Form.Group>
  </Form>

  <form onSubmit={x} action="">
    <NumericInput name="a" />
  </form>
  ```

- 附各个表单组件的基本信息

| 组件           | 受控/非受控值          | 支持 focus | 支持 label |
| -------------- | ---------------------- | ---------- | ---------- |
| Checkbox       | checked/defaultChecked | false      | true       |
| Checkbox.Group | value/defaultValue     | false      | false      |
| InputItem      | value/defaultValue     | true       | true       |
| NumericInput   | value/defaultValue     | true       | true       |
| Picker         | value/defaultValue     | false      | true       |
| Radio.Group    | value/defaultValue     | false      | false      |
| Selector       | value/defaultValue     | false      | false      |
| Stepper        | value/defaultValue     | true       | true       |
| Switch         | checked/defaultChecked | false      | true       |
| Terms          | checked/defaultChecked | false      | true       |
