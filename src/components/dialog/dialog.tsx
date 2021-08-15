import React, { FC } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import Button from '../button'
import classNames from 'classnames'
import Mask from '../mask'
import { noop } from '../../utils/noop'
import { Action, DialogBtnProps } from './index'

const classPrefix = `am-dialog`

export interface DialogProps {
  afterClose?: () => void
  headerImage?: string
  waitImageLoad?: boolean
  bodyStyle?: React.CSSProperties
  bodyClassName?: string
  maskStyle?: React.CSSProperties
  maskClassName?: string
  title?: React.ReactNode
  content?: React.ReactNode
  cancelText?: React.ReactNode
  actions?: (Action | Action[])[]
  onAction?: (action: Action) => void | Promise<void>
  closeOnAction?: boolean
  onClose?: () => void

  onCancel?: (
    e: React.MouseEvent
  ) =>
    | void
    | boolean
    | Promise<boolean>
    | Promise<void>
    | Promise<void | boolean>
  cancelProps?: DialogBtnProps
  okText?: React.ReactNode
  okProps?: DialogBtnProps
  onOk?: (
    e: React.MouseEvent
  ) =>
    | void
    | boolean
    | Promise<boolean>
    | Promise<void>
    | Promise<void | boolean>

  closeOnMaskClick?: boolean
  visible?: boolean
  getContainer?: HTMLElement | (() => HTMLElement) | undefined
}

const defaultProps = {
  actions: [],
  closeOnAction: false,
  closeOnMaskClick: false,
}

export const Dialog: FC<DialogProps> = p => {
  const props = mergeProps(defaultProps, p)

  function renderAction(action: Action) {
    return (
      <Button
        key={action.key}
        onClick={() => {
          action.onClick?.()
          props.onAction?.(action)
          if (props.closeOnAction) {
            props.onClose?.()
          }
        }}
        className={classNames(`${classPrefix}-button`, {
          [`${classPrefix}-button-bold`]: action.bold,
        })}
        fill='none'
        block
        color={action.color ?? 'primary'}
        // loading={action.loading} TODO
        disabled={action.disabled}
      >
        {action.text}
      </Button>
    )
  }

  return (
    <Mask
      visible={props.visible}
      destroyOnClose
      getContainer={props.getContainer}
      afterClose={props.afterClose}
      onMaskClick={
        props.closeOnMaskClick && !props.cancelProps?.loading
          ? props.onClose
          : noop
      }
      style={props.maskStyle}
      className={classNames(`${classPrefix}-mask`, props.maskClassName)}
    >
      <div onClick={e => e.stopPropagation()} className={`${classPrefix}-wrap`}>
        {Boolean(props.headerImage) && (
          <div className={`${classPrefix}-image`}>
            <img src={props.headerImage} alt='inside dialog' />
          </div>
        )}
        <div
          style={props.bodyStyle}
          className={classNames(`${classPrefix}-body`, props.bodyClassName)}
        >
          {Boolean(props.title) && (
            <div className={`${classPrefix}-body-title`}>{props.title}</div>
          )}
          {Boolean(props.content) && (
            <div className={`${classPrefix}-body-message-wrapper`}>
              <div
                className={classNames(`${classPrefix}-body-message`, {
                  [`${classPrefix}-body-message-with-title`]: !!props.title,
                })}
              >
                {props.content}
              </div>
            </div>
          )}
        </div>
        <div className={`${classPrefix}-footer`}>
          {props.actions.map((row, index) => {
            const actions = Array.isArray(row) ? row : [row]
            return (
              <div className={`${classPrefix}-action-row`} key={index}>
                {actions.map(renderAction)}
              </div>
            )
          })}
        </div>
      </div>
    </Mask>
  )
}
