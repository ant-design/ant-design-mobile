import * as React from 'react'
import convertRef from './convertRef'
import useResponderEvents from '../useResponderEvents'

const View: React.FC<any> = props => {
  const {
    // for useResponderEvent
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture,

    // do not copy children
    children,

    // rest for real dom
    ...rest
  } = props

  const child = React.Children.only(children)

  const { hostRef, ref } = convertRef(child.ref)

  const events = useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture,
  })

  // 合并 events 和 child.props 上的方法
  const fixedEvents = Object.keys(events).reduce((prev, item) => {
    if (events[item] && typeof events[item] !== 'function') {
      prev[item] = events[item]
      return prev
    }

    // 合并 child 原有的事件和新绑定的事件
    prev[item] = (...args: any[]) => {
      child.props?.[item]?.(...args)

      // props 的事件
      rest[item]?.(...args)

      // 注意 events 必须在后面，这样子 events.onContextMenu 里面的 e.isDefaultPrevented() 判断逻辑才有效
      events[item](...args)
    }

    return prev
  }, {})

  return React.cloneElement(child, {
    ...rest,
    ...fixedEvents,
    ref,
  })
}

export default View
