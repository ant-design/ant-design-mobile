import { withDefaultProps } from '../../utils/with-default-props'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import { getScrollParent } from '../../utils/get-scroll-parent'
import React, { useRef, ReactNode, useState } from 'react'
import { supportsPassive } from '../../utils/supports-passive'
import { convertPx } from '../../utils/convert-px'
import { rubberbandIfOutOfBounds } from '../../utils/rubberband'
import { sleep } from '../../utils/sleep'

const classPrefix = `am-pull-to-refresh`

enum PullStatus {
  idle,
  thresholdMet,
  refreshing,
  complete,
}

export type PullToRefreshProps = {
  onRefresh?: () => Promise<any>
  pullingText?: ReactNode
  releaseText?: ReactNode
  refreshingText?: ReactNode
  completeText?: ReactNode
  completeDelay?: number
  headHeight?: number
  threshold?: number
}

export const defaultProps = {
  pullingText: '下拉刷新',
  releaseText: '释放立即刷新',
  refreshingText: '加载中……',
  completeText: '刷新成功',
  completeDelay: 500,
  onRefresh: () => {},
}

const PullToRefresh = withDefaultProps(defaultProps)<PullToRefreshProps>(
  props => {
    const headHeight = props.headHeight ?? convertPx(40)
    const threshold = props.threshold ?? convertPx(60)

    const [status, setStatus] = useState<PullStatus>(PullStatus.idle)

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
      setStatus(PullStatus.refreshing)
      setStatus(PullStatus.refreshing)
      try {
        await props.onRefresh()
        setStatus(PullStatus.complete)
      } catch (e) {
        setStatus(PullStatus.idle)
        throw e
      }
      if (props.completeDelay > 0) {
        await sleep(props.completeDelay)
      }
      api.start({
        to: async next => {
          await next({ height: 0 })
          await next({ height: 0 })
          setStatus(PullStatus.idle)
        },
      })
    }

    useDrag(
      state => {
        if (status === PullStatus.refreshing || status === PullStatus.complete)
          return

        const { event } = state

        if (state.last) {
          pullingRef.current = false
          if (status === PullStatus.thresholdMet) {
            doRefresh()
          } else {
            api.start({ height: 0 })
          }
          return
        }

        const [x, y] = state.movement
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
        setStatus(
          height > threshold ? PullStatus.thresholdMet : PullStatus.idle
        )
      },
      {
        useTouch: true,
        axis: 'y',
        domTarget: elementRef,
        eventOptions: supportsPassive ? { passive: false } : false,
      }
    )

    return (
      <animated.div ref={elementRef} className={classPrefix}>
        <animated.div style={springStyles} className={`${classPrefix}-head`}>
          <div
            className={`${classPrefix}-head-content`}
            style={{ height: headHeight }}
          >
            {status === PullStatus.idle && props.pullingText}
            {status === PullStatus.thresholdMet && props.releaseText}
            {status === PullStatus.refreshing && props.refreshingText}
            {status === PullStatus.complete && props.completeText}
          </div>
        </animated.div>
        <div>{props.children}</div>
      </animated.div>
    )
  }
)

export default PullToRefresh
