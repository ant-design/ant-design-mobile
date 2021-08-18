import React, { FC } from 'react'
import { useControllableValue } from 'ahooks'
import classnames from 'classnames'
import { ElementProps } from '../../utils/element-props'
import { mergeProps } from '../../utils/with-default-props'
import Icon from '@ant-design/icons'
import { IconEye } from '../icons/icon-eye'
import { IconEyeClose } from '../icons/icon-eye-close'

export type DesenseTextProps = {
  desense?: boolean
  defaultDesense?: boolean
  text?: React.ReactNode
  desenseText?: React.ReactNode
  onChange?: (v: boolean) => void
} & ElementProps

const defaultProps = {
  defaultDesense: true,
}

const DesenseText: FC<DesenseTextProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { text, desenseText } = props

  const [isDesense, setIsDesense] = useControllableValue<boolean>(props, {
    valuePropName: 'desense',
    defaultValuePropName: 'defaultDesense',
  })
  return (
    <span
      className={classnames('am-desense-text', props.className)}
      style={props.style}
    >
      {isDesense ? desenseText : text}
      <a
        className={classnames('am-desense-text-icon-wrap', 'am-plain-anchor')}
        onClick={() => {
          setIsDesense(!isDesense)
        }}
      >
        <Icon component={isDesense ? IconEyeClose : IconEye} />
      </a>
    </span>
  )
}

export default DesenseText
