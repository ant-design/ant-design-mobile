export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) return []

  return Array.isArray(candidate) ? candidate : [candidate]
}
