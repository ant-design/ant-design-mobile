export function mergeProps<A, B>(a: A, b: B): B & A
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A
export function mergeProps<A, B, C, D>(a: A, b: B, c: C, d: D): D & C & B & A
export function mergeProps(...items: any[]) {
  const ret: any = {}
  items.forEach(item => {
    Object.keys(item).forEach(key => {
      if (item[key] !== undefined) {
        ret[key] = item[key]
      }
    })
  })
  return ret
}

/**
 * Merge props and return the first non-undefined value.
 * This is useful with legacy props that have been deprecated.
 */
export function mergeProp<T>(...propList: T[]): T | undefined {
  for (let i = 0; i < propList.length; i++) {
    if (propList[i] !== undefined) {
      return propList[i]
    }
  }
  return undefined
}
