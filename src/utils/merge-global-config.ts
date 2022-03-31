import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'

export function mergeGlobalConfig<T, P>(base: T, patch: P): T {
  return merge(cloneDeep(base), patch)
}
