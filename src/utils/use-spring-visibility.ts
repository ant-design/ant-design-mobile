import { useIsomorphicLayoutEffect } from 'ahooks'
import type { RefObject } from 'react'
import { useCallback, useEffect, useRef } from 'react'

export function useSpringVisibility({
  visible,
  active,
  setActive,
  afterClose,
  unmountedRef,
}: {
  visible: boolean
  active: boolean
  setActive: (value: boolean) => void
  afterClose?: () => void
  unmountedRef: RefObject<boolean>
}) {
  const closedRef = useRef(false)
  const afterCloseRef = useRef(afterClose)
  afterCloseRef.current = afterClose
  const activeRef = useRef(active)
  activeRef.current = active

  // Reset closedRef when a new show cycle begins
  useIsomorphicLayoutEffect(() => {
    if (visible) {
      closedRef.current = false
    }
  }, [visible])

  const visibleRef = useRef(visible)
  visibleRef.current = visible

  useEffect(() => {
    const handler = () => {
      if (document.visibilityState !== 'visible') return
      if (unmountedRef.current) return
      if (!visibleRef.current && activeRef.current && !closedRef.current) {
        closedRef.current = true
        setActive(false)
        afterCloseRef.current?.()
      }
    }
    document.addEventListener('visibilitychange', handler)
    return () => document.removeEventListener('visibilitychange', handler)
  }, [setActive, unmountedRef])

  const shouldCallAfterClose = useCallback((): boolean => {
    if (closedRef.current) return false
    closedRef.current = true
    return true
  }, [])

  return { shouldCallAfterClose }
}
