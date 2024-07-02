import type { Dayjs } from 'dayjs'
import { useEvent } from 'rc-util'
import { useEffect, useRef } from 'react'

export default function useSyncScroll(
  current: Dayjs,
  visible: boolean,
  bodyRef: React.RefObject<HTMLDivElement>
) {
  const rafRef = useRef<number>()

  const clean = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
  }

  const scrollTo = useEvent((date: Dayjs) => {
    clean()

    rafRef.current = requestAnimationFrame(() => {
      if (bodyRef.current) {
        const yearMonth = date.format('YYYY-M')
        const target = bodyRef.current.querySelector(
          `[data-year-month="${yearMonth}"]`
        )

        if (target) {
          // Scroll to the top of view

          target.scrollIntoView({
            block: 'start',
            inline: 'nearest',
          })
        }
      }
    })
  })

  useEffect(() => {
    if (visible && current) {
      scrollTo(current)

      return clean
    }
  }, [current, visible])

  return scrollTo
}
