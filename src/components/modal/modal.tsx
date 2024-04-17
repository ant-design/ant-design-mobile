import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import AutoCenter from '../auto-center'
import CenterPopup, { CenterPopupProps } from '../center-popup'
import Image from '../image'
import Space from '../space'
import { Action, ModalActionButton } from './modal-action-button'

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

export const Modal: FC<ModalProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const element = (
    <>
      {!!mergedProps.image && (
        <div className={cls('image-container')}>
          <Image
            src={mergedProps.image}
            alt='modal header image'
            width='100%'
          />
        </div>
      )}
      {!!mergedProps.header && (
        <div className={cls('header')}>
          <AutoCenter>{mergedProps.header}</AutoCenter>
        </div>
      )}
      {!!mergedProps.title && (
        <div className={cls('title')}>{mergedProps.title}</div>
      )}
      <div className={cls('content')}>
        {typeof mergedProps.content === 'string' ? (
          <AutoCenter>{mergedProps.content}</AutoCenter>
        ) : (
          mergedProps.content
        )}
      </div>
      <Space
        direction='vertical'
        block
        className={classNames(
          cls('footer'),
          mergedProps.actions.length === 0 && cls('footer-empty')
        )}
      >
        {mergedProps.actions.map((action, index) => (
          <ModalActionButton
            key={action.key}
            action={action}
            onAction={async () => {
              await Promise.all([
                action.onClick?.(),
                mergedProps.onAction?.(action, index),
              ])
              if (mergedProps.closeOnAction) {
                mergedProps.onClose?.()
              }
            }}
          />
        ))}
      </Space>
    </>
  )

  return (
    <CenterPopup
      className={classNames(cls(), mergedProps.className)}
      style={mergedProps.style}
      afterClose={mergedProps.afterClose}
      afterShow={mergedProps.afterShow}
      showCloseButton={mergedProps.showCloseButton}
      closeOnMaskClick={mergedProps.closeOnMaskClick}
      onClose={mergedProps.onClose}
      visible={mergedProps.visible}
      getContainer={mergedProps.getContainer}
      bodyStyle={mergedProps.bodyStyle}
      bodyClassName={classNames(
        cls('body'),
        mergedProps.image && cls('with-image'),
        mergedProps.bodyClassName
      )}
      maskStyle={mergedProps.maskStyle}
      maskClassName={mergedProps.maskClassName}
      stopPropagation={mergedProps.stopPropagation}
      disableBodyScroll={mergedProps.disableBodyScroll}
      destroyOnClose={mergedProps.destroyOnClose}
      forceRender={mergedProps.forceRender}
    >
      {element}
    </CenterPopup>
  )
}

function cls(name: string = '') {
  return 'adm-modal' + (name && '-') + name
}
