export function mergeLocale<T extends object, P extends object>(
  base: T,
  patch: P
): T {
  function merge(a: any, b: any): any {
    if (
      typeof a !== 'object' ||
      typeof b !== 'object' ||
      Array.isArray(a) ||
      Array.isArray(b)
    ) {
      return b !== undefined ? b : a
    }
    const result: any = {}
    for (const key in a) {
      if (a.hasOwnProperty(key)) {
        result[key] = merge(a[key], b[key])
      }
    }
    return result
  }
  return merge(base, patch)
}
