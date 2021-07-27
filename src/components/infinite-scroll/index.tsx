import {withDefaultProps} from '../../utils/with-default-props'
import React, {useEffect, useRef} from 'react'
import {useLockFn, usePersistFn} from 'ahooks'
import classNames from 'classnames'
import {ElementProps} from '../../utils/element-props'
import {getScrollParent} from '../../utils/get-scroll-parent'
import Loading from '../loading'

function isWindow(element: any | Window): element is Window {
  return element === window
}

const classPrefix = `am-infinite-scroll`

export type InfiniteScrollProps = {
  loadMore: () => Promise<void>
  hasMore: boolean
  threshold?: number
} & ElementProps

const InfiniteScrollContent = ({hasMore}: {hasMore: boolean}) => {
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
const InfiniteScroll = withDefaultProps({
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
  const childs = React.Children.toArray(props.children)
  const hasChilds = childs.length > 0

  return (
    <div
      className={classNames(classPrefix, props.className)}
      style={props.style}
      ref={elementRef}
    >
      {hasChilds &&
        childs.map(child => {
          if (!React.isValidElement(child)) return
          return React.cloneElement(child, {
            ...child.props,
            hasMore: props.hasMore,
          })
        })}
      {!hasChilds && <InfiniteScrollContent hasMore={props.hasMore} />}
    </div>
  )
})

export default InfiniteScroll
