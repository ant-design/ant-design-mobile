import * as React from 'react'
import Touchable from '@ant-design/mobile-touchable'
import classnames from 'classnames'
import { TouchablePropType } from '@ant-design/mobile-touchable/es/PropsType'

const TouchableFeedback: React.FC<{
  activeClassName: string
} & TouchablePropType> = props => {
  const [active, setActive] = React.useState(false)
  const { activeClassName, children, ...rest } = props

  const pressIn = (e: React.SyntheticEvent) => {
    setActive(true)
    props.onPressIn?.(e)
  }

  const pressOut = (e: React.SyntheticEvent) => {
    setActive(false)
    props.onPressOut?.(e)
  }

  const child = React.Children.only(children)
  const { className } = (child as any).props

  const cls = classnames(className, {
    [`${activeClassName}`]: active,
  })

  // @ts-ignore
  const childWithCls = React.cloneElement(child, {
    className: cls,
  })

  return (
    <Touchable {...rest} onPressIn={pressIn} onPressOut={pressOut}>
      {childWithCls}
    </Touchable>
  )
}

export default TouchableFeedback
