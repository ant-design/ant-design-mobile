import { isMemo, isFragment } from 'react-is'
import { NamePath, Store } from 'rc-field-form/es/interface'
import getValue from 'rc-util/lib/utils/get'
import setValue from 'rc-util/lib/utils/set'

export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) return []

  return Array.isArray(candidate) ? candidate : [candidate]
}

// eslint-disable-next-line @typescript-eslint/ban-types
function shouldConstruct(Component: Function) {
  const prototype = Component.prototype
  return !!(prototype && prototype.isReactComponent)
}
// https://github.com/facebook/react/blob/ce13860281f833de8a3296b7a3dad9caced102e9/packages/react-reconciler/src/ReactFiber.new.js#L225
function isSimpleFunctionComponent(type: any) {
  return (
    typeof type === 'function' &&
    !shouldConstruct(type) &&
    type.defaultProps === undefined
  )
}

export function isSafeSetRefComponent(component: any): boolean {
  if (isFragment(component)) return false
  if (isMemo(component)) return isSafeSetRefComponent(component.type)

  return !isSimpleFunctionComponent(component.type)
}

export function cloneByNamePathList(
  store: Store,
  namePathList: NamePath[]
): Store {
  let newStore = {}
  namePathList.forEach(namePath => {
    const value = getValue(store, toArray(namePath))
    newStore = setValue(newStore, toArray(namePath), value)
  })

  return newStore
}
