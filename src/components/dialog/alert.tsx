import type { ReactNode } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { getDefaultConfig } from '../config-provider'
import { DialogProps } from './index'
import { show } from './show'

export type DialogAlertProps = Omit<
  DialogProps,
  'visible' | 'closeOnAction' | 'actions'
> & {
  confirmText?: ReactNode
  onConfirm?: () => void | Promise<void>
}

export function alert(props: DialogAlertProps) {
  const defaultProps = {
    confirmText: getDefaultConfig().locale.Dialog.ok,
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
