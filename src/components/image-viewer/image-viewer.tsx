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
  image: string
  maxZoom?: number | 'auto'
  getContainer?: GetContainer
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
  renderFooter?: (image: string) => ReactNode
  imageRender?: (image: string, { index }: { index: number }) => ReactNode
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

export const ImageViewer: FC<ImageViewerProps> = p => {
  const props = mergeProps(defaultProps, p)

  const node = (
    <Mask
      visible={props.visible}
      disableBodyScroll={false}
      opacity='thick'
      afterClose={props.afterClose}
      destroyOnClose
      className={props?.classNames?.mask}
    >
      <div
        className={classNames(
          `${classPrefix}-content`,
          props?.classNames?.body
        )}
      >
        {(props.image || typeof props.imageRender === 'function') && (
          <Slide
            image={props.image}
            onTap={props.onClose}
            maxZoom={props.maxZoom}
            imageRender={props.imageRender}
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
  'image' | 'renderFooter' | 'imageRender'
> & {
  images?: string[]
  defaultIndex?: number
  onIndexChange?: (index: number) => void
  renderFooter?: (image: string, index: number) => ReactNode
  imageRender?: (image: string, { index }: { index: number }) => ReactNode
  dir?: 'ltr' | 'rtl' | 'auto'
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
      props.onIndexChange?.(newIndex)
    },
    [props.onIndexChange, index]
  )

  const node = (
    <Mask
      visible={props.visible}
      disableBodyScroll={false}
      opacity='thick'
      afterClose={props.afterClose}
      destroyOnClose
      className={props?.classNames?.mask}
    >
      <div
        className={classNames(
          `${classPrefix}-content`,
          props?.classNames?.body
        )}
      >
        {props.images && (
          <Slides
            dir={props.dir || 'auto'}
            ref={slidesRef}
            defaultIndex={index}
            onIndexChange={onSlideChange}
            images={props.images}
            onTap={props.onClose}
            maxZoom={props.maxZoom}
            imageRender={props.imageRender}
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
  )
  return renderToContainer(props.getContainer, node)
})
