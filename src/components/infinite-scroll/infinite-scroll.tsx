import { mergeProps } from '../../utils/with-default-props'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useLockFn, useMemoizedFn } from 'ahooks'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { getScrollParent } from '../../utils/get-scroll-parent'
import { useConfig } from '../config-provider'
import DotLoading from '../dot-loading'

function isWindow(element: any | Window): element is Window {
  return element === window
}

const classPrefix = `adm-infinite-scroll`

export type InfiniteScrollProps = {
  loadMore: () => Promise<void>
  hasMore: boolean
  threshold?: number
  children?: React.ReactNode
} & NativeProps

const InfiniteScrollContent = ({ hasMore }: { hasMore: boolean }) => {
  const { locale } = useConfig()

  return (
    <>
      {hasMore ? (
        <>
          <span>{locale.common.loading}</span>
          <DotLoading />
        </>
      ) : (
        <span>{locale.InfiniteScroll.noMore}</span>
      )}
    </>
  )
}

export const InfiniteScroll: FC<InfiniteScrollProps> = p => {
  const props = mergeProps({ threshold: 250 }, p)
  const doLoadMore = useLockFn(() => props.loadMore())

  const elementRef = useRef<HTMLDivElement>(null)
  const [flag, setFlag] = useState({})
  const nextFlagRef = useRef(flag)

  const check = useMemoizedFn(async () => {
    if (nextFlagRef.current !== flag) return
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
      const nextFlag = {}
      nextFlagRef.current = nextFlag
      await doLoadMore()
      setFlag(nextFlag)
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

  return withNativeProps(
    props,
    <div className={classPrefix} ref={elementRef}>
      {props.children && props.children}
      {!props.children && <InfiniteScrollContent hasMore={props.hasMore} />}
    </div>
  )
}
