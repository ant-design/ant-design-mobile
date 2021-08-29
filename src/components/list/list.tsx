import React, { FC } from 'react'
import classNames from 'classnames'
import { ElementProps } from '../../utils/element-props'

const classPrefix = `adm-list`

export type ListProps = {
  mode?: 'default' | 'card' // 默认是整宽的列表，card 模式下展示为带 margin 和圆角的卡片
} & ElementProps<'--prefix-width' | '--align-items'>

export const List: FC<ListProps> = props => {
  const className = classNames(
    classPrefix,
    `${classPrefix}-${props.mode}`,
    props.className
  )
  return (
    <div className={className} style={props.style}>
      <div className={`${classPrefix}-inner`}>{props.children}</div>
    </div>
  )
}

List.defaultProps = {
  mode: 'default',
}
