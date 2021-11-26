import React, { FC, ReactNode } from 'react'
import { RightOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-list-item`

export type ListItemProps = {
  title?: ReactNode
  children?: ReactNode
  description?: ReactNode
  prefix?: ReactNode
  extra?: ReactNode
  clickable?: boolean
  arrow?: boolean | ReactNode
  disabled?: boolean
  split?: boolean
  onClick?: (e: React.MouseEvent) => void
} & NativeProps<
  '--prefix-width' | '--align-items' | '--active-background-color'
>

const defaultProps = {
  split: true,
}

export const ListItem: FC<ListItemProps> = p => {
  const props = mergeProps(defaultProps, p)
  const clickable = props.clickable ?? !!props.onClick
  const arrow = props.arrow === undefined ? clickable : props.arrow

  const content = (
    <div
      className={classNames(`${classPrefix}-content`, {
        [`${classPrefix}-content-split`]: props.split,
      })}
    >
      {props.prefix && (
        <div className={`${classPrefix}-content-prefix`}>{props.prefix}</div>
      )}
      <div className={`${classPrefix}-content-main`}>
        {props.title && (
          <div className={`${classPrefix}-title`}>{props.title}</div>
        )}
        {props.children}
        {props.description && (
          <div className={`${classPrefix}-description`}>
            {props.description}
          </div>
        )}
      </div>
      {props.extra && (
        <div className={`${classPrefix}-content-extra`}>{props.extra}</div>
      )}
      {arrow && (
        <div className={`${classPrefix}-content-arrow`}>
          {arrow === true ? <RightOutline /> : arrow}
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
          `${classPrefix}`,
          clickable ? ['adm-plain-anchor'] : [],
          props.disabled && `${classPrefix}-disabled`
        ),
        onClick: props.disabled ? undefined : props.onClick,
      },
      content
    )
  )
}
