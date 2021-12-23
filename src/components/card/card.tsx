import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-card`

export type CardProps = {
  title?: ReactNode
  extra?: ReactNode
  headerStyle?: React.CSSProperties
  headerClassName?: string
  bodyStyle?: React.CSSProperties
  bodyClassName?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onBodyClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onHeaderClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} & NativeProps

export const Card: FC<CardProps> = props => {
  const renderHeader = () => {
    if (!(props.title || props.extra)) {
      return null
    }
    return (
      <div
        className={classNames(`${classPrefix}-header`, props.headerClassName)}
        style={props.headerStyle}
        onClick={props.onHeaderClick}
      >
        <div className={`${classPrefix}-header-title`}>{props.title}</div>
        {props.extra}
      </div>
    )
  }

  const renderBody = () => {
    if (!props.children) {
      return null
    }
    return (
      <div
        className={classNames(`${classPrefix}-body`, props.bodyClassName)}
        style={props.bodyStyle}
        onClick={props.onBodyClick}
      >
        {props.children}
      </div>
    )
  }

  return withNativeProps(
    props,
    <div className={classPrefix} onClick={props.onClick}>
      {renderHeader()}
      {renderBody()}
    </div>
  )
}
