import classNames from 'classnames'
import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-badge`

export const dot = <React.Fragment />

export type BadgeProps = {
  content?: React.ReactNode | typeof dot
  color?: string
  bordered?: boolean
  children?: React.ReactNode
  wrapperClassName?: string
  wrapperStyle?: React.CSSProperties
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
              } as BadgeProps['style']
            }
          >
            {!isDot && (
              <div className={`${classPrefix}-content`}>{content}</div>
            )}
          </div>
        )
      : null

  return children ? (
    <div
      className={classNames(`${classPrefix}-wrapper`, props.wrapperClassName)}
      style={props.wrapperStyle}
    >
      {children}
      {element}
    </div>
  ) : (
    element
  )
}
