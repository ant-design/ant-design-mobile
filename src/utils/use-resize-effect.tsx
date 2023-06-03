import { RefObject } from 'react'
import { useIsomorphicLayoutEffect, useMemoizedFn } from 'ahooks'

export function useResizeEffect<T extends HTMLElement>(
  effect: (target: T) => void,
  targetRef: RefObject<T>
) {
  const fn = useMemoizedFn(effect)
  useIsomorphicLayoutEffect(() => {
    const target = targetRef.current
    if (!target) return
    if (window.ResizeObserver) {
      let animationFrame: number
      const observer = new ResizeObserver(() => {
        animationFrame = window.requestAnimationFrame(() => fn(target))
      })
      observer.observe(target)
      return () => {
        window.cancelAnimationFrame(animationFrame)
        observer.disconnect()
      }
    } else {
      fn(target)
    }
  }, [targetRef])
}
