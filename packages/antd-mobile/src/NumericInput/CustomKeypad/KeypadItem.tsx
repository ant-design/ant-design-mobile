import * as React from 'react'
import classnames from 'classnames'
import { Touchable } from '../../rmc'

export type HTMLTableDataProps = Omit<
  React.HTMLProps<HTMLTableDataCellElement>,
  'onClick'
>

export interface KeypadItemProps extends HTMLTableDataProps {
  value?: string
  onPress?: (value: string) => void
  onLongPress?: () => void
}

const prefixCls = 'amd-numeric-keypad-item'

const KeypadItem: React.FC<KeypadItemProps> = props => {
  const {
    className,
    disabled,
    onPress,
    onLongPress,
    children,
    value,
    ...rest
  } = props
  const [active, setActive] = React.useState(false)

  // invalid 的时候不可见
  const invalidValue = value === null || value === undefined

  const cls = classnames({
    [`${prefixCls}`]: true,
    [`${className}`]: !!className,
    [`${prefixCls}-disabled`]: disabled || invalidValue,
    [`${prefixCls}-active`]: active,
  })

  return (
    <Touchable
      disabled={disabled || invalidValue}
      onPress={() => onPress && onPress(value!)}
      onPressIn={() => {
        setActive(true)
      }}
      onPressOut={() => {
        setActive(false)
      }}
      onLongPress={onLongPress}
    >
      <td className={cls} {...rest} onContextMenu={e => e.preventDefault()}>
        <span>{props.children}</span>
      </td>
    </Touchable>
  )
}

KeypadItem.displayName = 'KeypadItem'
KeypadItem.defaultProps = {
  className: '',
  disabled: false,
}

export default KeypadItem
