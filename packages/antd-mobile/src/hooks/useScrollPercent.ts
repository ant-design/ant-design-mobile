import { useState, useRef, useEffect } from 'react'

interface ScrollPercent {
  left: number
  top: number
}
type Target = HTMLElement | Document
type Arg = Target | (() => Target) | null

function calcScrollPercent(element: any, container: any, type: string) {
  return (
    (100 * element[type === 'left' ? 'scrollLeft' : 'scrollTop']) /
    (container[type === 'left' ? 'scrollWidth' : 'scrollHeight'] -
      container[type === 'left' ? 'clientWidth' : 'clientHeight'])
  )
}

export default function(...args: [Arg] | []): [ScrollPercent, any] {
  const [scrollPercent, setScrollPercent] = useState({
    left: NaN,
    top: NaN,
  })
  const ref = useRef<Target>()

  const hasPassedInElement = args.length === 1
  const arg = args[0]

  useEffect(() => {
    const passedInElement = typeof arg === 'function' ? arg() : arg
    const element = hasPassedInElement ? passedInElement : ref.current
    if (!element) return
    function updatePosition(target: Target) {
      let newScrollPostion
      if (target === document) {
        if (!document.scrollingElement) return
        newScrollPostion = {
          left: calcScrollPercent(
            document.scrollingElement as Target,
            document,
            'left',
          ),
          top: calcScrollPercent(
            document.scrollingElement as Target,
            document,
            'top',
          ),
        }
      } else {
        newScrollPostion = {
          left: calcScrollPercent(target, ref.current, 'left'),
          top: calcScrollPercent(target, ref.current, 'top'),
        }
      }

      setScrollPercent(newScrollPostion)
    }
    updatePosition(element)
    function listener(event: Event) {
      if (!event.target) return

      updatePosition(event.target as Target)
    }
    element.addEventListener('scroll', listener)
    return () => {
      element.removeEventListener('scroll', listener)
    }
  }, [ref.current, typeof arg === 'function' ? undefined : arg])
  return [scrollPercent, ref]
}
