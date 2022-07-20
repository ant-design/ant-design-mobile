import React, { FC, ReactNode } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import { Action, ModalActionButton } from './modal-action-button'
import Image from '../image'
import Space from '../space'
import AutoCenter from '../auto-center'
import { NativeProps } from '../../utils/native-props'
import CenterPopup, { CenterPopupProps } from '../center-popup'

export type ModalProps = Pick<
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
> & {
  image?: string
  header?: ReactNode
  title?: ReactNode
  content?: ReactNode
  actions?: Action[]
  onAction?: (action: Action, index: number) => void | Promise<void>
  onClose?: () => void
  closeOnAction?: boolean
  closeOnMaskClick?: boolean
  showCloseButton?: boolean
} & NativeProps

const defaultProps = {
  actions: [] as Action[],
  closeOnAction: false,
  closeOnMaskClick: false,
  getContainer: null,
}

export const Modal: FC<ModalProps> = p => {
  const props = mergeProps(defaultProps, p)
  const element = (
    <>
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
    </>
  )

  return (
    <CenterPopup
      className={classNames(cls(), props.className)}
      style={props.style}
      afterClose={props.afterClose}
      afterShow={props.afterShow}
      showCloseButton={props.showCloseButton}
      closeOnMaskClick={props.closeOnMaskClick}
      onClose={props.onClose}
      visible={props.visible}
      getContainer={props.getContainer}
      bodyStyle={props.bodyStyle}
      bodyClassName={classNames(
        cls('body'),
        props.image && cls('with-image'),
        props.bodyClassName
      )}
      maskStyle={props.maskStyle}
      maskClassName={props.maskClassName}
      stopPropagation={props.stopPropagation}
      disableBodyScroll={props.disableBodyScroll}
      destroyOnClose={props.destroyOnClose}
      forceRender={props.forceRender}
    >
      {element}
    </CenterPopup>
  )
}

function cls(name: string = '') {
  return 'adm-modal' + (name && '-') + name
}
