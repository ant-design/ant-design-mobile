import merge from 'deepmerge'

function customMerge() {
  return (objValue: any, srcValue: any) => {
    return srcValue === undefined
      ? objValue
      : merge(objValue, srcValue, { customMerge })
  }
}

export function mergeProps<A, B>(a: A, b: B): B & A
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A
export function mergeProps(...items: any[]) {
  return merge.all(items, { customMerge })
}
