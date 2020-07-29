import standard from './standard'
import { AlertOptions } from './PropsType'
import { promisify } from '../_internal'

const alert = (options: AlertOptions, cb: () => void) => {
  const { buttonText, ...rest } = options
  return standard({
    ...rest,
    mainButton: {
      text: buttonText ?? '我知道了',
      onPress() {
        cb?.()
      },
    },
    closeType: 'none',
  })
}

export default promisify(alert)
