import * as React from 'react'

let supportsPassive = false
try {
  const opts = Object.defineProperty({}, 'passive', {
    get() {
      supportsPassive = true
    },
  })
  window.addEventListener('test', null as any, opts)
} catch (e) {
  // empty
}
const willPreventDefault = supportsPassive ? { passive: false } : false

const PassiveNode = React.forwardRef<
  any,
  {
    className: string
    onTouchStart: any
    onTouchMove: any
    onTouchEnd: any
    children: any
  }
>((props, ref) => {
  const { onTouchStart, onTouchMove, onTouchEnd, ...rest } = props
  const preEvents = React.useRef<any>({
    touchstart: () => null,
    touchmove: () => null,
    touchend: () => null,
    touchcancel: () => null,
  })

  React.useEffect(() => {
    // 简单起见，在绑定之前全部先解绑，不单独针对有变化的 event 做处理
    Object.keys(preEvents.current).forEach(key => {
      el.current?.removeEventListener(key, preEvents.current[key])
    })

    preEvents.current = {
      touchstart: onTouchStart,
      touchmove: onTouchMove,
      touchend: onTouchEnd,
      touchcancel: onTouchEnd,
    }

    Object.keys(preEvents.current).forEach(key => {
      el.current?.addEventListener(
        key,
        preEvents.current[key],
        willPreventDefault,
      )
    })

    return () => {
      Object.keys(preEvents.current).forEach(key => {
        el.current?.removeEventListener(key, preEvents.current[key])
      })
    }
  }, [onTouchStart, onTouchMove, onTouchEnd])

  const el = !ref ? React.createRef<HTMLDivElement>() : (ref as any)

  return <div ref={el} {...rest} />
})

export default PassiveNode
