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
  clickable?: boolean
  arrow?: boolean | ReactNode
  onClick?: () => void
} & ElementProps<{
  '--prefix-width': string
}>

const ListItem: FC<ListItemProps> = props => {
  const clickable = props.clickable ?? !!props.onClick
  const arrow = props.arrow === undefined ? clickable : props.arrow

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
      {arrow && (
        <div className={`${classPrefix}-item-content-arrow`}>
          {arrow === true ? <RightOutlined /> : arrow}
        </div>
      )}
    </div>
  )

  return React.createElement(
    clickable ? 'a' : 'div',
    {
      className: classNames(
        `${classPrefix}-item`,
        props.className,
        clickable ? ['am-plain-anchor'] : []
      ),
      style: props.style,
      onClick: props.onClick,
    },
    content
  )
}

type ListProps = {
  mode?: 'default' | 'card' // 默认是整宽的列表，card 模式下展示为带 margin 和圆角的卡片
} & ElementProps<{
  '--prefix-width': string
}>

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
