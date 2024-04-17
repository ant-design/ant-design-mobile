import type { ReactNode } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { getDefaultConfig } from '../config-provider'
import { ModalProps } from './index'
import { show } from './show'

export type ModalAlertProps = Omit<
  ModalProps,
  'visible' | 'closeOnAction' | 'actions'
> & {
  confirmText?: ReactNode
  onConfirm?: () => void | Promise<void>
}

export function alert(props: ModalAlertProps) {
  const defaultProps = {
    confirmText: getDefaultConfig().locale.Modal.ok,
  }
  const mergedProps = mergeProps(defaultProps, props)
  return new Promise<void>(resolve => {
    show({
      ...mergedProps,
      closeOnAction: true,
      actions: [
        {
          key: 'confirm',
          text: mergedProps.confirmText,
          primary: true,
        },
      ],
      onAction: mergedProps.onConfirm,
      onClose: () => {
        mergedProps.onClose?.()
        resolve()
      },
    })
  })
}
