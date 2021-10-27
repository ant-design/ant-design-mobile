import { RefObject, useLayoutEffect } from 'react'
import { usePersistFn } from 'ahooks'

export function useResizeEffect(
  effect: () => void,
  targetRef: RefObject<HTMLElement>
) {
  const fn = usePersistFn(effect)
  useLayoutEffect(() => {
    const target = targetRef.current
    if (!target) return
    if (window.ResizeObserver) {
      const observer = new ResizeObserver(entries => {
        fn()
      })
      observer.observe(target)
      return () => {
        observer.disconnect()
      }
    } else {
      fn()
    }
  }, [targetRef])
}
