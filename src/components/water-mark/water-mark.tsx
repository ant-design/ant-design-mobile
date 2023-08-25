import classNames from 'classnames'
import React, { FC, useEffect, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-water-mark`

export type WaterMarkProps = {
  gapX?: number
  gapY?: number
  zIndex?: number
  width?: number
  height?: number
  rotate?: number
  image?: string
  imageWidth?: number
  imageHeight?: number
  content?: string | string[]
  fontColor?: string
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  fontFamily?: string
  fontWeight?: 'normal' | 'light' | 'weight' | number
  fontSize?: number | string
  fullPage?: boolean
} & NativeProps<'--z-index'>

const defaultProps = {
  fullPage: true,
}

export const WaterMark: FC<WaterMarkProps> = p => {
  const props = mergeProps(defaultProps, p)
  const {
    zIndex,
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
        img.src = image
      } else if (content) {
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        // 文字绕中间旋转
        ctx.translate(markWidth / 2, markHeight / 2)
        ctx.rotate((Math.PI / 180) * Number(rotate))

        const markSize = Number(fontSize) * ratio
        ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`
        ctx.fillStyle = fontColor
        if (Array.isArray(content)) {
          content.forEach((item: string, index: number) =>
            ctx.fillText(item, 0, index * markSize)
          )
        } else {
          ctx.fillText(content, 0, 0)
        }
        ctx.restore()
        setBase64Url(canvas.toDataURL())
      }
    } else {
      throw new Error('Canvas is not supported in the current environment')
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

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-full-page`]: props.fullPage,
      })}
      style={{
        zIndex,
        backgroundSize: `${gapX + width}px`,
        backgroundImage: `url('${base64Url}')`,
      }}
    />
  )
}
