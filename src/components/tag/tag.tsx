import React, { CSSProperties, FC } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { ElementProps } from '../../utils/element-props'
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

export const Tag: FC<TagProps> = p => {
  const props = mergeProps(defaultProps, p)
  const color = colorRecord[props.color] ?? props.color

  const style: CSSProperties & {
    '--color': string
  } = {
    '--color': color,
    ...props.style,
  }
  return (
    <span
      style={style}
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-round`]: props.round,
          [`${classPrefix}-outline`]: props.fill === 'outline',
        },
        props.className
      )}
    >
      {props.children}
    </span>
  )
}
