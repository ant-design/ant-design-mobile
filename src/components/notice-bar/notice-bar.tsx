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
  /** 通告栏的类型 */
  color?: 'default' | 'alert' | 'error' | 'info'
  /** 开始滚动的延迟，单位 ms */
  delay?: number
  /** 滚动速度，单位 px/s */
  speed?: number
  /** 公告内容 */
  content: React.ReactNode
  /** 是否可关闭 */
  closeable?: boolean
  /** 关闭时的回调 */
  onClose?: () => void
  /** 额外操作区域，显示在关闭按钮左侧 */
  extra?: React.ReactNode
  /** 左侧广播图标 */
  icon?: React.ReactNode
} & NativeProps<'--background-color' | '--border-color' | '--text-color'>

const defaultProps = {
  color: 'default',
  delay: 2000,
  speed: 50,
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
    if (delayLockRef.current) return

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

  useResizeEffect(text => {
    start()
  }, containerRef)

  useMutationEffect(
    () => {
      console.log('text mutation effect')
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
    <div className={classNames(classPrefix, `${classPrefix}-${props.color}`)}>
      <span className={`${classPrefix}-left`}>
        {'icon' in props ? props.icon : <SoundOutline />}
      </span>
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
            <CloseOutline
              onClick={() => {
                setVisible(false)
                props.onClose?.()
              }}
            />
          )}
        </span>
      )}
    </div>
  )
})
