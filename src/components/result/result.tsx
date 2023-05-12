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
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-result`

const iconRecord = {
  success: CheckCircleFill,
  error: CloseCircleFill,
  info: InformationCircleFill,
  waiting: ClockCircleFill,
  warning: ExclamationCircleFill,
}

const defaultProps = {
  status: 'info',
}

export type ResultProps = {
  status?: 'success' | 'error' | 'info' | 'waiting' | 'warning'
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
} & NativeProps

export const Result: FC<ResultProps> = p => {
  const props = mergeProps(defaultProps, p)
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
