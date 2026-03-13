import { useEvent } from 'rc-util'
import { useEffect } from 'react'

// 监听点击组件外部的事件
function useClickOutside(
  handler: (event: MouseEvent) => void,
  ref: React.RefObject<HTMLElement>,
  hasKeyboardProps = false
) {
  const stableHandler = useEvent(handler)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      stableHandler(event) // 使用 ref 中的 handler
    }
    // 向前兼容逻辑：
    // 1. 对于有键盘属性的 VirtualInput，在捕获阶段监听：
    //      这是为了确保在事件被阻止传播之前触发。比如输入框中的单个数字 click 事件会 stopPropagation, 但这里依然能捕获到
    // 2. 对于无键盘属性的 VirtualInput 组件，在冒泡阶段监听：
    //      这种情况通常是 VirtualInput + NumberKeyboard 为兄弟关系，在以前版本中点击 NumberKeyboard **不会**触发 VirtualInput 的 blur 事件
    //      原先原理：通过 NumberKeyboard 内部 onMouseDown 时 preventDefault 阻止的 VirtualInput 内原生的 blur 事件
    //      新的原理：NumberKeyboard 的 Popup 默认会 stopPropagation click, 这里在冒泡阶段监听不到，不会调用 VirtualInput 的 onBlur 回调（非原生事件）。

    // 安卓长按 native input 时不会触发 click 事件，通过监听 focusin 补充处理：
    // 长按后系统键盘弹出，native input 获得焦点并冒泡 focusin 到 document，以此触发 blur
    function handleFocusIn(event: FocusEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      stableHandler(event as unknown as MouseEvent)
    }

    document.addEventListener('click', handleClick, hasKeyboardProps)
    document.addEventListener('focusin', handleFocusIn)
    return () => {
      document.removeEventListener('click', handleClick, hasKeyboardProps)
      document.removeEventListener('focusin', handleFocusIn)
    }
  }, [ref]) // 只依赖 ref，不依赖 handler
}

export default useClickOutside
