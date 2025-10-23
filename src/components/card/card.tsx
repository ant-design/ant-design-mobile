import classNames from 'classnames'
import type { CSSProperties, FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useConfig } from '../config-provider'

export type CardProps = {
  title?: ReactNode
  icon?: ReactNode
  extra?: ReactNode
  headerStyle?: CSSProperties
  headerClassName?: string
  bodyStyle?: CSSProperties
  bodyClassName?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onBodyClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onHeaderClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
  prefixCls?: string
} & NativeProps

export const Card: FC<CardProps> = props => {
  const { getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('card', props.prefixCls)
  const renderHeader = () => {
    if (!(props.title || props.extra)) {
      return null
    }
    return (
      <div
        className={classNames(`${prefixCls}-header`, props.headerClassName)}
        style={props.headerStyle}
        onClick={props.onHeaderClick}
      >
        {props.icon && (
          <div className={`${prefixCls}-header-icon`}>{props.icon}</div>
        )}
        <div className={`${prefixCls}-header-title`}>{props.title}</div>
        {props.extra && (
          <div className={`${prefixCls}-header-extra`}>{props.extra}</div>
        )}
      </div>
    )
  }

  const renderBody = () => {
    if (!props.children) {
      return null
    }
    return (
      <div
        className={classNames(`${prefixCls}-body`, props.bodyClassName)}
        style={props.bodyStyle}
        onClick={props.onBodyClick}
      >
        {props.children}
      </div>
    )
  }

  return withNativeProps(
    props,
    <div className={prefixCls} onClick={props.onClick}>
      {renderHeader()}
      {renderBody()}
    </div>
  )
}
