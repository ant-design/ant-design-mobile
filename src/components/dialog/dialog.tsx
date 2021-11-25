import React, { FC, ReactNode } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import Mask from '../mask'
import { Action, DialogActionButton } from './dialog-action-button'
import Image from '../image'
import Space from '../space'
import { GetContainer } from '../../utils/render-to-container'
import { PropagationEvent } from '../../utils/with-stop-propagation'
import AutoCenter from '../auto-center'
import { useSpring, animated } from '@react-spring/web'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-dialog`

export type DialogProps = {
  afterClose?: () => void
  image?: string
  header?: ReactNode
  // waitImageLoad?: boolean
  title?: ReactNode
  content?: ReactNode
  actions?: (Action | Action[])[]
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
} & NativeProps

const defaultProps = {
  actions: [] as Action[],
  closeOnAction: false,
  closeOnMaskClick: false,
  stopPropagation: ['click'],
}

export const Dialog: FC<DialogProps> = p => {
  const props = mergeProps(defaultProps, p)

  const { scale } = useSpring({
    scale: props.visible ? 1 : 0.8,
    config: {
      mass: 1,
      tension: 250,
      friction: 20,
      clamp: true,
    },
  })

  return (
    <Mask
      visible={props.visible}
      destroyOnClose
      getContainer={props.getContainer}
      afterClose={props.afterClose}
      onMaskClick={props.closeOnMaskClick ? props.onClose : undefined}
      style={props.maskStyle}
      className={classNames(`${classPrefix}-mask`, props.maskClassName)}
      stopPropagation={props.stopPropagation}
    >
      {withNativeProps(
        props,
        <div className={`${classPrefix}-wrap`}>
          <animated.div
            style={{ scale }}
            onClick={e => e.stopPropagation()}
            className={`${classPrefix}-main`}
          >
            {!!props.image && (
              <Image src={props.image} alt='dialog header image' width='100%' />
            )}
            <div
              style={props.bodyStyle}
              className={classNames(`${classPrefix}-body`, props.bodyClassName)}
            >
              <Space direction='vertical' block>
                {!!props.header && (
                  <div className={`${classPrefix}-body-header-wrapper`}>
                    <div className={`${classPrefix}-body-header`}>
                      {props.header}
                    </div>
                  </div>
                )}
                {!!props.title && (
                  <div className={`${classPrefix}-body-title`}>
                    {props.title}
                  </div>
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
              </Space>
            </div>
            <div className={`${classPrefix}-footer`}>
              {props.actions.map((row, index) => {
                const actions = Array.isArray(row) ? row : [row]
                return (
                  <div className={`${classPrefix}-action-row`} key={index}>
                    {actions.map((action, index) => (
                      <DialogActionButton
                        key={action.key}
                        action={action}
                        onAction={async () => {
                          if (scale.isAnimating) return
                          await Promise.all([
                            action.onClick?.(),
                            props.onAction?.(action, index),
                          ])
                          if (props.closeOnAction) {
                            props.onClose?.()
                          }
                        }}
                      />
                    ))}
                  </div>
                )
              })}
            </div>
          </animated.div>
        </div>
      )}
    </Mask>
  )
}
