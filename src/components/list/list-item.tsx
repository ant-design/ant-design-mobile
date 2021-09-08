import React, { FC, ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'

const classPrefix = `adm-list`

export type ListItemProps = {
  title?: string | ReactNode
  children?: ReactNode
  description?: string | ReactNode
  prefix?: ReactNode
  extra?: ReactNode
  clickable?: boolean
  arrow?: boolean | ReactNode
  onClick?: () => void
} & NativeProps<'--prefix-width' | '--align-items'>

export const ListItem: FC<ListItemProps> = props => {
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

  return withNativeProps(
    props,
    React.createElement(
      clickable ? 'a' : 'div',
      {
        className: classNames(
          `${classPrefix}-item`,
          clickable ? ['adm-plain-anchor'] : []
        ),
        onClick: props.onClick,
      },
      content
    )
  )
}
