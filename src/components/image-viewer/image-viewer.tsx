import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  GetContainer,
  renderToContainer,
} from '../../utils/render-to-container'
import { mergeProps } from '../../utils/with-default-props'
import Mask from '../mask'
import SafeArea from '../safe-area'
import { Slide } from './slide'
import { Slides, SlidesRef } from './slides'

const classPrefix = `adm-image-viewer`

export type ImageViewerProps = {
  image?: string
  maxZoom?: number | 'auto'
  getContainer?: GetContainer
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
  renderFooter?: (image: string) => ReactNode
  classNames?: {
    mask?: string
    body?: string
  }
}

const defaultProps = {
  maxZoom: 3,
  getContainer: null,
  visible: false,
}

export const ImageViewer: FC<ImageViewerProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)

  const node = (
    <Mask
      visible={mergedProps.visible}
      disableBodyScroll={false}
      opacity='thick'
      afterClose={mergedProps.afterClose}
      destroyOnClose
      className={mergedProps?.classNames?.mask}
    >
      <div
        className={classNames(
          `${classPrefix}-content`,
          mergedProps?.classNames?.body
        )}
      >
        {mergedProps.image && (
          <Slide
            image={mergedProps.image}
            onTap={mergedProps.onClose}
            maxZoom={mergedProps.maxZoom}
          />
        )}
      </div>
      {mergedProps.image && (
        <div className={`${classPrefix}-footer`}>
          {mergedProps.renderFooter?.(mergedProps.image)}
          <SafeArea position='bottom' />
        </div>
      )}
    </Mask>
  )
  return renderToContainer(mergedProps.getContainer, node)
}

export type MultiImageViewerRef = SlidesRef

export type MultiImageViewerProps = Omit<
  ImageViewerProps,
  'image' | 'renderFooter'
> & {
  images?: string[]
  defaultIndex?: number
  onIndexChange?: (index: number) => void
  renderFooter?: (image: string, index: number) => ReactNode
}

const multiDefaultProps = {
  ...defaultProps,
  defaultIndex: 0,
}

export const MultiImageViewer = forwardRef<
  MultiImageViewerRef,
  MultiImageViewerProps
>((props, ref) => {
  const mergedProps = mergeProps(multiDefaultProps, props)
  const [index, setIndex] = useState(mergedProps.defaultIndex)

  const slidesRef = useRef<SlidesRef>(null)
  useImperativeHandle(ref, () => ({
    swipeTo: (index: number, immediate?: boolean) => {
      setIndex(index)
      slidesRef.current?.swipeTo(index, immediate)
    },
  }))

  const onSlideChange = useCallback(
    (newIndex: number) => {
      if (newIndex === index) return
      setIndex(newIndex)
      mergedProps.onIndexChange?.(newIndex)
    },
    [mergedProps.onIndexChange, index]
  )

  const node = (
    <Mask
      visible={mergedProps.visible}
      disableBodyScroll={false}
      opacity='thick'
      afterClose={mergedProps.afterClose}
      destroyOnClose
      className={mergedProps?.classNames?.mask}
    >
      <div
        className={classNames(
          `${classPrefix}-content`,
          mergedProps?.classNames?.body
        )}
      >
        {mergedProps.images && (
          <Slides
            ref={slidesRef}
            defaultIndex={index}
            onIndexChange={onSlideChange}
            images={mergedProps.images}
            onTap={mergedProps.onClose}
            maxZoom={mergedProps.maxZoom}
          />
        )}
      </div>
      {mergedProps.images && (
        <div className={`${classPrefix}-footer`}>
          {mergedProps.renderFooter?.(mergedProps.images[index], index)}
          <SafeArea position='bottom' />
        </div>
      )}
    </Mask>
  )
  return renderToContainer(mergedProps.getContainer, node)
})
