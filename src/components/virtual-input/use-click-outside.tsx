import { useEffect } from 'react'

// 监听点击组件外部的事件
function useClickOutside(
  handler: (event: MouseEvent) => void,
  ref: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    // 在捕获阶段监听，以确保在事件被阻止传播之前触发
    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [handler, ref])
}

export default useClickOutside
