import React, { useRef, useEffect } from 'react'
import type { FC, RefObject } from 'react'
import classNames from 'classnames'
import { animated, useSpring } from '@react-spring/web'
import { useThrottleFn } from 'ahooks'

const classPrefix = `adm-scroll-mask`

export interface ScrollMaskProps {
  scrollTrackRef: RefObject<HTMLElement>
}

export const ScrollMask: FC<ScrollMaskProps> = props => {
  const maskRef = useRef<HTMLDivElement>(null)

  const [{ leftMaskOpacity, rightMaskOpacity }, api] = useSpring(() => ({
    leftMaskOpacity: 0,
    rightMaskOpacity: 0,
    config: {
      clamp: true,
    },
  }))

  const { run: updateMask } = useThrottleFn(
    (immediate = false) => {
      const mask = maskRef.current
      if (!mask) return
      const scrollEl = props.scrollTrackRef.current
      if (!scrollEl) return

      const { scrollLeft } = scrollEl
      const showLeftMask = scrollLeft > 0
      const showRightMask =
        scrollLeft + scrollEl.offsetWidth < scrollEl.scrollWidth

      api.start({
        leftMaskOpacity: showLeftMask ? 1 : 0,
        rightMaskOpacity: showRightMask ? 1 : 0,
        immediate,
      })
    },
    {
      wait: 100,
      trailing: true,
      leading: true,
    }
  )

  useEffect(() => {
    updateMask(true)
  }, [])

  useEffect(() => {
    const scrollEl = props.scrollTrackRef.current
    if (!scrollEl) return

    scrollEl.addEventListener('scroll', updateMask)
    return () => scrollEl.removeEventListener('scroll', updateMask)
  }, [])

  return (
    <>
      <animated.div
        ref={maskRef}
        className={classNames(classPrefix, `${classPrefix}-left`)}
        style={{
          opacity: leftMaskOpacity,
        }}
      />
      <animated.div
        className={classNames(classPrefix, `${classPrefix}-right`)}
        style={{
          opacity: rightMaskOpacity,
        }}
      />
    </>
  )
}
