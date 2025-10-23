import { RightOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { isNodeWithContent } from '../../utils/is-node-with-content'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProp } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'

export type ListItemProps = {
  title?: ReactNode
  children?: ReactNode
  description?: ReactNode
  prefix?: ReactNode
  extra?: ReactNode
  clickable?: boolean
  arrowIcon?: boolean | ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  /**
   * @deprecated use `arrowIcon` instead
   */
  arrow?: boolean | ReactNode
  prefixCls?: string
} & NativeProps<
  '--prefix-width' | '--align-items' | '--active-background-color'
>

export const ListItem: FC<ListItemProps> = props => {
  const { arrow, arrowIcon } = props
  const { list: componentConfig = {}, getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('list-item', props.prefixCls)
  const clickable = props.clickable ?? !!props.onClick

  const showArrow = arrow ?? arrowIcon ?? clickable
  const mergedArrowIcon = mergeProp<React.ReactNode>(
    componentConfig.arrowIcon,
    arrow !== true ? arrow : null,
    arrowIcon !== true ? arrowIcon : null
  )

  const content = (
    <div className={`${prefixCls}-content`}>
      {isNodeWithContent(props.prefix) && (
        <div className={`${prefixCls}-content-prefix`}>{props.prefix}</div>
      )}
      <div className={`${prefixCls}-content-main`}>
        {isNodeWithContent(props.title) && (
          <div className={`${prefixCls}-title`}>{props.title}</div>
        )}
        {props.children}
        {isNodeWithContent(props.description) && (
          <div className={`${prefixCls}-description`}>{props.description}</div>
        )}
      </div>
      {isNodeWithContent(props.extra) && (
        <div className={`${prefixCls}-content-extra`}>{props.extra}</div>
      )}
      {showArrow && (
        <div className={`${prefixCls}-content-arrow`}>
          {mergedArrowIcon || <RightOutline />}
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
          `${prefixCls}`,
          clickable ? ['adm-plain-anchor'] : [],
          props.disabled && `${prefixCls}-disabled`
        ),
        onClick: props.disabled ? undefined : props.onClick,
      },
      content
    )
  )
}
