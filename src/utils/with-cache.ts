export function withCache<T>(generate: () => T) {
  let cache: T | null = null
  return () => {
    if (cache === null) {
      cache = generate()
    }
    return cache
  }
}
