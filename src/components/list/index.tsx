import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { ElementProps } from '../../utils/element-props'
import { RightOutlined } from '@ant-design/icons'

const classPrefix = `am-list`

type ListItemProps = {
  title?: string | ReactNode
  children?: ReactNode
  description?: string | ReactNode
  prefix?: ReactNode
  extra?: ReactNode
  showArrow?: boolean
  onClick?: () => void
} & ElementProps

const ListItem: FC<ListItemProps> = props => {
  const showArrow = props.showArrow ?? !!props.onClick

  const content = (
    <div className={`${classPrefix}-item-content`}>
      {props.prefix && (
        <div className={`${classPrefix}-item-content-prefix`}>
          {props.prefix}
        </div>
      )}
      <div className={`${classPrefix}-item-content-main`}>
        {props.title && (
          <div className={`${classPrefix}-item-title`}>{props.title}</div>
        )}
        <div>{props.children}</div>
        {props.description && (
          <div className={`${classPrefix}-item-description`}>
            {props.description}
          </div>
        )}
      </div>
      {props.extra && (
        <div className={`${classPrefix}-item-content-extra`}>{props.extra}</div>
      )}
      {showArrow && (
        <div className={`${classPrefix}-item-content-arrow`}>
          <RightOutlined />
        </div>
      )}
    </div>
  )

  return props.onClick ? (
    <a
      className={classNames(
        `${classPrefix}-item`,
        `am-plain-anchor`,
        props.className
      )}
      style={props.style}
      onClick={props.onClick}
    >
      {content}
    </a>
  ) : (
    <div
      className={classNames(`${classPrefix}-item`, props.className)}
      style={props.style}
    >
      {content}
    </div>
  )
}

type ListProps = {
  mode?: 'default' | 'card' // 默认是整宽的列表，card 模式下展示为带 margin 和圆角的卡片
} & ElementProps

const List: FC<ListProps> & {
  Item: typeof ListItem
} = props => {
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

List.Item = ListItem

export default List
