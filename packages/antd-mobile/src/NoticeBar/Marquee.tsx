/*
 * https://github.com/jasonslyvia/react-marquee
 * remove PC
 * support React Element for text prop
 */
import * as React from 'react'
import classnames from 'classnames'

export interface MarqueeProps {
  text?: string
  loop?: boolean
  leading?: number
  trailing?: number
  className?: string
  fps?: number
  style?: React.CSSProperties
}

const Marquee: React.FC<MarqueeProps> = props => {
  const [animatedWidth, updateAnimateWidth] = React.useState<number>(0)
  const [overflowWidth, updateOverflowWidth] = React.useState<number>(0)
  const containerRef = React.useRef<any>(null)
  const textRef = React.useRef<any>(null)

  const { className, text } = props
  const style: React.CSSProperties = {
    position: 'relative',
    // right: animatedWidth,
    transform: `translate3d(-${animatedWidth}px, 0, 0)`,
    whiteSpace: 'nowrap',
    display: 'inline-block',
    ...props.style,
  }

  const _measureText = () => {
    const container = containerRef.current
    const node: any = textRef.current
    if (container && node) {
      const containerWidth = (container as any).offsetWidth
      const textWidth = node.offsetWidth
      const currentOverflowWidth = textWidth - containerWidth
      if (currentOverflowWidth !== overflowWidth) {
        updateOverflowWidth(currentOverflowWidth)
      }
    }
  }
  let _marqueeTimer: number

  const _startAnimation = () => {
    if (_marqueeTimer) {
      window.clearTimeout(_marqueeTimer)
    }
    const fps = props.fps
    const TIMEOUT = (1 / fps!) * 1000
    const isLeading = animatedWidth === 0
    const timeout = isLeading ? props.leading : TIMEOUT

    const animate = () => {
      let currentAnimatedWidth = animatedWidth + 1
      const isRoundOver = animatedWidth > overflowWidth

      if (isRoundOver) {
        if (props.loop) {
          currentAnimatedWidth = 0
        } else {
          return
        }
      }

      if (isRoundOver && props.trailing) {
        _marqueeTimer = window.setTimeout(() => {
          updateAnimateWidth(currentAnimatedWidth)
        }, props.trailing)
      } else {
        updateAnimateWidth(currentAnimatedWidth)
      }
    }

    if (overflowWidth !== 0) {
      _marqueeTimer = window.setTimeout(animate, timeout)
    }
  }

  // 只有文本变化的时候才重新测量宽度
  React.useEffect(() => {
    _measureText()
  }, [text])
  // 基于state变化的动画
  React.useEffect(() => {
    _startAnimation()
    return () => {
      clearTimeout(_marqueeTimer)
    }
  }, [overflowWidth, animatedWidth])

  const wrapCls = classnames(
    'amd-notice-bar-marquee-wrap',
    className,
    animatedWidth === 0 ? 'no-mask' : '',
  )

  return (
    <div
      className={wrapCls}
      style={{ overflow: 'hidden' }}
      role="marquee"
      ref={el => (containerRef.current = el)}
    >
      <div
        ref={el => (textRef.current = el)}
        className="amd-notice-bar-marquee"
        style={style}
      >
        {text}
      </div>
    </div>
  )
}

Marquee.displayName = 'Marquee'
Marquee.defaultProps = {
  text: '',
  loop: false,
  leading: 500,
  trailing: 800,
  fps: 40,
  className: '',
}

export default Marquee
