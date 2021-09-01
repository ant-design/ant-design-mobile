import classNames from 'classnames'
import React, { FC, useEffect, useState } from 'react'

const classPrefix = `adm-water-mark`

export interface WaterMarkProps {
  className?: string
  style?: React.CSSProperties
  /**
   * 水印之间的水平间距
   */
  gapX?: number
  /**
   * 水印之间的垂直间距
   */
  gapY?: number
  /**
   * 追加的水印元素的z-index
   */
  zIndex?: number
  /**
   * 水印的宽度
   */
  width?: number
  /**
   * 水印的高度
   */
  height?: number
  /**
   * 水印绘制时，旋转的角度，单位 °
   */
  rotate?: number
  /**
   * 高清印图片源, 为了高清屏幕显示，建议使用 2倍或3倍图，优先使用图片渲染水印。
   */
  image?: string
  /**
   * 图片宽度
   */
  imageWidth?: number
  /**
   * 图片高度
   */
  imageHeight?: number
  /**
   * 水印文字内容
   */
  content?: string
  /**
   * 文字颜色
   */
  fontColor?: string
  /**
   * 文字样式
   */
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  /**
   * 文字族
   */
  fontFamily?: string
  /**
   * 文字粗细
   */
  fontWeight?: 'normal' | 'light' | 'weight' | number
  /**
   * 文字大小
   */
  fontSize?: number | string
}

export const WaterMark: FC<WaterMarkProps> = props => {
  const {
    style,
    className,
    zIndex = 2000,
    gapX = 24,
    gapY = 48,
    width = 120,
    height = 64,
    rotate = -22,
    image,
    imageWidth = 120,
    imageHeight = 64,
    content,
    fontStyle = 'normal',
    fontWeight = 'normal',
    fontColor = 'rgba(0,0,0,.15)',
    fontSize = 14,
    fontFamily = 'sans-serif',
  } = props

  const [base64Url, setBase64Url] = useState('')

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ratio = window.devicePixelRatio

    const ctx = canvas.getContext('2d')

    const canvasWidth = `${(gapX + width) * ratio}px`
    const canvasHeight = `${(gapY + height) * ratio}px`

    const markWidth = width * ratio
    const markHeight = height * ratio

    canvas.setAttribute('width', canvasWidth)
    canvas.setAttribute('height', canvasHeight)

    if (ctx) {
      if (image) {
        ctx.translate(markWidth / 2, markHeight / 2)
        ctx.rotate((Math.PI / 180) * Number(rotate))

        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.referrerPolicy = 'no-referrer'
        img.src = image
        img.onload = () => {
          ctx.drawImage(
            img,
            (-imageWidth * ratio) / 2,
            (-imageHeight * ratio) / 2,
            imageWidth * ratio,
            imageHeight * ratio
          )
          ctx.restore()
          setBase64Url(canvas.toDataURL())
        }
      } else if (content) {
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        // 文字绕中间旋转
        ctx.translate(markWidth / 2, markHeight / 2)
        ctx.rotate((Math.PI / 180) * Number(rotate))

        const markSize = Number(fontSize) * ratio
        ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`
        ctx.fillStyle = fontColor

        ctx.fillText(content, 0, 0)
        ctx.restore()
        setBase64Url(canvas.toDataURL())
      }
    } else {
      throw new Error('当前环境不支持Canvas')
    }
  }, [
    gapX,
    gapY,
    rotate,
    fontStyle,
    fontWeight,
    width,
    height,
    fontFamily,
    fontColor,
    image,
    content,
    fontSize,
  ])

  return (
    <div
      className={classNames(classPrefix, className)}
      style={{
        zIndex,
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: `${gapX + width}px`,
        pointerEvents: 'none',
        backgroundRepeat: 'repeat',
        backgroundImage: `url('${base64Url}')`,
        ...style,
      }}
    />
  )
}
