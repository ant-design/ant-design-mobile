import * as React from 'react'
import { Field } from 'rc-field-form'
import { FormItemPropsType } from './PropsType'
import List from '../List'
import { GroupContext } from './Group'

// 是否为整行交互区域
function detectLabelOneLine(name: string) {
  if (!name) {
    return false
  }

  const map: {
    [k: string]: boolean
  } = {
    Radio: true,
    Checkbox: true,
    Picker: true,
    InputItem: true,
    NumericInput: true,
  }

  return !!map[name]
}

const Item: React.FC<FormItemPropsType> = props => {
  const { label, position, arrow, children, disabled, extra, ...rest } = props

  const childrenWithField = (
    <Field {...rest}>
      {React.cloneElement(children as any, {
        disabled,
      })}
    </Field>
  )

  const { unstable_noStyle } = React.useContext(GroupContext)

  // 2.1 如果不包装样式，直接返回
  if (props.unstable_noStyle || unstable_noStyle) {
    return <>{childrenWithField}</>
  }

  // 2.2 包装 ListItem 的样式
  let brief, thumb

  let child = label

  // 根据不同位置放置表单
  switch (position) {
    case 'brief': {
      brief = childrenWithField
      break
    }
    case 'label': {
      child = childrenWithField
      break
    }
    case 'thumb': {
      thumb = childrenWithField
      break
    }
    default: {
      child = (
        <div className="amd-form-item-default">
          <div className="amd-form-item-default-label">{label}</div>
          <div className="amd-form-item-default-field">{childrenWithField}</div>
        </div>
      )
    }
  }

  const fixedExtra = extra ? (
    // 不触发 label 效果
    <div onClick={e => e.preventDefault()}>{extra}</div>
  ) : (
    undefined
  )

  // @ts-ignore
  const labelOneLine = detectLabelOneLine(children?.type?.displayName)

  const content = (
    <List.Item
      thumb={thumb}
      extra={fixedExtra}
      brief={brief}
      arrow={arrow ? 'horizontal' : ''}
      disabled={disabled}

      // 暂时都不加 feedback
      // onPress={labelOneLine ? () => null : undefined}
    >
      {child}
    </List.Item>
  )

  // 是否需要增大交互区域
  // TODO: 对 NumericInput 这类没有真正的 input 控件的无效
  if (!labelOneLine) {
    return content
  }

  return <label>{content}</label>
}

Item.displayName = 'FormItem'

Item.defaultProps = {
  position: 'default',
}

export default Item
