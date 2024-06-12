import React from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
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

export const Result: FC<ResultProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { status, title, description, icon } = props
  const fallbackIcon = useResultIcon(status)
  if (!status) return null

  return withNativeProps(
    props,
    <div className={classNames(classPrefix, `${classPrefix}-${status}`)}>
      <div className={`${classPrefix}-icon`}>{icon || fallbackIcon}</div>
      <div className={`${classPrefix}-title`}>{title}</div>
      {!!description && (
        <div className={`${classPrefix}-description`}>{description}</div>
      )}
    </div>
  )
}
