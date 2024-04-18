import { CheckOutline, CloseOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React, { useMemo } from 'react'
import { GetContainer } from '../../utils/render-to-container'
import { mergeProps } from '../../utils/with-default-props'
import { PropagationEvent } from '../../utils/with-stop-propagation'
import AutoCenter from '../auto-center'
import type { MaskProps } from '../mask'
import Mask from '../mask'
import SpinLoading from '../spin-loading'

const classPrefix = `adm-toast`

export interface ToastProps {
  afterClose?: () => void
  maskStyle?: MaskProps['style']
  maskClassName?: string
  maskClickable?: boolean
  content?: ReactNode
  icon?: 'success' | 'fail' | 'loading' | ReactNode
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

export const InternalToast: FC<ToastProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const { maskClickable, content, icon, position } = mergedProps

  const iconElement = useMemo(() => {
    if (icon === null || icon === undefined) return null
    switch (icon) {
      case 'success':
        return <CheckOutline />
      case 'fail':
        return <CloseOutline />
      case 'loading':
        return <SpinLoading color='white' style={{ '--size': '48px' }} />
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
      visible={mergedProps.visible}
      destroyOnClose
      opacity={0}
      disableBodyScroll={!maskClickable}
      getContainer={mergedProps.getContainer}
      afterClose={mergedProps.afterClose}
      style={{
        pointerEvents: maskClickable ? 'none' : 'auto',
        ...mergedProps.maskStyle,
      }}
      className={classNames(`${classPrefix}-mask`, mergedProps.maskClassName)}
      stopPropagation={mergedProps.stopPropagation}
    >
      <div className={classNames(`${classPrefix}-wrap`)}>
        <div
          style={{ top }}
          className={classNames(
            `${classPrefix}-main`,
            icon ? `${classPrefix}-main-icon` : `${classPrefix}-main-text`
          )}
        >
          {iconElement && (
            <div className={`${classPrefix}-icon`}>{iconElement}</div>
          )}
          <AutoCenter>{content}</AutoCenter>
        </div>
      </div>
    </Mask>
  )
}
