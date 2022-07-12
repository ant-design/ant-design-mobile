export function undefinedFallback<T>(a: T | undefined, b: T): T
export function undefinedFallback<T>(
  a: T | undefined,
  b: T | undefined,
  c: T
): T
export function undefinedFallback<T>(
  a: T | undefined,
  b: T | undefined,
  c: T | undefined,
  d: T
): T
export function undefinedFallback(...items: any[]) {
  let i: number
  for (i = 0; i < items.length; i++) {
    if (items[i] !== undefined) break
  }
  return items[i]
}
