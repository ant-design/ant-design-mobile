import * as React from 'react'
import classnames from 'classnames'

import { useTracker } from '../hooks'
import { withError } from '../rmc'
import { LoadingPropsType } from './PropsType'
import Icon from './icon'
import '@ant-design/mobile-styles/lib/Loading'

const prefixCls = 'amd-loading'

export const Loading: React.FC<LoadingPropsType> = props => {
  const { show, text, delay, className, children } = props
  useTracker(Loading.displayName)

  // 用户传递类型异常时覆盖
  const realShow: boolean = !!show
  const realDelay: number = isNaN(delay!) ? 0 : delay!

  const [status, setStatus] = React.useState<boolean>(false)
  const timer = React.useRef<number | null>(null)

  const cancelTimer = () => {
    if (timer.current) {
      window.clearTimeout(timer.current)
      timer.current = null
    }
  }

  React.useEffect(() => {
    // 传入延时为0或非数字，立即展示
    if (realShow && realDelay === 0) {
      setStatus(true)
      // 如果已有调用，清除之前调用
      cancelTimer()
    }
    // 传入延时大于0且当前没有在展示中，延时加载
    if (realShow && delay! > 0 && !status) {
      // 如果已有调用，清除之前调用
      cancelTimer()
      // 重新做延时调用
      timer.current = window.setTimeout(() => {
        setStatus(true)
        cancelTimer()
      }, realDelay)
    }
    // 调用隐藏
    if (!realShow) {
      // 如果之前存在调用展示，清除
      cancelTimer()
      status && setStatus(false)
    }
  }, [realShow])

  return (
    <div className={classnames(prefixCls, className)}>
      {status && (
        <div className={`${prefixCls}-spin`}>
          <div className={`${prefixCls}-icon`}>
            <Icon />
          </div>
          {text && <div className={`${prefixCls}-text`}>{text}</div>}
        </div>
      )}
      <div className={`${prefixCls}-container`}>{children}</div>
    </div>
  )
}

Loading.displayName = 'Loading'
Loading.defaultProps = {
  show: true,
  text: '',
  delay: 0,
  className: '',
}

export default withError(Loading)
