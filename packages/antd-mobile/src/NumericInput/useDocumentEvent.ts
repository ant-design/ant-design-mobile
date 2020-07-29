import { useEffect, useRef } from 'react'

export default function useDocumentEvent(blur: () => void, focus: boolean) {
  const blurMem = useRef<any>(null)
  useEffect(() => {
    // 非 focus 状态的时候，把监听事件移除，不再需要
    if (!focus) {
      document.removeEventListener('touchend', blurMem.current, false)
      document.removeEventListener('mouseup', blurMem.current, false)
      return
    }
    // 当 blur 变更的时候，先把以前的事件取消在重新绑定
    // 这里 focus 变动也重新绑定吧，因为不能区分是因为 blur 还是 focus 变动
    if (blurMem.current) {
      document.removeEventListener('touchend', blurMem.current, false)
      document.removeEventListener('mouseup', blurMem.current, false)
    }
    blurMem.current = blur
    document.addEventListener('touchend', blurMem.current, false)
    document.addEventListener('mouseup', blurMem.current, false)

    // 组件销毁时移除事件
    return () => {
      document.removeEventListener('touchend', blurMem.current, false)
      document.removeEventListener('mouseup', blurMem.current, false)
    }
  }, [blur, focus])
}
