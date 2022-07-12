import React from 'react'
import {
  ImageViewerProps,
  ImageViewer,
  MultiImageViewerProps,
  MultiImageViewer,
} from './image-viewer'
import { renderImperatively } from '../../utils/render-imperatively'

export type ImageViewerShowHandler = {
  close: () => void
}

const handlerSet = new Set<ImageViewerShowHandler>()

export function showImageViewer(props: Omit<ImageViewerProps, 'visible'>) {
  clearImageViewer()
  const handler: ImageViewerShowHandler = renderImperatively(
    <ImageViewer
      {...props}
      afterClose={() => {
        handlerSet.delete(handler)
        props.afterClose?.()
      }}
    />
  )
  handlerSet.add(handler)
  return handler
}

export function showMultiImageViewer(
  props: Omit<MultiImageViewerProps, 'visible'>
) {
  clearImageViewer()
  const handler: ImageViewerShowHandler = renderImperatively(
    <MultiImageViewer
      {...props}
      afterClose={() => {
        handlerSet.delete(handler)
        props.afterClose?.()
      }}
    />
  )
  handlerSet.add(handler)
  return handler
}

export function clearImageViewer() {
  handlerSet.forEach(handler => {
    handler.close()
  })
  handlerSet.clear()
}
