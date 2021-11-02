import { RefObject, useLayoutEffect } from 'react'
import { usePersistFn } from 'ahooks'

export function useResizeEffect<T extends HTMLElement>(
  effect: (target: T) => void,
  targetRef: RefObject<T>
) {
  const fn = usePersistFn(effect)
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
  }, [targetRef])
}
