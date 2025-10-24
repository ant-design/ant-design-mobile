import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import AutoCenter from '../auto-center'
import CenterPopup, { CenterPopupProps } from '../center-popup'
import { useConfig } from '../config-provider'
import Image from '../image'
import { Action, DialogActionButton } from './dialog-action-button'

export type DialogProps = Pick<
  CenterPopupProps,
  | 'afterClose'
  | 'afterShow'
  | 'bodyClassName'
  | 'bodyStyle'
  | 'destroyOnClose'
  | 'disableBodyScroll'
  | 'forceRender'
  | 'getContainer'
  | 'maskClassName'
  | 'maskStyle'
  | 'stopPropagation'
  | 'visible'
  | 'prefixCls'
> & {
  image?: string
  header?: ReactNode
  title?: ReactNode
  content?: ReactNode
  actions?: (Action | Action[])[]
  onAction?: (action: Action, index: number) => void | Promise<void>
  onClose?: () => void
  closeOnAction?: boolean
  closeOnMaskClick?: boolean
} & NativeProps<
    | '--background-color'
    | '--border-radius'
    | '--max-width'
    | '--min-width'
    | '--z-index'
  >

const defaultProps = {
  actions: [] as Action[],
  closeOnAction: false,
  closeOnMaskClick: false,
  getContainer: null,
}

export const Dialog: FC<DialogProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('dialog', props.prefixCls)

  const element = (
    <>
      {!!props.image && (
        <div className={`${prefixCls}-image-container`}>
          <Image src={props.image} alt='dialog header image' width='100%' />
        </div>
      )}
      {!!props.header && (
        <div className={`${prefixCls}-header`}>
          <AutoCenter>{props.header}</AutoCenter>
        </div>
      )}
      {!!props.title && (
        <div className={`${prefixCls}-title`}>{props.title}</div>
      )}
      <div
        className={classNames(
          `${prefixCls}-content`,
          !props.content && `${prefixCls}-content-empty`
        )}
      >
        {typeof props.content === 'string' ? (
          <AutoCenter>{props.content}</AutoCenter>
        ) : (
          props.content
        )}
      </div>
      <div className={`${prefixCls}-footer`}>
        {props.actions.map((row, index) => {
          const actions = Array.isArray(row) ? row : [row]
          return (
            <div className={`${prefixCls}-action-row`} key={index}>
              {actions.map((action, index) => (
                <DialogActionButton
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
              ))}
            </div>
          )
        })}
      </div>
    </>
  )

  return (
    <CenterPopup
      className={classNames(prefixCls, props.className)}
      style={props.style}
      afterClose={props.afterClose}
      afterShow={props.afterShow}
      onMaskClick={
        props.closeOnMaskClick
          ? () => {
              props.onClose?.()
            }
          : undefined
      }
      visible={props.visible}
      getContainer={props.getContainer}
      bodyStyle={props.bodyStyle}
      bodyClassName={classNames(
        `${prefixCls}-body`,
        props.image && `${prefixCls}-with-image`,
        props.bodyClassName
      )}
      maskStyle={props.maskStyle}
      maskClassName={props.maskClassName}
      stopPropagation={props.stopPropagation}
      disableBodyScroll={props.disableBodyScroll}
      destroyOnClose={props.destroyOnClose}
      forceRender={props.forceRender}
      role='dialog'
      aria-label={props['aria-label']}
      prefixCls={prefixCls}
    >
      {element}
    </CenterPopup>
  )
}
