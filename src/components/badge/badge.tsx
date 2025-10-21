import classNames from 'classnames'
import type { CSSProperties, FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useConfig } from '../config-provider'

export const dot = <React.Fragment />

export type BadgeProps = {
  content?: ReactNode | typeof dot
  color?: string
  bordered?: boolean
  children?: ReactNode
  wrapperClassName?: string
  wrapperStyle?: CSSProperties
  prefixCls?: string
} & NativeProps<'--right' | '--top' | '--color'>

export const Badge: FC<BadgeProps> = props => {
  const { content, color, children } = props
  const { getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('badge', props?.prefixCls)

  const isDot = content === dot

  const badgeClass = classNames(prefixCls, {
    [`${prefixCls}-fixed`]: !!children,
    [`${prefixCls}-dot`]: isDot,
    [`${prefixCls}-bordered`]: props.bordered,
  })

  const element =
    content || content === 0
      ? withNativeProps(
          props,
          <div
            className={badgeClass}
            style={
              {
                '--color': color,
              } as BadgeProps['style']
            }
          >
            {!isDot && <div className={`${prefixCls}-content`}>{content}</div>}
          </div>
        )
      : null

  return children ? (
    <div
      className={classNames(`${prefixCls}-wrapper`, props.wrapperClassName)}
      style={props.wrapperStyle}
    >
      {children}
      {element}
    </div>
  ) : (
    element
  )
}
