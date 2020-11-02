import * as React from 'react'

// 修复中文输入法 onChange 的问题
const useCompositionChange = (value: string, onChange: (v: string) => void) => {
  const [cpValue, setCpValue] = React.useState<any>(null)
  const cpLock = React.useRef(false)

  const handleChange = (v: string, forceChange = false) => {
    if (cpLock.current && !forceChange) {
      // 临时值锁
      setCpValue(v)
      return
    }

    // 没有 lock 的时候，清除临时值
    cpValue !== null && setCpValue(null)

    onChange(v)
  }

  return {
    value: cpValue || value,
    onComposition: (e: any) => {
      if (e.type === 'compositionend' && cpLock.current) {
        const v = e.target.value
        // hack safari 可能会触发两次 end, 所以需要在 lock 的时候才强制触发 change
        // hack chrome 的 onChange 先于 onCompositionEnd 触发，这里需要补充一次
        handleChange(v, true)
        cpLock.current = false
      } else {
        cpLock.current = true
      }
    },
    onChange: (v: string) => {
      return handleChange(v)
    },
  }
}

export default useCompositionChange
