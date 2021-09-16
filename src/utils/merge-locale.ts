import { cloneDeep, merge } from 'lodash'

export function mergeLocale<T, P>(base: T, patch: P): T {
  return merge(cloneDeep(base), patch)
}
