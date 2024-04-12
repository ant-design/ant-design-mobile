import { RightOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { isNodeWithContent } from '../../utils/is-node-with-content'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useConfig } from '../config-provider'

const classPrefix = `adm-list-item`

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
} & NativeProps<
  '--prefix-width' | '--align-items' | '--active-background-color'
>

export const ListItem: FC<ListItemProps> = props => {
  const { list: componentConfig = {} } = useConfig()
  const clickable = props.clickable ?? !!props.onClick
  const arrow = props.arrow ?? props.arrowIcon ?? clickable

  const content = (
    <div className={`${classPrefix}-content`}>
      {isNodeWithContent(props.prefix) && (
        <div className={`${classPrefix}-content-prefix`}>{props.prefix}</div>
      )}
      <div className={`${classPrefix}-content-main`}>
        {isNodeWithContent(props.title) && (
          <div className={`${classPrefix}-title`}>{props.title}</div>
        )}
        {props.children}
        {isNodeWithContent(props.description) && (
          <div className={`${classPrefix}-description`}>
            {props.description}
          </div>
        )}
      </div>
      {isNodeWithContent(props.extra) && (
        <div className={`${classPrefix}-content-extra`}>{props.extra}</div>
      )}
      {isNodeWithContent(arrow) && (
        <div className={`${classPrefix}-content-arrow`}>
          {arrow === true
            ? componentConfig?.arrowIcon || <RightOutline />
            : arrow}
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
