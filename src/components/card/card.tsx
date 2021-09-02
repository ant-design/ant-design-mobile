import { FC, ReactNode } from 'react'
import React from 'react'
import classNames from 'classnames'
import { ElementProps, withElementProps } from '../../utils/element-props'

const classPrefix = `adm-card`

export type CardProps = {
  title?: ReactNode
  extra?: ReactNode
  onClick?: (event: React.MouseEvent) => void
  onBodyClick?: (event: React.MouseEvent) => void
  onHeaderClick?: (event: React.MouseEvent) => void
} & ElementProps

export const Card: FC<CardProps> = props => {
  const renderHeader = () => {
    if (!(props.title || props.extra)) {
      return null
    }
    return (
      <div
        className={classNames(`${classPrefix}-header`)}
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
      <div className={`${classPrefix}-body`} onClick={props.onBodyClick}>
        {props.children}
      </div>
    )
  }

  return withElementProps(
    props,
    <div className={classPrefix} onClick={props.onClick}>
      {renderHeader()}
      {renderBody()}
    </div>
  )
}
