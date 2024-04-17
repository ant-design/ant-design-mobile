import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import AutoCenter from '../auto-center'
import CenterPopup, { CenterPopupProps } from '../center-popup'
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
} & NativeProps

const defaultProps = {
  actions: [] as Action[],
  closeOnAction: false,
  closeOnMaskClick: false,
  getContainer: null,
}

export const Dialog: FC<DialogProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)

  const element = (
    <>
      {!!mergedProps.image && (
        <div className={cls('image-container')}>
          <Image
            src={mergedProps.image}
            alt='dialog header image'
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
      <div
        className={classNames(
          cls('content'),
          !mergedProps.content && cls('content-empty')
        )}
      >
        {typeof mergedProps.content === 'string' ? (
          <AutoCenter>{mergedProps.content}</AutoCenter>
        ) : (
          mergedProps.content
        )}
      </div>
      <div className={cls('footer')}>
        {mergedProps.actions.map((row, index) => {
          const actions = Array.isArray(row) ? row : [row]
          return (
            <div className={cls('action-row')} key={index}>
              {actions.map((action, index) => (
                <DialogActionButton
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
            </div>
          )
        })}
      </div>
    </>
  )

  return (
    <CenterPopup
      className={classNames(cls(), mergedProps.className)}
      style={mergedProps.style}
      afterClose={mergedProps.afterClose}
      afterShow={mergedProps.afterShow}
      onMaskClick={
        mergedProps.closeOnMaskClick
          ? () => {
              mergedProps.onClose?.()
            }
          : undefined
      }
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
      role='dialog'
      aria-label={mergedProps['aria-label']}
    >
      {element}
    </CenterPopup>
  )
}

function cls(name: string = '') {
  return 'adm-dialog' + (name && '-') + name
}
