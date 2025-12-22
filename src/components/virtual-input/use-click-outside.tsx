import { useEffect } from 'react'

// 监听点击组件外部的事件
function useClickOutside(
  handler: (event: MouseEvent) => void,
  ref: React.RefObject<HTMLElement>,
  hasKeyboardProps: boolean = false
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    // 向前兼容逻辑：
    // 1. 对于有键盘属性的 VirtualInput，在捕获阶段监听：
    //      这是为了确保在事件被阻止传播之前触发。比如输入框中的单个数字 click 事件会 stopPropagation，但这里依然能捕获到
    // 2. 对于无键盘属性的 VirtualInput 组件，在冒泡阶段监听：
    //      这种情况通常是 VirtualInput + NumberKeyboard 为兄弟关系，在以前版本中点击 NumberKeyboard **不会**触发 VirtualInput 的 blur 事件
    //      原先是通过 NumberKeyboard 内部 onMouseDown 时 preventDefault 阻止的，这里在冒泡阶段监听可以与以前保持一致。
    document.addEventListener(
      'click',
      handleClick,
      hasKeyboardProps ? true : false
    )

    return () => {
      document.removeEventListener(
        'click',
        handleClick,
        hasKeyboardProps ? true : false
      )
    }
  }, [handler, ref])
}

export default useClickOutside
