import React, { useState } from 'react'
import { FloatingPanel } from 'antd-mobile'
import { DemoDescription } from 'demos'

const anchors = [100, window.innerHeight * 0.2, window.innerHeight * 0.8]
const minHeight = anchors[0]
const maxHeight = anchors[anchors.length - 1]

export default () => {
  const onHeightChange = (height: number, animating: boolean) => {
    setPercent(Math.abs(height / maxHeight))
  }

  const [percent, setPercent] = useState<number>(minHeight / maxHeight)
  const style = {
    height: maxHeight,
    backgroundImage: `linear-gradient(rgba(185,147,214,${percent}),rgba(140,166,219,${percent}))`,
  }
  return (
    <div
      style={{
        padding: 12,
      }}
    >
      <DemoDescription>结合onHeightChange实现透明度变化</DemoDescription>

      <FloatingPanel anchors={anchors} onHeightChange={onHeightChange}>
        <div style={style} />
      </FloatingPanel>
    </div>
  )
}
