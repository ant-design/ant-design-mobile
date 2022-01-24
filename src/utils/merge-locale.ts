import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'

export function mergeLocale<T, P>(base: T, patch: P): T {
  return merge(cloneDeep(base), patch)
}
