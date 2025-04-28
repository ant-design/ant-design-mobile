import { ComponentType } from 'react'
import { isFragment, isMemo } from 'react-is'
export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) return []

  return Array.isArray(candidate) ? candidate : [candidate]
}

function shouldConstruct(Component: ComponentType) {
  const { prototype } = Component
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
