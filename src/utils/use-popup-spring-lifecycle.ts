import { useIsomorphicLayoutEffect, useUnmountedRef } from 'ahooks'
import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * 管理弹层的 spring 显隐生命周期。
 * 页面不可见时 react-spring 的 onRest 可能不触发，本 Hook 会在页面恢复可见时补全关闭流程。
 */
export function usePopupSpringLifecycle({
  visible,
  afterShow,
  afterClose,
}: {
  visible: boolean
  afterShow?: () => void
  afterClose?: () => void
}) {
  const [active, setActive] = useState(visible)
  const unmountedRef = useUnmountedRef()
  const visibleRef = useRef(visible)
  const closedRef = useRef(!visible)
  const afterShowRef = useRef(afterShow)
  const afterCloseRef = useRef(afterClose)

  useIsomorphicLayoutEffect(() => {
    visibleRef.current = visible
    if (visible) {
      closedRef.current = false
      setActive(true)
    }
  }, [visible])

  useIsomorphicLayoutEffect(() => {
    afterShowRef.current = afterShow
    afterCloseRef.current = afterClose
  }, [afterShow, afterClose])

  const finishClose = useCallback(() => {
    if (closedRef.current) return
    closedRef.current = true
    setActive(false)
    afterCloseRef.current?.()
  }, [])

  const onRest = useCallback(() => {
    if (unmountedRef.current) return
    if (visibleRef.current) {
      afterShowRef.current?.()
    } else {
      finishClose()
    }
  }, [finishClose, unmountedRef])

  useEffect(() => {
    const handler = () => {
      if (document.visibilityState !== 'visible') return
      if (!visibleRef.current) {
        finishClose()
      }
    }
    document.addEventListener('visibilitychange', handler)
    return () => document.removeEventListener('visibilitychange', handler)
  }, [finishClose])

  return { active, onRest }
}
