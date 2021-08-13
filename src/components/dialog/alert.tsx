import { show } from './show'
import { DialogProps } from './index'

export function alert(
  props: Omit<DialogProps, 'visible' | 'closeOnAction' | 'actions'>
) {
  return new Promise<void>(resolve => {
    show({
      ...props,
      closeOnAction: true,
      actions: [
        {
          key: 'confirm',
          text: '我知道了',
        },
      ],
      onClose: () => {
        resolve()
      },
    })
  })
}
