import { mergeProps } from '../../utils/with-default-props'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useLockFn, useThrottleFn } from 'ahooks'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { getScrollParent } from '../../utils/get-scroll-parent'
import { useConfig } from '../config-provider'
import DotLoading from '../dot-loading'

function isWindow(element: any | Window): element is Window {
  return element === window
}

const classPrefix = `adm-infinite-scroll`

export type InfiniteScrollProps = {
  loadMore: (isRetry: boolean) => Promise<void>
  hasMore: boolean
  threshold?: number
  children?:
    | React.ReactNode
    | ((
        hasMore: boolean,
        failed: boolean,
        retry: () => void
      ) => React.ReactNode)
} & NativeProps

const defaultProps: Required<
  Pick<InfiniteScrollProps, 'threshold' | 'children'>
> = {
  threshold: 250,
  children: (hasMore: boolean, failed: boolean, retry: () => void) => (
    <InfiniteScrollContent hasMore={hasMore} failed={failed} retry={retry} />
  ),
}

export const InfiniteScroll: FC<InfiniteScrollProps> = p => {
  const props = mergeProps(defaultProps, p)

  const [failed, setFailed] = useState(false)
  const doLoadMore = useLockFn(async (isRetry: boolean) => {
    try {
      await props.loadMore(isRetry)
    } catch (e) {
      setFailed(true)
      throw e
    }
  })

  const elementRef = useRef<HTMLDivElement>(null)

  // Prevent duplicated trigger of `check` function
  const [flag, setFlag] = useState({})
  const nextFlagRef = useRef(flag)

  const [scrollParent, setScrollParent] = useState<
    Window | Element | null | undefined
  >()

  const { run: check } = useThrottleFn(
    async () => {
      if (nextFlagRef.current !== flag) return
      if (!props.hasMore) return
      const element = elementRef.current
      if (!element) return
      if (!element.offsetParent) return
      const parent = getScrollParent(element)
      setScrollParent(parent)
      if (!parent) return
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top
      const current = isWindow(parent)
        ? window.innerHeight
        : parent.getBoundingClientRect().bottom
      if (current >= elementTop - props.threshold) {
        const nextFlag = {}
        nextFlagRef.current = nextFlag
        await doLoadMore(false)
        setFlag(nextFlag)
      }
    },
    {
      wait: 100,
      leading: true,
      trailing: true,
    }
  )

  // Make sure to trigger `loadMore` when content changes
  useEffect(() => {
    check()
  })

  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    if (!scrollParent) return
    function onScroll() {
      check()
    }
    scrollParent.addEventListener('scroll', onScroll)
    return () => {
      scrollParent.removeEventListener('scroll', onScroll)
    }
  }, [scrollParent])

  async function retry() {
    setFailed(false)
    await doLoadMore(true)
    setFlag(nextFlagRef.current)
  }

  return withNativeProps(
    props,
    <div className={classPrefix} ref={elementRef}>
      {typeof props.children === 'function'
        ? props.children(props.hasMore, failed, retry)
        : props.children}
    </div>
  )
}

const InfiniteScrollContent: FC<{
  hasMore: boolean
  failed: boolean
  retry: () => void
}> = props => {
  const { locale } = useConfig()

  if (!props.hasMore) {
    return <span>{locale.InfiniteScroll.noMore}</span>
  }

  if (props.failed) {
    return (
      <span>
        <span className={`${classPrefix}-failed-text`}>
          {locale.InfiniteScroll.failedToLoad}
        </span>
        <a
          onClick={() => {
            props.retry()
          }}
        >
          {locale.InfiniteScroll.retry}
        </a>
      </span>
    )
  }

  return (
    <>
      <span>{locale.common.loading}</span>
      <DotLoading />
    </>
  )
}
