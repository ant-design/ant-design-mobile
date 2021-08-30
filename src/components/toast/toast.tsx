import React, { ReactNode, useMemo } from 'react'
import classNames from 'classnames'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import Loading from '../loading'
import Mask from '../mask'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-toast`

export interface ToastProps {
  /** Toast 完全关闭后的回调 */
  afterClose?: () => void
  /** Toast 遮罩样式 */
  maskStyle?: React.CSSProperties
  /** Toast 遮罩类名 */
  maskClassName?: string
  /** 是否允许背景点击 */
  maskClickable?: boolean
  /** toast 文本内容 */
  content?: ReactNode
  /** toast 图标 */
  icon?: 'success' | 'fail' | 'loading' | React.ReactNode
  /** 提示持续时间，若为 0 则不会自动关闭 */
  duration?: number
  /** 垂直方向显示位置，默认为 center */
  position?: 'top' | 'bottom' | 'center'
  /** 是否显示 */
  visible?: boolean
  /** 轻提示弹出时的的父容器 */
  getContainer?: HTMLElement | (() => HTMLElement)
}

const defaultProps = {
  maskClickable: true,
}

export const InternalToast: React.FC<ToastProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { maskClickable, content, icon, position } = props

  const iconElement = useMemo(() => {
    if (icon === null || icon === undefined) return null
    switch (icon) {
      case 'success':
        return <CheckOutlined />
      case 'fail':
        return <CloseOutlined />
      case 'loading':
        return <Loading color='white' />
      default:
        return icon
    }
  }, [icon])

  const top = useMemo(() => {
    switch (position) {
      case 'top':
        return '20%'
      case 'bottom':
        return '80%'
      default:
        return '50%'
    }
  }, [position])

  return (
    <Mask
      visible={props.visible}
      destroyOnClose
      opacity={0}
      disableBodyScroll={!maskClickable}
      getContainer={props.getContainer}
      afterClose={props.afterClose}
      style={{
        pointerEvents: maskClickable ? 'none' : 'all',
        ...props.maskStyle,
      }}
      className={classNames(`${classPrefix}-mask`, props.maskClassName)}
    >
      <div
        style={{ top }}
        className={classNames(
          `${classPrefix}-wrap`,
          icon ? `${classPrefix}-wrap-icon` : `${classPrefix}-wrap-text`
        )}
      >
        {iconElement && (
          <div className={`${classPrefix}-icon`}>{iconElement}</div>
        )}
        {content}
      </div>
    </Mask>
  )
}
