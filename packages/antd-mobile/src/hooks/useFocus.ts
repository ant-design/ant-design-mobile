/**
 * 在有清除图标的输入框中，需要将 focus 的状态共享出来
 *
 * showClear = focus && value
 */

import * as React from 'react'

const useFocus = <T extends any>(
  value: T,
  props: {
    onFocus?: (v: T) => void
    onBlur?: (v: T) => void
  },
) => {
  const tRef = React.useRef<ReturnType<typeof setTimeout>>()
  const [focus, setFocus] = React.useState(false)

  const clear = () => {
    if (tRef.current) {
      clearTimeout(tRef.current)
    }
  }

  React.useEffect(() => {
    return clear
  }, [])

  function isTouchScreen() {
    return 'ontouchstart' in window
  }

  const handleFocus = () => {
    if (!focus) {
      setFocus(true)
      props.onFocus?.(value)
    }
  }

  const handleBlur = () => {
    if (focus) {
      setFocus(false)
      props.onBlur?.(value)
    }
  }

  return {
    focus,
    onFocus: () => {
      clear()
      handleFocus()
    },
    onBlur: () => {
      // hack, 仅在 pc 的时候
      // 可能是 Touchable pc 实现有问题
      if (!isTouchScreen()) {
        tRef.current = setTimeout(() => {
          handleBlur()
        }, 200)
      } else {
        handleBlur()
      }
    },
  }
}

export default useFocus
