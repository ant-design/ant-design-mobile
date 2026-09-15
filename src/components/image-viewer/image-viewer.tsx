import classNames from 'classnames'
import type { FC, ReactNode, RefObject } from 'react'
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
  imageRender?: (
    image: string,
    { ref, index }: { ref: RefObject<HTMLImageElement>; index: number }
  ) => ReactNode
  classNames?: {
    mask?: string
    body?: string
  }
  mask?: {
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
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
      afterClose={props?.afterClose}
      className={props?.classNames?.mask}
      onMaskClick={props.mask?.onClick}
      disableBodyScroll={false}
      opacity='thick'
      destroyOnClose
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
  imageRender?: (
    image: string,
    { ref, index }: { ref: RefObject<HTMLImageElement>; index: number }
  ) => ReactNode
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
  const viewportWidth = (function () {
    try {
      const host = props.getContainer && props.getContainer();
      if (host && host.getBoundingClientRect) {
        const w = host.getBoundingClientRect().width;
        if (w && w > 0) return w;
      }
    } catch (e) {}
    return typeof window !== 'undefined' ? window.innerWidth : 375;
  })();
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
      afterClose={props?.afterClose}
      className={props?.classNames?.mask}
      onMaskClick={props.mask?.onClick}
      disableBodyScroll={false}
      opacity='thick'
      destroyOnClose
    >
      <div
        className={classNames(
          `${classPrefix}-content`,
          props?.classNames?.body
        )}
      >
        {props.images && (
          <Slides
            ref={slidesRef}
            defaultIndex={index}
            onIndexChange={onSlideChange}
            images={props.images}
            onTap={props.onClose}
            maxZoom={props.maxZoom}
            imageRender={props.imageRender}
            viewportWidth={viewportWidth}
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
