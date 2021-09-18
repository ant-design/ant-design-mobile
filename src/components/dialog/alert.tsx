import { show } from './show'
import { DialogProps } from './index'
import { mergeProps } from '../../utils/with-default-props'
import { ReactNode } from 'react'
import { getDefaultConfig } from '../config-provider'

export type DialogAlertProps = Omit<
  DialogProps,
  'visible' | 'closeOnAction' | 'actions'
> & {
  confirmText?: ReactNode
  onConfirm?: () => void | Promise<void>
}

export function alert(p: DialogAlertProps) {
  const defaultProps = {
    confirmText: getDefaultConfig().locale.Dialog.ok,
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
        },
      ],
      onAction: props.onConfirm,
      onClose: () => {
        resolve()
      },
    })
  })
}
