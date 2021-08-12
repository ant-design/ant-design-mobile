import { FC } from 'react'
import assign from 'lodash/assign'
import assignWith from 'lodash/assignWith'
import isUndefined from 'lodash/isUndefined'

export function withDefaultProps<D>(defaultProps: D) {
  return function <P>(C: FC<P & typeof defaultProps>) {
    C.defaultProps = defaultProps
    return C as FC<P>
  }
}

export function mergeProps<P, D>(defaultProps: D, props: P): P & D {
  function customizer(objValue: any, srcValue: any) {
    return isUndefined(srcValue) ? objValue : srcValue
  }
  return assignWith(assign({}, defaultProps), props, customizer)
}
