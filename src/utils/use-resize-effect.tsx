import { RefObject, useLayoutEffect, DependencyList } from 'react'
import { usePersistFn } from 'ahooks'

export function useResizeEffect<T extends HTMLElement>(
  effect: (target: T) => void,
  targetRef: RefObject<T>,
  effects?: DependencyList
) {
  const fn = usePersistFn(effect)
  let layoutEffect: DependencyList = [targetRef]
  if (effects) {
    layoutEffect = [...layoutEffect, ...effects]
  }
  useLayoutEffect(() => {
    const target = targetRef.current
    if (!target) return
    if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        fn(target)
      })
      observer.observe(target)
      return () => {
        observer.disconnect()
      }
    } else {
      fn(target)
    }
  }, layoutEffect)
}
