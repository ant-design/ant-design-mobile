import classNames from 'classnames'
import React, {
  FC,
  useEffect,
  useRef,
  useState,
  useMemo,
  CSSProperties,
} from 'react'

const classPrefix = `am-water-mark`

export interface WProps {
  /** 组件样式名 */
  className?: string
  /** 组件样式 */
  style?: React.CSSProperties
  /**
   * 水印之间的水平间距
   * @default 24
   */
  gapX?: number
  /**
   * 水印之间的垂直间距
   * @default 48
   */
  gapY?: number
  /**
   * 水印在 canvas 画布上绘制的水平偏移量
   * @default 0
   */
  offsetLeft?: number
  /**
   * 水印在 canvas 画布上绘制的垂直偏移量
   * @default 0
   */
  offsetTop?: number
  /**
   * 单个水印宽度
   * @default 120
   */
  width?: number
  /**
   * 单个水印高度
   * @default 64
   */
  height?: number
  /**
   * 水印不透明度
   * @default 0.15
   */
  opacity?: number
  /**
   * 旋转的角度
   * @default -22
   */
  rotate?: number
  /**
   * 图片宽度
   * @default 120
   */
  imageWidth?: number
  /**
   * 图片高度
   * @default 64
   */
  imageHeight?: number
  /**
   * 设置字体大小
   * @default 14
   */
  fontSize?: number
  /**
   * 设置字体粗细
   * @default 300
   */
  fontWeight?: string | number
  /**
   * 规定字体样式
   * @default normal
   */
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  /**
   * 规定字体变体
   * @default normal
   */
  fontVariant?: 'normal' | 'small-caps'
  /**
   * 设置字体颜色
   * @default #000
   */
  fontColor?: string
  /**
   * 设置水印文字的字体
   * @default sans-serif
   */
  fontFamily?: string
  /**
   * 水印文字的对齐方式
   * @default center
   */
  textAlign?: CanvasTextDrawingStyles['textAlign']
  /**
   * 绘制文本的文本基线
   * @default alphabetic
   */
  textBaseline?: CanvasTextDrawingStyles['textBaseline']
  /**
   * 是否开启监视模式
   * @default true
   */
  monitor?: boolean
  /**
   * 样式层级
   * @default 2000
   */
  zIndex?: number
  /**
   * 展示模式，interval 表示错行展示
   * @default interval
   */
  mode?: 'repeat' | 'interval'
  /** 水印文本, 为数组时表示多行水印 */
  content?: string | string[]
  /** 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 */
  image?: string
}

type DrawResult = {
  url: string
  width: number
  height: number
  ratio: number
}

const MUTATION_OBSERVER_CONFIG = {
  childList: true,
  subtree: true,
  attributeFilter: ['style'],
  attributeOldValue: true,
}

function getMutationObserver() {
  return (
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver
  )
}

let MutationObserverInstance: typeof MutationObserver

const setValueForStyles = (styles: Record<string, unknown>) => {
  let result = ''
  Object.keys(styles).forEach(item => {
    const value = styles[item]
    if (value === undefined || value === null) return
    const key = item.replace(/([A-Z])/g, '-$1').toLowerCase()
    result += `${key}:${value};`
  })

  return result
}

const DEFAULT_STYLES: CSSProperties = {
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  backgroundRepeat: 'repeat',
}

const WaterMark: FC<WProps> = props => {
  const {
    className,
    style,
    zIndex = 2000,
    gapX = 24,
    gapY = 48,
    offsetLeft = 0,
    offsetTop = 0,
    width = 120,
    height = 64,
    rotate = -22,
    opacity = 0.15,
    image,
    imageWidth = 120,
    imageHeight = 64,
    content,
    fontStyle = 'normal',
    fontWeight = 'normal',
    fontColor = '#000',
    fontSize = 14,
    fontFamily = 'sans-serif',
    fontVariant = 'normal',
    textAlign = 'center',
    textBaseline = 'alphabetic',
    mode = 'repeat',
    monitor = true,
  } = props

  const observer = useRef<MutationObserver>()
  const watermark = useRef<HTMLDivElement>(null)
  const [watermarkStyles, updateWatermarkStyles] = useState<CSSProperties>({})
  const styles: CSSProperties = useMemo(() => {
    const properties = {
      zIndex,
      ...watermarkStyles,
      ...style,
    }
    // 监视模式写入样式到节点
    if (monitor && watermark.current) {
      watermark.current?.setAttribute('style', setValueForStyles(properties))
    }
    return properties
  }, [zIndex, watermarkStyles, style, monitor])

  const handleMutation = (record: MutationRecord) => {
    const { type, target, attributeName, removedNodes } = record
    // style 被篡改
    if (
      type === 'attributes' &&
      attributeName === 'style' &&
      target === watermark.current
    ) {
      render()
    }

    // 节点被移除
    if (
      watermark.current &&
      type === 'childList' &&
      removedNodes.length &&
      Array.from(removedNodes).some(node => node === watermark.current)
    ) {
      observer.current?.disconnect()
      target.appendChild(watermark.current)
      registerMutation()
    }
  }

  const registerMutation = () => {
    if (!MutationObserverInstance || !monitor || !watermark.current) return
    const parentNode = watermark.current.parentNode
    if (!parentNode) return

    observer.current = new MutationObserverInstance(mutations =>
      mutations.forEach(handleMutation)
    )
    // MutationObserver 无法监测自身被移除
    observer.current.observe(parentNode, MUTATION_OBSERVER_CONFIG)
  }

  const resolveImage = (url: string) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.referrerPolicy = 'no-referrer'
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error('图片加载失败'))
      img.src = url
    })
  }

  const handleDraw = async (): Promise<DrawResult> => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    if (!context) return Promise.reject(new Error('当前环境不支持 Canvas'))
    const ratio = window.devicePixelRatio || 1
    const canvasWidth = (gapX + width) * ratio
    const canvasHeight = (gapY + height) * ratio

    const canvasOffsetLeft = offsetLeft || gapX / 2
    const canvasOffsetTop = offsetTop || gapY / 2

    canvas.setAttribute('width', `${canvasWidth}px`)
    canvas.setAttribute('height', `${canvasHeight}px`)

    // 设置透明度
    context.globalAlpha = opacity

    // 旋转画布
    context.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio)
    context.rotate((Math.PI / 180) * Number(rotate))

    const result = { width: canvasWidth, height: canvasHeight, ratio }

    if (image) {
      const img = await resolveImage(image)
      context.drawImage(img, 0, 0, imageWidth * ratio, imageHeight * ratio)
      return Promise.resolve({ ...result, url: canvas.toDataURL() })
    }

    if (
      typeof content === 'string' ||
      (Array.isArray(content) && content.length)
    ) {
      const markWidth = width * ratio
      const markHeight = height * ratio
      // 获取文本的最大宽度
      const texts = Array.isArray(content) ? content : [content]
      const widths = texts.map(item => context.measureText(item).width)
      const maxWidth = Math.max.apply(null, widths)
      const markSize = Number(fontSize) * ratio
      // 获取行高
      const lineHeight = markSize + 5
      // 设置文本对齐方式
      context.textAlign = textAlign
      // 设置文本基线
      context.textBaseline = textBaseline
      // 设置字体颜色
      context.fillStyle = fontColor
      // 设置字体
      context.font = `${fontStyle} ${fontVariant} ${fontWeight} ${
        maxWidth > width ? markSize / 2 : markSize
      }px/${lineHeight}px ${fontFamily}`

      // 计算水印在y轴上的初始位置
      const initY = Math.min(
        (markHeight - (fontSize * texts.length + (texts.length - 1) * 5)) / 2,
        0
      )

      // 处理多行文本
      for (let i = 0; i < texts.length; i++) {
        context.fillText(texts[i], markWidth / 2, initY + lineHeight * i)
      }

      return Promise.resolve({ ...result, url: canvas.toDataURL() })
    }

    return Promise.reject(new Error('图片或文字选项缺失'))
  }

  const render = async () => {
    observer.current?.disconnect()

    const rest = { ...DEFAULT_STYLES }

    const config = await handleDraw()

    if (config.url) {
      const { url, width, height, ratio } = config
      if (mode === 'repeat') {
        rest.backgroundImage = `url(${url})`
      } else {
        rest.backgroundImage = `url(${url}), url(${url})`
        rest.backgroundRepeat = 'repeat, repeat'
        rest.backgroundPosition = `${width / 2}px ${height / 2}px, 0 0`
      }
      rest.backgroundSize = `${width / ratio}px`
    }

    updateWatermarkStyles(rest)
    registerMutation()
  }

  useEffect(() => {
    if (!MutationObserverInstance)
      MutationObserverInstance = getMutationObserver()
  }, [])

  useEffect(() => {
    render()
    return () => {
      observer.current?.disconnect()
    }
  }, [
    style,
    gapX,
    gapY,
    offsetLeft,
    offsetTop,
    width,
    height,
    rotate,
    opacity,
    image,
    imageWidth,
    imageHeight,
    content,
    fontStyle,
    fontWeight,
    fontColor,
    fontSize,
    fontFamily,
    fontVariant,
    textAlign,
    textBaseline,
    mode,
    monitor,
  ])

  return (
    <div
      ref={watermark}
      className={classNames(classPrefix, className)}
      style={styles}
    />
  )
}

export default WaterMark
