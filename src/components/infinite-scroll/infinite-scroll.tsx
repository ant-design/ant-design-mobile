import { mergeProps } from '../../utils/with-default-props'
import React, { FC, useEffect, useRef } from 'react'
import { useLockFn, usePersistFn } from 'ahooks'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { getScrollParent } from '../../utils/get-scroll-parent'
import Loading from '../loading'

function isWindow(element: any | Window): element is Window {
  return element === window
}

const classPrefix = `adm-infinite-scroll`

export type InfiniteScrollProps = {
  loadMore: () => Promise<void>
  hasMore: boolean
  threshold?: number
} & NativeProps

const InfiniteScrollContent = ({ hasMore }: { hasMore: boolean }) => {
  return (
    <>
      {hasMore ? (
        <>
          <span>加载中</span>
          <Loading />
        </>
      ) : (
        <span>没有更多了</span>
      )}
    </>
  )
}

export const InfiniteScroll: FC<InfiniteScrollProps> = p => {
  const props = mergeProps({ threshold: 250 }, p)
  const doLoadMore = useLockFn(() => props.loadMore())

  const elementRef = useRef<HTMLDivElement>(null)

  const checkTimeoutRef = useRef<number>()
  const check = usePersistFn(() => {
    window.clearTimeout(checkTimeoutRef.current)
    checkTimeoutRef.current = window.setTimeout(() => {
      if (!props.hasMore) return
      const element = elementRef.current
      if (!element) return
      if (!element.offsetParent) return
      const parent = getScrollParent(element)
      if (!parent) return
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top
      const current = isWindow(parent)
        ? window.innerHeight
        : parent.getBoundingClientRect().bottom
      if (current >= elementTop - props.threshold) {
        doLoadMore()
      }
    })
  })

  // 确保在内容不足时会自动触发加载事件
  useEffect(() => {
    check()
  })

  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    const parent = getScrollParent(element)
    if (!parent) return
    function onScroll() {
      check()
    }
    parent.addEventListener('scroll', onScroll)
    return () => {
      parent.removeEventListener('scroll', onScroll)
    }
  }, [])

  return withNativeProps(
    props,
    <div className={classPrefix} ref={elementRef}>
      {props.children && props.children}
      {!props.children && <InfiniteScrollContent hasMore={props.hasMore} />}
    </div>
  )
}
