import React, { ReactNode, useMemo } from 'react'
import classNames from 'classnames'
import { CheckOutline, CloseOutline } from 'antd-mobile-icons'
import Loading from '../loading'
import Mask from '../mask'
import { mergeProps } from '../../utils/with-default-props'
import { PropagationEvent } from '../../utils/with-stop-propagation'
import { GetContainer } from '../../utils/render-to-container'

const classPrefix = `adm-toast`

export interface ToastProps {
  afterClose?: () => void
  maskStyle?: React.CSSProperties
  maskClassName?: string
  maskClickable?: boolean
  content?: ReactNode
  icon?: 'success' | 'fail' | 'loading' | React.ReactNode
  duration?: number
  position?: 'top' | 'bottom' | 'center'
  visible?: boolean
  getContainer?: GetContainer
  stopPropagation?: PropagationEvent[]
}

const defaultProps = {
  maskClickable: true,
  stopPropagation: ['click'],
}

export const InternalToast: React.FC<ToastProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { maskClickable, content, icon, position } = props

  const iconElement = useMemo(() => {
    if (icon === null || icon === undefined) return null
    switch (icon) {
      case 'success':
        return <CheckOutline />
      case 'fail':
        return <CloseOutline />
      case 'loading':
        return <Loading color='white' className={`${classPrefix}-loading`} />
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
        pointerEvents: maskClickable ? 'none' : 'auto',
        ...props.maskStyle,
      }}
      className={classNames(`${classPrefix}-mask`, props.maskClassName)}
      stopPropagation={props.stopPropagation}
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
