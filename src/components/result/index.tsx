import React, { FC } from 'react'
import classNames from 'classnames'
import {
  CheckCircleFilled,
  CloseCircleFilled,
  InfoCircleFilled,
  ClockCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons'

const classPrefix = `am-result`

const ICONS = {
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  info: InfoCircleFilled,
  waiting: ClockCircleFilled,
  warning: ExclamationCircleFilled,
}

export interface ResultProps {
  status: 'success' | 'error' | 'info' | 'waiting' | 'warning'
  title: string
  description?: string
  className?: string
  style?: React.CSSProperties
}

const Result: FC<ResultProps> = props => {
  const { className, style, status, title, description } = props
  const ResultIcon = ICONS[status]

  return (
    <div
      className={classNames(classPrefix, `${classPrefix}-${status}`, className)}
      style={style}
    >
      <div className={`${classPrefix}-icon`}>
        <ResultIcon />
      </div>
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

export default Result
