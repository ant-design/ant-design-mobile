import classNames from 'classnames'
import React from 'react'
import { convertPx } from '../../utils/convert-px'
import { ElementProps, withElementProps } from '../../utils/element-props'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `adm-badge`

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

  return withElementProps(
    props,
    children ? (
      <div className={`${classPrefix}-wrap`}>
        {children}
        <div className={badgeCls} style={badgeStyle}>
          {content}
        </div>
      </div>
    ) : (
      <div className={badgeCls} style={badgeStyle}>
        {content}
      </div>
    )
  )
})
