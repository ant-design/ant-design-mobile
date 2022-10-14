import React, {
  FC,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
} from 'react'
import {
  FastAverageColor,
  FastAverageColorOptions,
  FastAverageColorResource,
} from 'fast-average-color'
import { mergeProps } from '../../utils/with-default-props'
import {
  GetContainer,
  renderToContainer,
} from '../../utils/render-to-container'
import Mask from '../mask'
import SafeArea from '../safe-area'
import { Slide } from './slide'
import { Slides, SlidesRef } from './slides'

const classPrefix = `adm-image-viewer`

export type ImageViewerProps = {
  image?: string
  maxZoom?: number
  getContainer?: GetContainer
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
  renderFooter?: (image: string) => React.ReactNode
}

const defaultProps = {
  maxZoom: 3,
  getContainer: null,
  visible: false,
}

const fac = new FastAverageColor()
const getAverageColor = (
  resource: FastAverageColorResource,
  algorithm: FastAverageColorOptions['algorithm'],
  opacity: string
) => {
  const facc = fac.getColor(resource, {
    algorithm,
    // ignoredColor: [[255, 255, 255], [0, 0, 0]],
  })
  const colors = facc.rgb.split('(')[1].split(')')[0].split(',')

  console.log(facc, colors)
  colors.push(opacity)
  return `rgba(${colors.join(',')})`
}

export const ImageViewer: FC<ImageViewerProps> = p => {
  const props = mergeProps(defaultProps, p)
  const [maskBg, setMaskBg] = useState('')

  function setAverageColor(target: HTMLImageElement) {
    const facc = getAverageColor(target, 'sqrt', '0.75')
    setMaskBg(facc)
  }

  const node = (
    <>
      <Mask visible={props.visible && !!maskBg} background={maskBg} />
      <Mask
        visible={props.visible}
        disableBodyScroll={false}
        opacity={maskBg ? 0.4 : 'thick'}
        afterClose={props.afterClose}
        destroyOnClose
      >
        <div className={`${classPrefix}-content`}>
          {props.image && (
            <Slide
              image={props.image}
              onTap={() => {
                props.onClose?.()
              }}
              maxZoom={props.maxZoom}
              onLoad={evt => setAverageColor(evt.target as HTMLImageElement)}
            />
          )}
        </div>
        {props.image && (
          <div className={`${classPrefix}-footer`}>
            {props.renderFooter?.(props.image)}
            <SafeArea position='bottom' />
          </div>
        )}
      </Mask>
    </>
  )
  return renderToContainer(props.getContainer, node)
}

export type MultiImageViewerRef = SlidesRef

export type MultiImageViewerProps = Omit<
  ImageViewerProps,
  'image' | 'renderFooter'
> & {
  images?: string[]
  defaultIndex?: number
  onIndexChange?: (index: number) => void
  renderFooter?: (image: string, index: number) => React.ReactNode
}

const multiDefaultProps = {
  ...defaultProps,
  defaultIndex: 0,
}
export const MultiImageViewer = forwardRef<
  MultiImageViewerRef,
  MultiImageViewerProps
>((p, ref) => {
  const props = mergeProps(multiDefaultProps, p)
  const [index, setIndex] = useState(props.defaultIndex)
  const [maskBg, setMaskBg] = useState('')

  const slidesRef = useRef<SlidesRef>(null)
  useImperativeHandle(ref, () => ({
    swipeTo: (index: number, immediate?: boolean) => {
      setIndex(index)
      slidesRef.current?.swipeTo(index, immediate)
    },
  }))

  const onSlideChange = useCallback(
    (index: number) => {
      setIndex(index)
      props.onIndexChange?.(index)
    },
    [props.onIndexChange]
  )

  const setAverageColor = (target: HTMLImageElement) => {
    const facc = getAverageColor(target, 'sqrt', '0.75')
    setMaskBg(facc)
  }

  const node = (
    <>
      <Mask
        visible={props.visible && !!maskBg}
        background={maskBg}
        opacity={0.9}
      />
      <Mask
        visible={props.visible}
        disableBodyScroll={false}
        opacity={maskBg ? 0.4 : 'thick'}
        afterClose={props.afterClose}
        destroyOnClose
      >
        <div className={`${classPrefix}-content`}>
          {props.images && (
            <Slides
              ref={slidesRef}
              defaultIndex={index}
              onIndexChange={onSlideChange}
              images={props.images}
              onTap={() => {
                props.onClose?.()
              }}
              maxZoom={props.maxZoom}
              setAverageColor={setAverageColor}
            />
          )}
        </div>
        {props.images && (
          <div className={`${classPrefix}-footer`}>
            {props.renderFooter?.(props.images[index], index)}
            <SafeArea position='bottom' />
          </div>
        )}
      </Mask>
    </>
  )
  return renderToContainer(props.getContainer, node)
})
