import { useTimeout } from 'ahooks'
import { CloseOutline, SoundOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { memo, useRef, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useMutationEffect } from '../../utils/use-mutation-effect'
import { useResizeEffect } from '../../utils/use-resize-effect'
import { mergeProp, mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'

const classPrefix = `adm-notice-bar`

export type NoticeBarProps = {
  /** The type of the NoticeBar */
  color?: 'default' | 'alert' | 'error' | 'info'
  /** TDelay to start scrolling, unit ms */
  delay?: number
  /** Scroll speed, unit px/s */
  speed?: number
  /** The content of the NoticeBar */
  content: ReactNode
  /** Whether it can be closed */
  closeable?: boolean
  /** Custom close icon */
  closeIcon?: ReactNode
  /** Callback when closed */
  onClose?: () => void
  /** Event when click */
  onClick?: () => void
  /** Additional operating area, displayed to the left of the close button */
  extra?: ReactNode
  /** Radio icon on the left */
  icon?: ReactNode
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
  icon: <SoundOutline />,
  wrap: false,
}

export const NoticeBar = memo<NoticeBarProps>(props => {
  const { noticeBar: componentConfig = {} } = useConfig()
  const mergedProps = mergeProps(defaultProps, componentConfig, props)
  const closeIcon = mergeProp(
    <CloseOutline className={`${classPrefix}-close-icon`} />,
    componentConfig.closeIcon,
    props.closeIcon
  )

  const containerRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const [visible, setVisible] = useState(true)

  const speed = mergedProps.speed

  const delayLockRef = useRef(true)
  const animatingRef = useRef(false)

  function start() {
    if (delayLockRef.current || mergedProps.wrap) return

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
  }, mergedProps.delay)

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
    mergedProps,
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-${mergedProps.color}`,
        {
          [`${classPrefix}-wrap`]: mergedProps.wrap,
        }
      )}
      onClick={mergedProps.onClick}
    >
      {mergedProps.icon && (
        <span className={`${classPrefix}-left`}>{mergedProps.icon}</span>
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
          {mergedProps.content}
        </span>
      </span>
      {(mergedProps.closeable || mergedProps.extra) && (
        <span className={`${classPrefix}-right`}>
          {mergedProps.extra}
          {mergedProps.closeable && (
            <div
              className={`${classPrefix}-close`}
              onClick={() => {
                setVisible(false)
                mergedProps.onClose?.()
              }}
            >
              {closeIcon}
            </div>
          )}
        </span>
      )}
    </div>
  )
})
