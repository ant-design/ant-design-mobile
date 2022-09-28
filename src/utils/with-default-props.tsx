import assignWith from 'lodash/assignWith'

type SharedKey<V, U> = Extract<keyof V, keyof U>
type MergeProps<V, U> = Omit<V, SharedKey<V, U>> &
  Omit<U, SharedKey<V, U>> &
  (Pick<V, SharedKey<V, U>> | Pick<U, SharedKey<V, U>>)

export function mergeProps<A, B>(a: A, b: B): MergeProps<A, B>
export function mergeProps<A, B, C>(
  a: A,
  b: B,
  c: C
): MergeProps<A, MergeProps<B, C>>
export function mergeProps(...items: any[]) {
  function customizer(objValue: any, srcValue: any) {
    return srcValue === undefined ? objValue : srcValue
  }

  let ret = { ...items[0] }
  for (let i = 1; i < items.length; i++) {
    ret = assignWith(ret, items[i], customizer)
  }
  return ret
}
