export function mergeProps<A, B>(a: A, b: B): B & A
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A
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
