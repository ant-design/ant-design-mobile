import React, { useState, FC } from 'react'
import { ImageViewer, Button } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { facImages } from './images'

import {
  FastAverageColor,
  FastAverageColorResource,
  FastAverageColorOptions,
} from 'fast-average-color'
import { noop } from 'lodash'

const fac = new FastAverageColor()
const getAverageColor = (
  resource: FastAverageColorResource,
  algorithm: FastAverageColorOptions['algorithm'],
  opacity: string
) => {
  const facc = fac.getColor(resource, {
    algorithm,
    ignoredColor: [
      [255, 255, 255],
      [0, 0, 0],
    ],
  })
  const colors = facc.rgb.split('(')[1].split(')')[0].split(',')

  console.log(facc, colors)
  colors.push(opacity)
  return `rgba(${colors.join(',')})`
}
const useAverageColor = (
  averageColor: FastAverageColorOptions['algorithm']
): [string, (target: FastAverageColorResource) => void] => {
  if (!averageColor) return ['', noop]

  const [color, setColor] = useState('')
  return [
    color,
    (target: FastAverageColorResource) => {
      const facc = getAverageColor(target, averageColor, '0.75')
      setColor(facc)
    },
  ]
}

// 多张图片预览
const FollowContent = () => {
  const [visible, setVisible] = useState(false)
  const [color, setColor] = useAverageColor('sqrt')

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        显示多张
      </Button>
      <ImageViewer.Multi
        images={facImages}
        visible={visible}
        color={color}
        defaultIndex={1}
        onIndexChange={index =>
          setColor(
            document.querySelectorAll('.adm-image-viewer-slide img')[
              index
            ] as HTMLImageElement
          )
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
