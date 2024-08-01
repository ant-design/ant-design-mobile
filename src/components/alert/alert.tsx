import { CloseOutline } from 'antd-mobile-icons'
import cn from 'classnames'
import React, { CSSProperties, ReactNode } from 'react'
import './alert.less'
import { getFallbackIcon } from './getFallbackIcon'

export interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  showIcon?: boolean
  icon?: ReactNode
  ellipsis?: boolean
  extra?: ReactNode
  closeable?: boolean
  onClose?: () => void
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

export function Alert({
  type = 'info',
  showIcon,
  icon,
  ellipsis,
  extra,
  closeable,
  onClose,
  children,
  className,
  style,
}: AlertProps) {
  return (
    <div
      className={cn('adm-alert', `adm-alert-${type}`, className)}
      style={style}
    >
      {showIcon && (
        <div className='adm-alert-icon'>{icon || getFallbackIcon(type)}</div>
      )}
      <div
        className={cn('adm-alert-main', ellipsis && 'adm-alert-main-ellipsis')}
      >
        {children}
      </div>
      {extra && <div className='adm-alert-extra'>{extra}</div>}
      {closeable && (
        <div className='adm-alert-close' onClick={onClose}>
          <CloseOutline />
        </div>
      )}
    </div>
  )
}
