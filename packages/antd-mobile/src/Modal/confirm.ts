import standard from './standard'
import { ConfirmOptions } from './PropsType'
import { promisify } from '../_internal'

const confirm = (options: ConfirmOptions, cb: (res: boolean) => void) => {
  const { confirmText, cancelText, ...rest } = options
  return standard({
    ...rest,
    mainButton: {
      text: confirmText ?? '是',
      onPress() {
        cb?.(true)
      },
    },
    cancelButton: {
      text: cancelText ?? '否',
      onPress() {
        cb?.(false)
      },
    },
    closeType: 'none',
  })
}

export default promisify(confirm)
