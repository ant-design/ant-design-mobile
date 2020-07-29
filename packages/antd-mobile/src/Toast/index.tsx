import classnames from 'classnames'
import * as React from 'react'
import { Check, Clear, WarnToast } from '@ant-design/mobile-icons'
import LoadingIcon from '../Loading/icon'
// @ts-ignore
import Notification from 'rmc-notification'

import '@ant-design/mobile-styles/lib/Toast'

let messageInstance: any
const prefixCls = 'amd-toast'

function getMessageInstance(
  mask: boolean,
  callback: (notification: any) => void,
) {
  if (messageInstance) {
    messageInstance.destroy()
    messageInstance = null
  }
  Notification.newInstance(
    {
      prefixCls,
      style: {}, // clear rmc-notification default style
      transitionName: 'amd-fade',
      className: classnames({
        [`${prefixCls}-mask`]: mask,
        [`${prefixCls}-nomask`]: !mask,
      }),
    },
    (notification: any) => callback && callback(notification),
  )
}

function notice(
  content: React.ReactNode,
  type: string,
  duration = 3,
  onClose: (() => void) | undefined,
  mask = true,
) {
  const iconTypes: { [key: string]: any } = {
    info: '',
    success: <Check />,
    fail: <Clear />,
    warn: <WarnToast />,
    loading: (
      <div className={prefixCls + '-loading'}>
        <LoadingIcon />
      </div>
    ),
  }
  const icon = iconTypes[type]

  getMessageInstance(mask, notification => {
    messageInstance = notification

    notification.notice({
      duration,
      style: {},
      content: !!icon ? (
        <div
          className={`${prefixCls}-text ${prefixCls}-text-icon`}
          role="alert"
          aria-live="assertive"
        >
          {icon}
          {content && <div className={`${prefixCls}-text-info`}>{content}</div>}
        </div>
      ) : (
        <div className={`${prefixCls}-text`} role="alert" aria-live="assertive">
          <div>{content}</div>
        </div>
      ),
      closable: true,
      onClose() {
        if (onClose) {
          onClose()
        }
        notification.destroy()
        notification = null
        messageInstance = null
      },
    })
  })
}

interface ToastOptions {
  content: React.ReactNode
  duration?: number
  mask?: boolean
  onClose?: () => void
}

export default {
  show({ content, duration, mask }: Omit<ToastOptions, 'onClose'>) {
    return notice(content, 'info', duration, () => {}, mask)
  },
  info({ content, duration, mask, onClose }: ToastOptions) {
    return notice(content, 'info', duration, onClose, mask)
  },
  success({ content, duration, mask, onClose }: ToastOptions) {
    return notice(content, 'success', duration, onClose, mask)
  },
  fail({ content, duration, mask, onClose }: ToastOptions) {
    return notice(content, 'fail', duration, onClose, mask)
  },
  warn({ content, duration, mask, onClose }: ToastOptions) {
    return notice(content, 'warn', duration, onClose, mask)
  },
  loading({ content, duration, mask, onClose }: ToastOptions) {
    return notice(content, 'loading', duration, onClose, mask)
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
}
