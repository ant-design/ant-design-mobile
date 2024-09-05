import { useMemoizedFn } from 'ahooks'
import React from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { getDefaultConfig } from '../config-provider'
import { usePortal } from '../portal-provider'
import { ModalAlertProps } from './alert'
import { ModalConfirmProps } from './confirm'
import { Modal } from './modal'
import { ModalShowProps } from './show'

export const closeFnSet = new Set<() => void>()

export const useModal = () => {
  const { renderModalInPortal } = usePortal()

  /**
   * @description refer to Modal.show
   * @see https://github.com/ant-design/ant-design-mobile/blob/master/src/components/modal/show.tsx
   */
  const show = useMemoizedFn((props: ModalShowProps) => {
    const handler = renderModalInPortal(
      <Modal
        {...props}
        afterClose={() => {
          closeFnSet.delete(handler.close)
          props.afterClose?.()
        }}
      />
    )
    closeFnSet.add(handler.close)
    return handler
  })

  /**
   * @description refer to Modal.confirm
   * @see https://github.com/ant-design/ant-design-mobile/blob/master/src/components/modal/confirm.tsx
   */
  const confirm = useMemoizedFn((p: ModalConfirmProps) => {
    const defaultProps = {
      confirmText: getDefaultConfig().locale.common.confirm,
      cancelText: getDefaultConfig().locale.common.cancel,
    }
    const props = mergeProps(defaultProps, p)

    return new Promise<boolean>(resolve => {
      show({
        ...props,
        closeOnAction: true,
        onClose: () => {
          props.onClose?.()
          resolve(false)
        },
        actions: [
          {
            key: 'confirm',
            text: props.confirmText,
            primary: true,
            onClick: async () => {
              await props.onConfirm?.()
              resolve(true)
            },
          },
          {
            key: 'cancel',
            text: props.cancelText,
            onClick: async () => {
              await props.onCancel?.()
              resolve(false)
            },
          },
        ],
      })
    })
  })

  /**
   * @description refer to Modal.alert
   * @see https://github.com/ant-design/ant-design-mobile/blob/master/src/components/modal/alert.tsx
   */
  const alert = useMemoizedFn((p: ModalAlertProps) => {
    const defaultProps = {
      confirmText: getDefaultConfig().locale.Modal.ok,
    }
    const props = mergeProps(defaultProps, p)
    return new Promise<void>(resolve => {
      show({
        ...props,
        closeOnAction: true,
        actions: [
          {
            key: 'confirm',
            text: props.confirmText,
            primary: true,
          },
        ],
        onAction: props.onConfirm,
        onClose: () => {
          props.onClose?.()
          resolve()
        },
      })
    })
  })

  const clear = useMemoizedFn(() => {
    closeFnSet.forEach(close => close())
  })

  return {
    show,
    clear,
    confirm,
    alert,
  }
}
