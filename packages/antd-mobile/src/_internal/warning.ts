// @ts-ignore
import invariant from 'invariant'

export default (valid: boolean, component: string, message: string) => {
  invariant(valid, `[antd-mobile: ${component}] ${message}`)
}
