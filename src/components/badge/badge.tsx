import classNames from 'classnames'
import React from 'react'
import { convertPx } from '../../utils/convert-px'
import { ElementProps } from '../../utils/element-props'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `am-badge`

export type BadgeProps = {
  content?: React.ReactNode
  color?: string
  offset?: [number, number]
} & ElementProps

export const Badge = withDefaultProps({
  color: '#FF411C',
  offset: [0, 0],
})<BadgeProps>(props => {
  const { content, color, offset, children } = props

  const badgeStyle = children
    ? {
        right: `${-convertPx(offset[0])}px`,
        top: `${convertPx(offset[1])}px`,
        backgroundColor: color,
      }
    : {
        backgroundColor: color,
      }

  const badgeCls = classNames(classPrefix, {
    [`${classPrefix}-fixed`]: !!children,
    [`${classPrefix}-dot`]: !content,
  })

  return children ? (
    <div
      className={classNames(`${classPrefix}-wrap`, props.className)}
      style={props.style}
    >
      {children}
      <div className={badgeCls} style={badgeStyle}>
        {content}
      </div>
    </div>
  ) : (
    <div
      className={classNames(badgeCls, props.className)}
      style={{
        ...badgeStyle,
        ...props.style,
      }}
    >
      {content}
    </div>
  )
})
