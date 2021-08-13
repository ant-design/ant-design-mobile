import { show } from './show'
import { DialogProps } from './index'

export function confirm(
  props: Omit<DialogProps, 'visible' | 'closeOnAction' | 'actions'>
) {
  return new Promise<boolean>(resolve => {
    show({
      ...props,
      closeOnAction: true,
      actions: [
        [
          {
            key: 'cancel',
            text: '取消',
            onClick: () => {
              resolve(false)
            },
          },
          {
            key: 'confirm',
            text: '确认',
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
