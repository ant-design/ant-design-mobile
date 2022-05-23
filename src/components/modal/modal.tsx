import React, { FC, ReactNode, useState } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import { useIsomorphicLayoutEffect, useUnmountedRef } from 'ahooks'
import Mask from '../mask'
import type { MaskProps } from '../mask'
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
import { ShouldRender } from '../../utils/should-render'
import { useInnerVisible } from '../../utils/use-inner-visible'

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
  maskStyle?: MaskProps['style']
  maskClassName?: string
  stopPropagation?: PropagationEvent[]
  showCloseButton?: boolean
  disableBodyScroll?: boolean
  destroyOnClose?: boolean
  forceRender?: boolean
} & NativeProps

const defaultProps = {
  visible: false,
  actions: [] as Action[],
  closeOnAction: false,
  closeOnMaskClick: false,
  stopPropagation: ['click'],
  showCloseButton: false,
  getContainer: null,
  disableBodyScroll: true,
  destroyOnClose: false,
  forceRender: false,
}

export const Modal: FC<ModalProps> = p => {
  const props = mergeProps(defaultProps, p)

  const unmountedRef = useUnmountedRef()
  const style = useSpring({
    scale: props.visible ? 1 : 0.8,
    opacity: props.visible ? 1 : 0,
    config: {
      mass: 1.2,
      tension: 200,
      friction: 25,
      clamp: true,
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
  useIsomorphicLayoutEffect(() => {
    if (props.visible) {
      setActive(true)
    }
  }, [props.visible])

  const maskVisible = useInnerVisible(active && props.visible)

  const body = (
    <div
      className={classNames(
        cls('body'),
        props.image && cls('with-image'),
        props.bodyClassName
      )}
      style={props.bodyStyle}
    >
      {props.showCloseButton && (
        <a
          className={classNames(cls('close'), 'adm-plain-anchor')}
          onClick={props.onClose}
        >
          <CloseOutline />
        </a>
      )}
      {!!props.image && (
        <div className={cls('image-container')}>
          <Image src={props.image} alt='modal header image' width='100%' />
        </div>
      )}
      {!!props.header && (
        <div className={cls('header')}>
          <AutoCenter>{props.header}</AutoCenter>
        </div>
      )}
      {!!props.title && <div className={cls('title')}>{props.title}</div>}
      <div className={cls('content')}>
        {typeof props.content === 'string' ? (
          <AutoCenter>{props.content}</AutoCenter>
        ) : (
          props.content
        )}
      </div>
      <Space
        direction='vertical'
        block
        className={classNames(
          cls('footer'),
          props.actions.length === 0 && cls('footer-empty')
        )}
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
    </div>
  )

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <div
        className={cls()}
        style={{
          display: active ? undefined : 'none',
          pointerEvents: active ? undefined : 'none',
        }}
      >
        <Mask
          visible={maskVisible}
          forceRender={props.forceRender}
          destroyOnClose={props.destroyOnClose}
          onMaskClick={props.closeOnMaskClick ? props.onClose : undefined}
          style={props.maskStyle}
          className={classNames(cls('mask'), props.maskClassName)}
          disableBodyScroll={props.disableBodyScroll}
        />
        <div className={cls('wrap')}>
          <animated.div style={style}>{body}</animated.div>
        </div>
      </div>
    )
  )

  return (
    <ShouldRender
      active={active}
      forceRender={props.forceRender}
      destroyOnClose={props.destroyOnClose}
    >
      {renderToContainer(props.getContainer, node)}
    </ShouldRender>
  )
}

function cls(name: string = '') {
  return 'adm-modal' + (name && '-') + name
}
