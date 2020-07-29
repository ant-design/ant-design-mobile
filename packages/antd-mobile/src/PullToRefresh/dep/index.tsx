import * as React from 'react'
import classnames from 'classnames'
import { PullToRefreshPropsType, PullTypeEnum } from '../PropsType'
import { useCompleteLocale } from '../../hooks'
import PassiveNode from './PassiveNode'
import { isReactComponent } from '../../_internal'

const isWebView =
  typeof navigator !== 'undefined' &&
  /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent)

const prefixCls = 'amd-pull-to-refresh'
const PullToRefresh: React.FC<PullToRefreshPropsType> = props => {
  const {
    className,
    children,
    direction,
    onRefresh,
    refreshing,
    indicator,
    distanceToRefresh,
  } = props

  const getTransformStyle = (y: number) => {
    const trans = `translate3d(0px,${y}px,0)`
    return {
      transform: trans,
      WebkitTransform: trans,
      MozTransform: trans,
    }
  }

  // 判断是否整的滚
  const [dragOnEdge, setDragOnEdge] = React.useState(false)
  const [currSt, setCurrSt] = React.useState(PullTypeEnum.deactivate)
  const [progress, setProgress] = React.useState(0)
  const [contentStyle, setContentStyle] = React.useState(getTransformStyle(0))
  const lang = useCompleteLocale()
  const containerRef = React.createRef<HTMLDivElement>()

  React.useEffect(() => {
    // 松手后，需要回弹到指定的地方转圈
    if (currSt === PullTypeEnum.release) {
      if (direction === 'up') {
        _lastScreenY.current = -distanceToRefresh!
      }
      if (direction === 'down') {
        _lastScreenY.current = distanceToRefresh!
      }
      setContentStyle(getTransformStyle(_lastScreenY.current))
    }

    // 当指示器是 ReactNode 的时候，需要在 finish 的时候 reset
    // 指示器是 component 的时候
    if (
      currSt === PullTypeEnum.finish &&
      !isReactComponent(indicator?.finish)
    ) {
      reset()
    }
  }, [currSt])

  // refreshing 变更的时候
  // true 表示触发刷新
  // false 表示要终止刷新
  React.useEffect(() => {
    triggerPullToRefresh()
    // 清理掉自动结束的定时器
    _timeout.current && clearTimeout(_timeout.current)
  }, [refreshing])

  const _ScreenY = React.useRef(0)
  const _startScreenY = React.useRef(0)
  const _startScreenX = React.useRef(0)
  const _lastScreenY = React.useRef(0)
  const _refreshing = React.useRef(refreshing)
  const _timeout = React.useRef<any>(null)

  // 保证 _refreshing 实时更新
  _refreshing.current = refreshing

  // 用来判断是否应该刷新或加载
  const isEdge = (ele: Element) => {
    if (direction === 'up') {
      return ele.scrollHeight - ele.scrollTop === ele.clientHeight
    }
    if (direction === 'down') {
      return ele.scrollTop <= 0
    }
  }

  // 计算 y 的距离
  const damping = (dy: number) => {
    // damping 设为 100, 看后续需不需要开放
    if (Math.abs(_lastScreenY.current) > 100) {
      return 0
    }

    const ratio =
      Math.abs(_ScreenY.current - _startScreenY.current) / window.screen.height

    // scale 设为 0.6, 看后续需不需要开放
    dy *= (1 - ratio) * 0.6

    return dy
  }

  // 恢复数据状态
  const reset = () => {
    _lastScreenY.current = 0
    setContentStyle(getTransformStyle(0))
    setProgress(0)
  }

  // props 更新的时候更改刷新状态
  const triggerPullToRefresh = () => {
    if (!dragOnEdge) {
      if (refreshing) {
        if (direction === 'up') {
          _lastScreenY.current = -distanceToRefresh!
        }
        if (direction === 'down') {
          _lastScreenY.current = distanceToRefresh!
        }

        setCurrSt(PullTypeEnum.release)
        setContentStyle(getTransformStyle(_lastScreenY.current))
      } else {
        setCurrSt(PullTypeEnum.finish)
      }
    }
  }

  const onTouchStart = (e: React.TouchEvent) => {
    const { screenX, screenY } = e.touches[0]

    _ScreenY.current = _startScreenY.current = screenY
    _lastScreenY.current = _lastScreenY.current || 0
    _startScreenX.current = screenX
  }
  const onTouchMove = (e: React.TouchEvent) => {
    // 使用 pageY 对比有问题
    const { screenX, screenY } = e.touches[0]

    // 拖动方向不符合的不处理
    if (
      (direction === 'up' && _startScreenY.current < screenY) ||
      (direction === 'down' && _startScreenY.current > screenY) ||
      // 暂时定左右滑动距离不能超过 20
      Math.abs(_startScreenX.current - screenX) > 20 * window.devicePixelRatio
    ) {
      return
    }

    // 先用着 e.target， containerRef 一会儿有一会儿没有的
    if (isEdge(e.target as Element)) {
      if (!dragOnEdge) {
        // 当用户开始往上滑的时候isEdge还是false的话，会导致this._ScreenY不是想要的，只有当isEdge为true时，再上滑，才有意义
        // 下面这行代码解决了上面这个问题
        _ScreenY.current = _startScreenY.current = screenY
        _startScreenX.current = screenX

        setDragOnEdge(true)
      }

      e.cancelable && e.preventDefault()
      e.stopPropagation()

      const _diff = Math.round(screenY - _ScreenY.current)
      _ScreenY.current = screenY
      _lastScreenY.current += damping(_diff)

      setContentStyle(getTransformStyle(_lastScreenY.current))

      if (Math.abs(_lastScreenY.current) < distanceToRefresh!) {
        setProgress(Math.abs(_lastScreenY.current) / distanceToRefresh!)
        if (currSt !== PullTypeEnum.deactivate) {
          setCurrSt(PullTypeEnum.deactivate)
        }
      } else {
        if (currSt === PullTypeEnum.deactivate) {
          setCurrSt(PullTypeEnum.activate)
        }
      }

      // https://github.com/ant-design/ant-design-mobile/issues/573#issuecomment-339560829
      // iOS UIWebView issue, It seems no problem in WKWebView
      if (isWebView && e.changedTouches[0].clientY < 0) {
        onTouchEnd()
      }
    }
  }

  const onTouchEnd = () => {
    if (dragOnEdge) {
      setDragOnEdge(false)
    }
    if (currSt === PullTypeEnum.activate) {
      setCurrSt(PullTypeEnum.release)
      onRefresh?.()
      _timeout.current = setTimeout(() => {
        // 1s 后如果不是加载状态，则自动结束
        if (!_refreshing.current) {
          setCurrSt(PullTypeEnum.finish)
        }
      }, 1000)
    } else {
      reset()
    }
  }

  const renderRefresh = (cls: string) => {
    const cla = classnames(cls, !dragOnEdge && `${prefixCls}-transition`)

    const IndicatorComponentOrNode = indicator![currSt]

    let IndicatorNode
    if (!isReactComponent(IndicatorComponentOrNode)) {
      IndicatorNode = IndicatorComponentOrNode
    } else {
      IndicatorNode = (
        // @ts-ignore
        <IndicatorComponentOrNode
          type={currSt}
          progress={progress}
          onLoadingFinish={reset}
          locale={lang.locale}
        />
      )
    }

    return (
      <div className={`${prefixCls}-content-wrapper`}>
        <div className={cla} style={contentStyle}>
          {direction === 'up' ? children : null}
          <div className={`${prefixCls}-indicator`}>{IndicatorNode}</div>
          {direction === 'down' ? children : null}
        </div>
      </div>
    )
  }

  return (
    <PassiveNode
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={classnames(className, prefixCls, `${prefixCls}-${direction}`)}
    >
      {renderRefresh(`${prefixCls}-content`)}
    </PassiveNode>
  )
}
PullToRefresh.displayName = 'PullToRefresh'
PullToRefresh.defaultProps = {
  direction: 'down',
  indicator: {
    deactivate: '',
    activate: '',
    release: '',
    finish: '',
  },
  distanceToRefresh: 26 * window.devicePixelRatio,
}

export default PullToRefresh
