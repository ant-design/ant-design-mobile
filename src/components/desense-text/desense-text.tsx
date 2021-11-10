import React, { FC } from 'react'
import classnames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { usePropsValue } from '../../utils/use-props-value'

const classPrefix = 'adm-desense-text'

export type DesenseTextProps = {
  desense?: boolean
  defaultDesense?: boolean
  text?: React.ReactNode
  desenseText?: React.ReactNode
  onChange?: (v: boolean) => void
} & NativeProps

const defaultProps = {
  defaultDesense: true,
}

export const DesenseText: FC<DesenseTextProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { text, desenseText } = props

  const [isDesense, setIsDesense] = usePropsValue<boolean>({
    value: props.desense,
    defaultValue: props.defaultDesense,
    onChange: props.onChange,
  })
  return withNativeProps(
    props,
    <span className={classPrefix}>
      {isDesense ? desenseText : text}
      <a
        className={classnames(`${classPrefix}-icon-wrap`, 'adm-plain-anchor')}
        onClick={() => {
          setIsDesense(!isDesense)
        }}
      >
        {isDesense ? <EyeInvisibleOutline /> : <EyeOutline />}
      </a>
    </span>
  )
}
