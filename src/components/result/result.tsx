import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import {
  CheckCircleFill,
  CloseCircleFill,
  InformationCircleFill,
  ClockCircleFill,
  ExclamationCircleFill,
} from 'antd-mobile-icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-result`

const iconRecord = {
  success: CheckCircleFill,
  error: CloseCircleFill,
  info: InformationCircleFill,
  waiting: ClockCircleFill,
  warning: ExclamationCircleFill,
}

export type ResultProps = {
  status: 'success' | 'error' | 'info' | 'waiting' | 'warning'
  title: string
  description?: string
  icon?: ReactNode
} & NativeProps

export const Result: FC<ResultProps> = props => {
  const { status, title, description, icon } = props
  if (!status) return null
  const resultIcon = icon || React.createElement(iconRecord[status])

  return withNativeProps(
    props,
    <div className={classNames(classPrefix, `${classPrefix}-${status}`)}>
      <div className={`${classPrefix}-icon`}>{resultIcon}</div>
      <div className={`${classPrefix}-title`}>{title}</div>
      {description ? (
        <div className={`${classPrefix}-description`}>{description}</div>
      ) : null}
    </div>
  )
}
