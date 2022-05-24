import React, {
  FC,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

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

export const ImageViewer: FC<ImageViewerProps> = p => {
  const props = mergeProps(defaultProps, p)

  const node = (
    <Mask
      visible={props.visible}
      disableBodyScroll={false}
      opacity='thick'
      afterClose={props.afterClose}
    >
      <div className={`${classPrefix}-content`}>
        {props.image && (
          <Slide
            image={props.image}
            onTap={() => {
              props.onClose?.()
            }}
            maxZoom={props.maxZoom}
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
  const [defaultIndex, setDefaultIndex] = useState(props.defaultIndex)

  const slidesRef = useRef<SlidesRef>(null)
  useImperativeHandle(ref, () => ({
    swipeTo: (index: number, immediate?: boolean) => {
      setDefaultIndex(index)
      slidesRef.current?.swipeTo(index, immediate)
    },
  }))

  const node = (
    <Mask
      visible={props.visible}
      disableBodyScroll={false}
      opacity='thick'
      afterClose={props.afterClose}
    >
      <div className={`${classPrefix}-content`}>
        {props.images && (
          <Slides
            ref={slidesRef}
            defaultIndex={defaultIndex}
            onIndexChange={props.onIndexChange}
            images={props.images}
            onTap={() => {
              props.onClose?.()
            }}
            maxZoom={props.maxZoom}
          />
        )}
      </div>
      {props.images && (
        <div className={`${classPrefix}-footer`}>
          {props.renderFooter?.(props.images[defaultIndex], defaultIndex)}
          <SafeArea position='bottom' />
        </div>
      )}
    </Mask>
  )
  return renderToContainer(props.getContainer, node)
})
