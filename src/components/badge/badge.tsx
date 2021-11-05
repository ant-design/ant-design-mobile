import classNames from 'classnames'
import React from 'react'
import { convertPx } from '../../utils/convert-px'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `adm-badge`

export const dot = Symbol()

export type BadgeProps = {
  content?: React.ReactNode | typeof dot
  color?: string
} & NativeProps<'--right' | '--top'>

export const Badge = withDefaultProps({
  color: '#FF411C',
  offset: [0, 0],
})<BadgeProps>(props => {
  const { content, color, offset, children } = props

  const isDot = content === dot

  const badgeCls = classNames(classPrefix, {
    [`${classPrefix}-fixed`]: !!children,
    [`${classPrefix}-dot`]: isDot,
  })

  const element = content
    ? withNativeProps(
        props,
        <div
          className={badgeCls}
          style={{
            backgroundColor: color,
          }}
        >
          {!isDot && content}
        </div>
      )
    : null

  return children ? (
    <div className={`${classPrefix}-wrap`}>
      {children}
      {element}
    </div>
  ) : (
    element
  )
})
