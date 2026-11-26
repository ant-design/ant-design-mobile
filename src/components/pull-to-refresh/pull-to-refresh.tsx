import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import type { ReactNode } from 'react'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { convertPx } from '../../utils/convert-px'
import { getScrollParent } from '../../utils/get-scroll-parent'
import { rubberbandIfOutOfBounds } from '../../utils/rubberband'
import { sleep } from '../../utils/sleep'
import { supportsPassive } from '../../utils/supports-passive'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'

const classPrefix = `adm-pull-to-refresh`

export type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete'

export type PullToRefreshRef = {
  startRefresh: () => void
  completeRefresh: () => void
}

export type PullToRefreshProps = {
  onRefresh?: () => Promise<any>
  pullingText?: ReactNode
  canReleaseText?: ReactNode
  refreshingText?: ReactNode
  completeText?: ReactNode
  completeDelay?: number
  headHeight?: number
  threshold?: number
  disabled?: boolean
  renderText?: (status: PullStatus) => ReactNode
  children?: ReactNode
}

export const defaultProps = {
  pullingText: '下拉刷新',
  canReleaseText: '释放立即刷新',
  refreshingText: '加载中...',
  completeText: '刷新成功',
  completeDelay: 500,
  disabled: false,
  onRefresh: () => {},
}

export const PullToRefresh = forwardRef<PullToRefreshRef, PullToRefreshProps>(
  (p, ref) => {
    const { locale } = useConfig()
    const props = mergeProps(
      defaultProps,
      {
        refreshingText: `${locale.common.loading}...`,
        pullingText: locale.PullToRefresh.pulling,
        canReleaseText: locale.PullToRefresh.canRelease,
        completeText: locale.PullToRefresh.complete,
      },
      p
    )
    const headHeight = props.headHeight ?? convertPx(40)
    const threshold = props.threshold ?? convertPx(60)

    const [status, setStatus] = useState<PullStatus>('pulling')

    const statusRef = useRef<PullStatus>(status)

    const setStatusWithRef = (next: PullStatus) => {
      statusRef.current = next
      setStatus(next)
    }

    const [springStyles, api] = useSpring(() => ({
      from: { height: 0 },
      config: {
        tension: 300,
        friction: 30,
        round: true,
        clamp: true,
      },
    }))

    const elementRef = useRef<HTMLDivElement>(null)

    const pullingRef = useRef(false)

    //防止下拉时抖动
    useEffect(() => {
      const noop = () => {}
      const element = elementRef.current
      element?.addEventListener('touchmove', noop)
      return () => {
        element?.removeEventListener('touchmove', noop)
      }
    }, [])

    const reset = () => {
      return new Promise<void>(resolve => {
        api.start({
          to: {
            height: 0,
          },
          onResolve() {
            setStatusWithRef('pulling')
            resolve()
          },
        })
      })
    }

    async function doRefresh() {
      if (props.disabled) return
      const current = statusRef.current
      if (current !== 'pulling' && current !== 'canRelease') return
      api.start({ height: headHeight })
      setStatusWithRef('refreshing')
      try {
        await props.onRefresh()
      } catch (e) {
        if (statusRef.current === 'refreshing') {
          reset()
        }
        throw e
      }
      if (statusRef.current === 'refreshing') {
        await doCompleteRefresh()
      }
    }

    async function doCompleteRefresh() {
      if (statusRef.current !== 'refreshing') return
      setStatusWithRef('complete')
      if (props.completeDelay > 0) {
        await sleep(props.completeDelay)
      }
      await reset()
    }

    const doRefreshRef = useRef(doRefresh)
    doRefreshRef.current = doRefresh
    const doCompleteRefreshRef = useRef(doCompleteRefresh)
    doCompleteRefreshRef.current = doCompleteRefresh

    useImperativeHandle(
      ref,
      () => ({
        startRefresh: () => {
          doRefreshRef.current().catch(() => {})
        },
        completeRefresh: () => {
          doCompleteRefreshRef.current()
        },
      }),
      []
    )

    useDrag(
      state => {
        if (status === 'refreshing' || status === 'complete') return

        const { event } = state

        if (state.last) {
          pullingRef.current = false
          if (status === 'canRelease') {
            doRefresh().catch(() => {})
          } else {
            api.start({ height: 0 })
          }
          return
        }

        const [, y] = state.movement
        const parsedY = Math.ceil(y)

        if (state.first && parsedY > 0) {
          const target = state.event.target
          if (!target || !(target instanceof Element)) return
          let scrollParent = getScrollParent(target)
          while (true) {
            if (!scrollParent) return
            const scrollTop = getScrollTop(scrollParent)
            if (scrollTop > 0) {
              return
            }
            if (scrollParent instanceof Window) {
              break
            }
            scrollParent = getScrollParent(scrollParent.parentNode as Element)
          }
          pullingRef.current = true
          function getScrollTop(element: Window | Element) {
            return 'scrollTop' in element ? element.scrollTop : element.scrollY
          }
        }

        if (!pullingRef.current) return

        if (event.cancelable) {
          event.preventDefault()
        }
        event.stopPropagation()
        const height = Math.max(
          rubberbandIfOutOfBounds(parsedY, 0, 0, headHeight * 5, 0.5),
          0
        )
        api.start({ height })
        setStatus(height > threshold ? 'canRelease' : 'pulling')
      },
      {
        pointer: { touch: true },
        axis: 'y',
        target: elementRef,
        enabled: !props.disabled,
        eventOptions: supportsPassive ? { passive: false } : undefined,
      }
    )

    const renderStatusText = () => {
      if (props.renderText) {
        return props.renderText?.(status)
      }

      if (status === 'pulling') return props.pullingText
      if (status === 'canRelease') return props.canReleaseText
      if (status === 'refreshing') return props.refreshingText
      if (status === 'complete') return props.completeText
    }

    return (
      <animated.div ref={elementRef} className={classPrefix}>
        <animated.div style={springStyles} className={`${classPrefix}-head`}>
          <div
            className={`${classPrefix}-head-content`}
            style={{ height: headHeight }}
          >
            {renderStatusText()}
          </div>
        </animated.div>
        <div className={`${classPrefix}-content`}>{props.children}</div>
      </animated.div>
    )
  }
)
