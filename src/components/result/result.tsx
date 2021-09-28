import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import {
  CheckCircleFill,
  CloseCircleFill,
  InformationCircleFill,
  ClockCircleFill,
  ExclamationCircleFill,
} from 'antd-mobile-icons'

const classPrefix = `adm-result`

const ICONS = {
  success: CheckCircleFill,
  error: CloseCircleFill,
  info: InformationCircleFill,
  waiting: ClockCircleFill,
  warning: ExclamationCircleFill,
}

export interface ResultProps {
  status: 'success' | 'error' | 'info' | 'waiting' | 'warning'
  title: string
  description?: string
  icon?: ReactNode
  className?: string
  style?: React.CSSProperties
}

export const Result: FC<ResultProps> = props => {
  const { className, style, status, title, description, icon } = props
  const resultIcon = icon || React.createElement(ICONS[status])

  return (
    <div
      className={classNames(classPrefix, `${classPrefix}-${status}`, className)}
      style={style}
    >
      <div className={`${classPrefix}-icon`}>{resultIcon}</div>
      <div className={`${classPrefix}-title`}>{title}</div>
      {description ? (
        <div className={`${classPrefix}-description`}>{description}</div>
      ) : null}
    </div>
  )
}

Result.defaultProps = {
  description: '',
}
