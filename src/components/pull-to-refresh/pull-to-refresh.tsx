import { mergeProps } from '../../utils/with-default-props'
import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { getScrollParent } from '../../utils/get-scroll-parent'
import React, { FC, ReactNode, useRef, useState } from 'react'
import { supportsPassive } from '../../utils/supports-passive'
import { convertPx } from '../../utils/convert-px'
import { rubberbandIfOutOfBounds } from '../../utils/rubberband'
import { sleep } from '../../utils/sleep'

const classPrefix = `adm-pull-to-refresh`

export type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete'

export type PullToRefreshProps = {
  onRefresh?: () => Promise<any>
  pullingText?: ReactNode
  canReleaseText?: ReactNode
  refreshingText?: ReactNode
  completeText?: ReactNode
  completeDelay?: number
  headHeight?: number
  threshold?: number
  renderText?: (status: PullStatus) => ReactNode
}

export const defaultProps = {
  pullingText: '下拉刷新',
  canReleaseText: '释放立即刷新',
  refreshingText: '加载中……',
  completeText: '刷新成功',
  completeDelay: 500,
  onRefresh: () => {},
}

export const PullToRefresh: FC<PullToRefreshProps> = p => {
  const props = mergeProps(defaultProps, p)
  const headHeight = props.headHeight ?? convertPx(40)
  const threshold = props.threshold ?? convertPx(60)

  const [status, setStatus] = useState<PullStatus>('pulling')

  const [springStyles, api] = useSpring(() => ({
    from: { height: 0 },
    config: {
      tension: 300,
      friction: 30,
      clamp: true,
    },
  }))

  const elementRef = useRef<HTMLDivElement>(null)

  const pullingRef = useRef(false)

  async function doRefresh() {
    api.start({ height: headHeight })
    setStatus('refreshing')
    try {
      await props.onRefresh()
      setStatus('complete')
    } catch (e) {
      setStatus('pulling')
      throw e
    }
    if (props.completeDelay > 0) {
      await sleep(props.completeDelay)
    }
    api.start({
      to: async next => {
        await next({ height: 0 })
        await next({ height: 0 })
        setStatus('pulling')
      },
    })
  }

  useDrag(
    state => {
      if (status === 'refreshing' || status === 'complete') return

      const { event } = state

      if (state.last) {
        pullingRef.current = false
        if (status === 'canRelease') {
          doRefresh()
        } else {
          api.start({ height: 0 })
        }
        return
      }

      const [, y] = state.movement
      if (state.first) {
        const element = elementRef.current
        if (!element) return
        const scrollParent = getScrollParent(element)
        if (!scrollParent) return
        const top =
          'scrollTop' in scrollParent
            ? scrollParent.scrollTop
            : scrollParent.pageYOffset
        if (top <= 0 && y > 0) {
          pullingRef.current = true
        }
      }

      if (!pullingRef.current) return

      if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault()
      }
      event.stopPropagation()
      const height = Math.max(
        rubberbandIfOutOfBounds(y, 0, 0, headHeight * 5, 0.5),
        0
      )
      api.start({ height })
      setStatus(height > threshold ? 'canRelease' : 'pulling')
    },
    {
      pointer: { touch: true },
      axis: 'y',
      target: elementRef,
      eventOptions: supportsPassive ? { passive: false } : false,
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
