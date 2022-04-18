import classNames from 'classnames'
import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-badge`

export const dot = Symbol()

export type BadgeProps = {
  content?: React.ReactNode | typeof dot
  color?: string
  bordered?: boolean
  children?: React.ReactNode
} & NativeProps<'--right' | '--top' | '--color'>

export const Badge: FC<BadgeProps> = props => {
  const { content, color, children } = props

  const isDot = content === dot

  const badgeCls = classNames(
    classPrefix,
    !!children && `${classPrefix}-fixed`,
    isDot && `${classPrefix}-dot`,
    props.bordered && `${classPrefix}-bordered`
  )

  const element =
    content || content === 0
      ? withNativeProps(
          props,
          <div
            className={badgeCls}
            style={
              {
                '--color': color,
              } as any
            }
          >
            {!isDot && (
              <div className={`${classPrefix}-content`}>{content}</div>
            )}
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
}
