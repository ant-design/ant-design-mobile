import React, { useState, useRef, memo } from 'react'
import classNames from 'classnames'
import { CloseOutline, SoundOutline } from 'antd-mobile-icons'
import { useTimeout } from 'ahooks'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useResizeEffect } from '../../utils/use-resize-effect'
import { useMutationEffect } from '../../utils/use-mutation-effect'

const classPrefix = `adm-notice-bar`

export type NoticeBarProps = {
  /** The type of the NoticeBar */
  color?: 'default' | 'alert' | 'error' | 'info'
  /** TDelay to start scrolling, unit ms */
  delay?: number
  /** Scroll speed, unit px/s */
  speed?: number
  /** The content of the NoticeBar */
  content: React.ReactNode
  /** Whether it can be closed */
  closeable?: boolean
  /** Callback when closed */
  onClose?: () => void
  /** Event when click */
  onClick?: () => void
  /** Additional operating area, displayed to the left of the close button */
  extra?: React.ReactNode
  /** Radio icon on the left */
  icon?: React.ReactNode
  /** Whether to display multiple lines */
  wrap?: boolean
} & NativeProps<
  | '--background-color'
  | '--border-color'
  | '--text-color'
  | '--font-size'
  | '--icon-font-size'
  | '--height'
>

const defaultProps = {
  color: 'default',
  delay: 2000,
  speed: 50,
  wrap: false,
  icon: <SoundOutline />,
}

export const NoticeBar = memo<NoticeBarProps>(p => {
  const props = mergeProps(defaultProps, p)

  const containerRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const [visible, setVisible] = useState(true)

  const speed = props.speed

  const delayLockRef = useRef(true)
  const animatingRef = useRef(false)

  function start() {
    if (delayLockRef.current || props.wrap) return

    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) return

    if (container.offsetWidth >= text.offsetWidth) {
      animatingRef.current = false
      text.style.removeProperty('transition-duration')
      text.style.removeProperty('transform')
      return
    }

    if (animatingRef.current) return

    const initial = !text.style.transform
    text.style.transitionDuration = '0s'
    if (initial) {
      text.style.transform = 'translateX(0)'
    } else {
      text.style.transform = `translateX(${container.offsetWidth}px)`
    }
    const distance = initial
      ? text.offsetWidth
      : container.offsetWidth + text.offsetWidth
    animatingRef.current = true
    text.style.transitionDuration = `${Math.round(distance / speed)}s`
    text.style.transform = `translateX(-${text.offsetWidth}px)`
  }

  useTimeout(() => {
    delayLockRef.current = false
    start()
  }, props.delay)

  useResizeEffect(() => {
    start()
  }, containerRef)

  useMutationEffect(
    () => {
      start()
    },
    textRef,
    {
      subtree: true,
      childList: true,
      characterData: true,
    }
  )

  if (!visible) return null

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, `${classPrefix}-${props.color}`, {
        [`${classPrefix}-wrap`]: props.wrap,
      })}
      onClick={props.onClick}
    >
      {props.icon && (
        <span className={`${classPrefix}-left`}>{props.icon}</span>
      )}
      <span ref={containerRef} className={`${classPrefix}-content`}>
        <span
          onTransitionEnd={() => {
            animatingRef.current = false
            start()
          }}
          ref={textRef}
          className={`${classPrefix}-content-inner`}
        >
          {props.content}
        </span>
      </span>
      {(props.closeable || props.extra) && (
        <span className={`${classPrefix}-right`}>
          {props.extra}
          {props.closeable && (
            <div
              className={`${classPrefix}-close`}
              onClick={() => {
                setVisible(false)
                props.onClose?.()
              }}
            >
              <CloseOutline className={`${classPrefix}-close-icon`} />
            </div>
          )}
        </span>
      )}
    </div>
  )
})
