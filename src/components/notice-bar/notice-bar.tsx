import React, { useState, useRef, useLayoutEffect, memo } from 'react'
import classNames from 'classnames'
import { CloseOutlined, SoundOutlined } from '@ant-design/icons'
import { useUpdateLayoutEffect } from 'ahooks'
import { mergeProps } from '../../utils/with-default-props'
import { ElementProps, withElementProps } from '../../utils/element-props'

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
} & ElementProps<'--background-color' | '--border-color' | '--text-color'>

const defaultProps = {
  color: 'default',
  delay: 2000,
  speed: 50,
}

export const NoticeBar = memo<NoticeBarProps>(p => {
  const props = mergeProps(defaultProps, p)

  const containerRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [key, setKey] = useState(0)

  const [visible, setVisible] = useState(true)

  const speed = props.speed

  useLayoutEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) return
    if (container.offsetWidth >= text.offsetWidth) return
    // 需要滚动
    const timeout = window.setTimeout(() => {
      const text = textRef.current
      // 开始滚动
      if (text) {
        text.style.transitionDuration = `${Math.round(
          text.offsetWidth / speed
        )}s`
        text.style.transform = `translateX(-${text.offsetWidth}px)`
      }
    }, props.delay)
    return () => {
      window.clearTimeout(timeout)
    }
  }, [])

  useUpdateLayoutEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) return
    if (container.offsetWidth >= text.offsetWidth) return
    text.style.transform = `translateX(${container.offsetWidth}px)`
    text.style.transitionDuration = `${Math.round(
      (container.offsetWidth + text.offsetWidth) / speed
    )}s`
    text.style.transform = `translateX(-${text.offsetWidth}px)`
  }, [key])

  if (!visible) return null

  return withElementProps(
    props,
    <div className={classNames(classPrefix, `adm-notice-bar-${props.color}`)}>
      <span className={`adm-notice-bar-left`}>
        {'icon' in props ? props.icon : <SoundOutlined />}
      </span>
      <span ref={containerRef} className={`adm-notice-bar-content`}>
        <span
          onTransitionEnd={() => setKey(k => k + 1)}
          key={key}
          ref={textRef}
          className={`adm-notice-bar-content-inner`}
        >
          {props.content}
        </span>
      </span>
      {(props.closeable || props.extra) && (
        <span className={`adm-notice-bar-right`}>
          {props.extra}
          {props.closeable && (
            <CloseOutlined
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
