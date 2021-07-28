import React, { FC } from 'react'
import { useControllableValue } from 'ahooks'
import classnames from 'classnames'
import { ElementProps } from '../../utils/element-props'
import { withDefaultProps } from '../../utils/with-default-props'
import EyeIcon from '../../assets/eye.svg'
import EyeCloseIcon from '../../assets/eye-close.svg'

export type DesensTextProps = {
  desens?: boolean // 脱敏开关
  defaultDesens?: boolean // 默认的脱敏状态
  text?: React.ReactNode
  desensText?: React.ReactNode
  onChange?: (v: boolean) => void
} & ElementProps

const classPrefix = `am-desens-text`

const DesensText = withDefaultProps({
  defaultDesens: true,
})<DesensTextProps>(props => {
  const { text, desensText } = props

  const [isDesens, setIsDesens] = useControllableValue<boolean>(props, {
    valuePropName: 'desens',
    defaultValuePropName: 'defaultDesens',
  })
  return (
    <span
      className={classnames(classPrefix, props.className)}
      style={props.style}
    >
      {isDesens ? desensText : text}
      <span
        className={`${classPrefix}-icon-wrap`}
        onClick={() => {
          setIsDesens(!isDesens)
        }}
      >
        <img
          src={isDesens ? EyeCloseIcon : EyeIcon}
          className={`${classPrefix}-icon`}
        />
      </span>
    </span>
  )
})

export default DesensText
