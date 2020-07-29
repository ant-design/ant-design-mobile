import * as React from 'react'
import { useScrollPercent, useTracker } from '../hooks'
import { withError } from '../rmc'

import '@ant-design/mobile-styles/lib/HorizontalScrollbar'

function ProgressArc({ percent }: { percent: number }) {
  const track = React.useRef<any>()
  const thumb = React.useRef<any>()

  const remainWidth = React.useRef<any>(null)

  // 这里只计算一次以提高性能
  if (remainWidth.current == null) {
    const trackWidth = track.current?.getBoundingClientRect().width
    const thumbWidth = thumb.current?.getBoundingClientRect().width

    const r = trackWidth - thumbWidth
    if (!isNaN(r)) {
      remainWidth.current = r
    }
  }

  return (
    <>
      <div className="amd-scrollbar-track" ref={track} />
      <div
        className="amd-scrollbar-thumb"
        style={{ left: ((remainWidth.current || 0) * percent) / 100 }}
        ref={thumb}
      />
    </>
  )
}

const prefixCls = 'amd-scrollbar'
const HorizontalScrollbar: React.FC = ({ children }) => {
  useTracker(HorizontalScrollbar.displayName)

  const [scrollPercent, ref] = useScrollPercent()

  return (
    <div className={prefixCls}>
      <div ref={ref} className={prefixCls + '-container'}>
        {children}
      </div>
      <div className={prefixCls + '-indicator'}>
        {!isNaN(scrollPercent.left) && (
          <ProgressArc percent={scrollPercent.left} />
        )}
      </div>
    </div>
  )
}

HorizontalScrollbar.displayName = 'HorizontalScrollbar'

export default withError(HorizontalScrollbar)
