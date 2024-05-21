import { useMemoizedFn } from 'ahooks'
import { RefObject, useEffect } from 'react'

export function observe(
  element: HTMLElement | null,
  options: MutationObserverInit,
  callback: VoidFunction
) {
  if (element && typeof MutationObserver !== 'undefined') {
    let observer: MutationObserver | null = new MutationObserver(() => {
      callback()
    })
    observer.observe(element, options)

    // Return cleanup function
    return () => {
      if (observer) {
        observer.disconnect()
        observer = null
      }
    }
  }

  return () => {}
}

export function useMutationEffect(
  effect: () => void,
  targetRef: RefObject<HTMLElement>,
  options: MutationObserverInit
) {
  const fn = useMemoizedFn(effect)
  useEffect(() => {
    const cleanup = observe(targetRef.current, options, fn)
    return cleanup
  }, [targetRef])
}
