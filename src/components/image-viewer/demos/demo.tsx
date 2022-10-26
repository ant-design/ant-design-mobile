import React, { SyntheticEvent, useState } from 'react'
import { ImageViewer, Button } from 'antd-mobile'
import { DemoBlock, sleep } from 'demos'
import { demoImage, facImages } from './images'
import { useAverageColor } from '../../../utils/use-fast-average-color'

// 单张图片预览
// 单张图片预览
const Single = () => {
  const [visible, setVisible] = useState(false)
  const [color, setColor] = useAverageColor('sqrt')
  const handleIndexChange = (evt: SyntheticEvent<HTMLImageElement>) => {
    setColor(evt.currentTarget)
  }

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        显示图片
      </Button>
      <ImageViewer
        image={demoImage}
        visible={visible}
        color={color}
        onLoad={handleIndexChange}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

// 多张图片预览
const Multi = () => {
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
        onLoad={(_, index) => {
          console.log(index, currentIndex)
          index === currentIndex && handleIndexChange(index)
        }}
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
      <DemoBlock title='单张'>
        <Single />
      </DemoBlock>
      <DemoBlock title='多张'>
        <Multi />
      </DemoBlock>
    </>
  )
}
