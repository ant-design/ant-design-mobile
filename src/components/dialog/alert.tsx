import { show } from './show'
import { DialogProps } from './index'
import { mergeProps } from '../../utils/with-default-props'
import { ReactNode } from 'react'

export type DialogAlertProps = Omit<
  DialogProps,
  'visible' | 'closeOnAction' | 'actions'
> & {
  confirmText?: ReactNode
}

const defaultProps = {
  confirmText: '我知道了',
}

export function alert(p: DialogAlertProps) {
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
      onClose: () => {
        resolve()
      },
    })
  })
}
