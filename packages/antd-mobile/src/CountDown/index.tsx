import * as React from 'react'
import { CountDownPropsType } from './PropsType'
import { withError } from '../rmc'
import { useTracker } from '../hooks'

export const CountDown: React.FC<CountDownPropsType> = props => {
  const [t, setT] = React.useState(props.t)
  useTracker(CountDown.displayName)

  React.useLayoutEffect(() => {
    let reqId: number
    // 剩余时间
    let rt = t
    // 现在的时间
    let start: number
    const count = (timestamp: number) => {
      if (!start) {
        start = timestamp
      }

      // 更新时间
      const n = Math.floor((timestamp - start) / props.renderDuration!)
      if (n >= 1) {
        rt = rt - n * props.renderDuration!
        // 修正 rt 最小为 0
        if (rt < 0) {
          rt = 0
        }
        start = timestamp
        setT(rt)

        if (rt <= 0) {
          props.onComplete!()
        }
      }
      reqId = requestAnimationFrame(count)

      if (rt <= 0) {
        cancelAnimationFrame(reqId)
      }
    }
    reqId = requestAnimationFrame(count)

    return () => {
      !!reqId && cancelAnimationFrame(reqId)
    }
  }, [])

  return React.createElement(props.render!, { t })
}

CountDown.displayName = 'CountDown'
CountDown.defaultProps = {
  renderDuration: 1 * 1000,
  render: () => null,
  onComplete: () => null,
}

export default withError(CountDown)
