import React, { useState } from 'react'
import { ImageViewer, Button } from 'antd-mobile'
import { DemoBlock, sleep } from 'demos'
import { facImages } from './images'
import { useAverageColor } from '../../../utils/use-fast-average-color'

// 多张图片预览
const FollowContent = () => {
  const [visible, setVisible] = useState(false)
  const [color, setColor] = useAverageColor('sqrt')
  let currentIndex = 1
  const handleIndexChange = (index: number) => {
    setColor(
      document.querySelectorAll<HTMLImageElement>(
        '.adm-image-viewer-slide img'
      )[index]
    )
    currentIndex = index
  }

  return (
    <>
      <Button
        onClick={async () => {
          setVisible(true)
          await sleep(1000)
          setColor(
            document.querySelectorAll<HTMLImageElement>(
              '.adm-image-viewer-slide img'
            )[1]
          )
        }}
      >
        显示多张
      </Button>
      <ImageViewer.Multi
        images={facImages}
        visible={visible}
        color={color}
        defaultIndex={currentIndex}
        onIndexChange={handleIndexChange}
        onLoad={(_, index) =>
          index === currentIndex && handleIndexChange(index)
        }
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='跟随内容颜色'>
        <FollowContent />
      </DemoBlock>
    </>
  )
}
