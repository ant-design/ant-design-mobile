import { withDefaultProps } from '../../utils/with-default-props'
import React, { useEffect, useRef } from 'react'
import { useLockFn, usePersistFn } from 'ahooks'
import { ElementProps, withElementProps } from '../../utils/element-props'
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
} & ElementProps

const InfiniteScrollContent = ({ hasMore }: { hasMore: boolean }) => {
  return (
    <>
      {hasMore ? (
        <>
          <span>加载中</span>
          <Loading size='small' />
        </>
      ) : (
        <span>没有更多了</span>
      )}
    </>
  )
}
export const InfiniteScroll = withDefaultProps({
  threshold: 250,
})<InfiniteScrollProps>(props => {
  const doLoadMore = useLockFn(async () => {
    await props.loadMore()
  })

  const elementRef = useRef<HTMLDivElement>(null)

  const check = usePersistFn(() => {
    if (!props.hasMore) return
    const element = elementRef.current
    if (!element) return
    const parent = getScrollParent(element)
    if (!parent) return
    const elementTop = element.getBoundingClientRect().top
    const current = isWindow(parent)
      ? window.innerHeight
      : parent.getBoundingClientRect().bottom
    if (current >= elementTop - props.threshold) {
      doLoadMore()
    }
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

  return withElementProps(
    props,
    <div className={classPrefix} ref={elementRef}>
      {props.children && props.children}
      {!props.children && <InfiniteScrollContent hasMore={props.hasMore} />}
    </div>
  )
})
