import { show } from './show'
import { DialogProps } from './index'
import { ReactNode } from 'react'
import { mergeProps } from '../../utils/with-default-props'

export type DialogConfirmProps = Omit<
  DialogProps,
  'visible' | 'closeOnAction' | 'actions'
> & {
  confirmText?: ReactNode
  cancelText?: ReactNode
}

const defaultProps = {
  confirmText: '确认',
  cancelText: '取消',
}

export function confirm(p: DialogConfirmProps) {
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
        [
          {
            key: 'cancel',
            text: props.cancelText,
            onClick: () => {
              resolve(false)
            },
          },
          {
            key: 'confirm',
            text: props.confirmText,
            bold: true,
            onClick: () => {
              resolve(true)
            },
          },
        ],
      ],
    })
  })
}
