import { FC } from 'react'
import assign from 'lodash/assign'
import assignWith from 'lodash/assignWith'
import isUndefined from 'lodash/isUndefined'

// TODO: deprecated
export function withDefaultProps<D>(defaultProps: D) {
  return function <P>(C: FC<P & typeof defaultProps>) {
    C.defaultProps = defaultProps
    return C as FC<P>
  }
}

export function mergeProps<A, B>(a: A, b: B): A & B
export function mergeProps<A, B, C>(a: A, b: B, c: C): A & B & C
export function mergeProps(...items: any[]) {
  function customizer(objValue: any, srcValue: any) {
    return isUndefined(srcValue) ? objValue : srcValue
  }

  let ret = assign({}, items[0])
  for (let i = 0; i < items.length; i++) {
    ret = assignWith(ret, items[i], customizer)
  }
  return ret
}
