type Merge<T, P> = {
  [K in keyof T & keyof P]: P[K] | T[K]
}

export function mergeFuncProps<
  T extends Record<string, any>,
  P extends Record<string, any>
>(p1: T, p2: P): Merge<T, P> {
  const p1Keys = Object.keys(p1)
  const p2Keys = Object.keys(p2)
  const keys = new Set([...p1Keys, ...p2Keys])
  const res: any = {}

  keys.forEach(key => {
    const p1Value = p1[key]
    const p2Value = p2[key]

    if (typeof p1Value === 'function' && typeof p2Value === 'function') {
      res[key] = function (...args: any[]) {
        p1Value(...args)
        p2Value(...args)
      }
    } else {
      res[key] = p1Value || p2Value
    }
  })

  return res
}
