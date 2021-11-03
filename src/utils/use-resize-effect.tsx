import { RefObject, useLayoutEffect, DependencyList } from 'react'
import { usePersistFn } from 'ahooks'

export function useResizeEffect(
  effect: () => void,
  targetRef: RefObject<HTMLElement>,
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
        fn()
      })
      observer.observe(target)
      return () => {
        observer.disconnect()
      }
    } else {
      fn()
    }
  }, layoutEffect)
}
