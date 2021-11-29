import { RefObject, useEffect } from 'react'
import { usePersistFn } from 'ahooks'

export function useMutationEffect(
  effect: () => void,
  targetRef: RefObject<HTMLElement>,
  options: MutationObserverInit
) {
  const fn = usePersistFn(effect)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      fn()
    })
    if (!targetRef.current) return
    observer.observe(targetRef.current, options)
    return () => {
      observer.disconnect()
    }
  }, [targetRef])
}
