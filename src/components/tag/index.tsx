import React, {FC, useMemo} from 'react'
import {withDefaultProps} from '../../utils/with-default-props'
import {ElementProps} from '../../utils/element-props'
import classNames from 'classnames'

const classPrefix = `am-tag`

const colorRecord: Record<string, string> = {
  default: '#666666',
  primary: '#1677FF',
}

export type TagProps = {
  color?: 'default' | 'primary' | string
  fill?: 'solid' | 'outline'
  round?: boolean
} & ElementProps

const defaultProps = {
  color: 'default',
  fill: 'solid',
  round: false,
}

const Tags = withDefaultProps(defaultProps)<TagProps>(props => {
  const color = colorRecord[props.color] ?? props.color

  let style: any = {
    '--color': props.fill === 'outline' ? 'transparent' : color,
    color: props.fill === 'outline' ? color : '#ffffff',
    borderColor: color,
    ...props.style,
  }
  return (
    <span
      style={style}
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-round`]: props.round,
        },
        props.className
      )}
    >
      {props.children}
    </span>
  )
})

export default Tags
