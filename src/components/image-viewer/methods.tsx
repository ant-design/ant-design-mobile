import React from 'react'
import { renderImperatively } from '../../utils/render-imperatively'
import {
  ImageViewer,
  ImageViewerProps,
  MultiImageViewer,
  MultiImageViewerProps,
} from './image-viewer'

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
