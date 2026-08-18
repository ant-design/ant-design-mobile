import { useIsomorphicLayoutEffect } from 'ahooks'
import { useCallback, useEffect, useRef } from 'react'

/**
 * 页面不可见时 react-spring 的 onRest 可能不触发，导致弹窗无法关闭。
 * 本 Hook 监听 visibilitychange，在页面恢复可见时补执行关闭流程。
 * finishClose 保证 onFinishClose 在每个显示周期内只执行一次。
 */
export function useSpringResumeOnVisible({
  visible,
  active,
  onFinishClose,
}: {
  visible: boolean
  active: boolean
  onFinishClose: () => void
}) {
  const closedRef = useRef(false)

  const activeRef = useRef(active)
  activeRef.current = active

  const onFinishCloseRef = useRef(onFinishClose)
  onFinishCloseRef.current = onFinishClose

  useIsomorphicLayoutEffect(() => {
    if (visible) {
      closedRef.current = false
    }
  }, [visible])

  const visibleRef = useRef(visible)
  visibleRef.current = visible

  const finishClose = useCallback(() => {
    if (closedRef.current) return
    closedRef.current = true
    onFinishCloseRef.current()
  }, [])

  useEffect(() => {
    const handler = () => {
      if (document.visibilityState !== 'visible') return
      if (!visibleRef.current && activeRef.current) {
        finishClose()
      }
    }
    document.addEventListener('visibilitychange', handler)
    return () => document.removeEventListener('visibilitychange', handler)
  }, [finishClose])

  return { finishClose }
}
