import React, { FC, ReactNode, useState } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import { useUnmountedRef } from 'ahooks'
import Mask from '../mask'
import { Action, ModalActionButton } from './modal-action-button'
import Image from '../image'
import Space from '../space'
import {
  GetContainer,
  renderToContainer,
} from '../../utils/render-to-container'
import {
  PropagationEvent,
  withStopPropagation,
} from '../../utils/with-stop-propagation'
import AutoCenter from '../auto-center'
import { useSpring, animated } from '@react-spring/web'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { CloseOutline } from 'antd-mobile-icons'

const classPrefix = `adm-modal`

export type ModalProps = {
  afterClose?: () => void
  afterShow?: () => void
  image?: string
  header?: ReactNode
  title?: ReactNode
  content?: ReactNode
  actions?: Action[]
  onAction?: (action: Action, index: number) => void | Promise<void>
  closeOnAction?: boolean
  onClose?: () => void
  closeOnMaskClick?: boolean
  visible?: boolean
  getContainer?: GetContainer
  bodyStyle?: React.CSSProperties
  bodyClassName?: string
  maskStyle?: React.CSSProperties
  maskClassName?: string
  stopPropagation?: PropagationEvent[]
  showCloseButton?: boolean
} & NativeProps

const defaultProps = {
  visible: false,
  actions: [] as Action[],
  closeOnAction: false,
  closeOnMaskClick: false,
  stopPropagation: ['click'],
  showCloseButton: false,
  getContainer: null,
}

export const Modal: FC<ModalProps> = p => {
  const props = mergeProps(defaultProps, p)

  const unmountedRef = useUnmountedRef()
  const style = useSpring({
    scale: props.visible ? 1 : 0.8,
    opacity: props.visible ? 1 : 0,
    config: {
      mass: 1,
      tension: 200,
      friction: 30,
      clamp: true,
    },
    onStart: () => {
      setActive(true)
    },
    onRest: () => {
      if (unmountedRef.current) return
      setActive(props.visible)
      if (props.visible) {
        props.afterShow?.()
      } else {
        props.afterClose?.()
      }
    },
  })

  const [active, setActive] = useState(props.visible)

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <div
        className={classPrefix}
        style={{
          display: active ? 'unset' : 'none',
        }}
      >
        <Mask
          visible={props.visible}
          onMaskClick={props.closeOnMaskClick ? props.onClose : undefined}
          style={props.maskStyle}
          className={classNames(`${classPrefix}-mask`, props.maskClassName)}
        />
        <div
          className={`${classPrefix}-wrap`}
          style={{
            pointerEvents: props.visible ? 'unset' : 'none',
          }}
        >
          <animated.div
            style={{
              ...style,
            }}
            onClick={e => e.stopPropagation()}
            className={`${classPrefix}-main`}
          >
            {props.showCloseButton && (
              <a
                className={classNames(
                  `${classPrefix}-close`,
                  'adm-plain-anchor'
                )}
                onClick={props.onClose}
              >
                <CloseOutline />
              </a>
            )}
            {!!props.image && (
              <div className={`${classPrefix}-image-container`}>
                <Image
                  src={props.image}
                  alt='modal header image'
                  width='100%'
                />
              </div>
            )}
            <div
              style={props.bodyStyle}
              className={classNames(`${classPrefix}-body`, props.bodyClassName)}
            >
              {!!props.header && (
                <div className={`${classPrefix}-body-header-wrapper`}>
                  <div className={`${classPrefix}-body-header`}>
                    {props.header}
                  </div>
                </div>
              )}
              {!!props.title && (
                <div className={`${classPrefix}-body-title`}>{props.title}</div>
              )}
              {!!props.content && (
                <div className={`${classPrefix}-body-content`}>
                  {typeof props.content === 'string' ? (
                    <AutoCenter>{props.content}</AutoCenter>
                  ) : (
                    props.content
                  )}
                </div>
              )}
            </div>
            <Space
              direction='vertical'
              block
              className={`${classPrefix}-footer`}
            >
              {props.actions.map((action, index) => {
                return (
                  <ModalActionButton
                    key={action.key}
                    action={action}
                    onAction={async () => {
                      await Promise.all([
                        action.onClick?.(),
                        props.onAction?.(action, index),
                      ])
                      if (props.closeOnAction) {
                        props.onClose?.()
                      }
                    }}
                  />
                )
              })}
            </Space>
          </animated.div>
        </div>
      </div>
    )
  )

  return renderToContainer(props.getContainer, node)
}
