import { show } from './show'
import { ModalProps } from './index'
import { mergeProps } from '../../utils/with-default-props'
import { ReactNode } from 'react'
import { getDefaultConfig } from '../config-provider'

export type ModalAlertProps = Omit<
  ModalProps,
  'visible' | 'closeOnAction' | 'actions'
> & {
  confirmText?: ReactNode
  onConfirm?: () => void | Promise<void>
}

export function alert(p: ModalAlertProps) {
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
}
