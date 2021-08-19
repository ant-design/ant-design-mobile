import React, { useState, useRef, useLayoutEffect, memo } from 'react'
import classNames from 'classnames'
import { CloseOutlined, SoundOutlined } from '@ant-design/icons'
import { usePersistFn, useUpdateLayoutEffect } from 'ahooks'
import { noop } from '../../utils/noop'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `am-notice-bar`

export interface NoticeBarProps {
  /** 通告栏的类型 */
  type?: 'default' | 'error' | 'info'
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
}

const defaultProps = {
  delay: 2000,
  speed: 50,
}

export const NoticeBar = memo(
  withDefaultProps(defaultProps)<NoticeBarProps>(props => {
    const containerRef = useRef<HTMLSpanElement>(null)
    const textRef = useRef<HTMLSpanElement>(null)
    const [key, setKey] = useState(0)
    const onClose = usePersistFn(props.onClose || noop)
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

    return (
      <div
        className={classNames(
          classPrefix,
          `${classPrefix}-${props.type || 'default'}`
        )}
      >
        <span className={`${classPrefix}-left`}>
          {'icon' in props ? props.icon : <SoundOutlined />}
        </span>
        <span ref={containerRef} className={`${classPrefix}-content`}>
          {/* INFO：暂时不做滚动阴影 */}
          {/* <span
          className={
            (containerRef.current?.offsetWidth || 0) <
            (textRef.current?.offsetWidth || 0)
              ? `${classPrefix}-shadow`
              : `${classPrefix}-no-shadow`
          }
        > */}
          <span
            onTransitionEnd={() => setKey(k => k + 1)}
            key={key}
            ref={textRef}
            className={`${classPrefix}-content-inner`}
          >
            {props.content}
          </span>
          {/* </span> */}
        </span>
        {(props.closeable || 'extra' in props) && (
          <span className={`${classPrefix}-right`}>
            {props.extra}
            {props.closeable && <CloseOutlined onClick={onClose} />}
          </span>
        )}
      </div>
    )
  })
)
