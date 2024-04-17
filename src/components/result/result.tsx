import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { useResultIcon } from './use-result-icon'

const classPrefix = `adm-result`

const defaultProps = {
  status: 'info',
}

export type ResultProps = {
  status?: 'success' | 'error' | 'info' | 'waiting' | 'warning'
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
} & NativeProps

export const Result: FC<ResultProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const { status, title, description, icon } = mergedProps
  const fallbackIcon = useResultIcon(status)
  if (!status) return null

  return withNativeProps(
    mergedProps,
    <div className={classNames(classPrefix, `${classPrefix}-${status}`)}>
      <div className={`${classPrefix}-icon`}>{icon || fallbackIcon}</div>
      <div className={`${classPrefix}-title`}>{title}</div>
      {!!description && (
        <div className={`${classPrefix}-description`}>{description}</div>
      )}
    </div>
  )
}
