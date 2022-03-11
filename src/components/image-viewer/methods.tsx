import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { renderToBody } from '../../utils/render-to-body'
import {
  ImageViewerProps,
  ImageViewer,
  MultiImageViewerProps,
  MultiImageViewer,
} from './image-viewer'

export type ImageViewerHandler = {
  close: () => void
}

const handlerSet = new Set<ImageViewerHandler>()

export function showImageViewer(props: Omit<ImageViewerProps, 'visible'>) {
  clearImageViewer()
  const Wrapper = forwardRef<ImageViewerHandler>((_, ref) => {
    const [visible, setVisible] = useState(false)
    const closedRef = useRef(false)
    useEffect(() => {
      if (!closedRef.current) {
        setVisible(true)
      }
    }, [])
    function handleClose() {
      closedRef.current = true
      props.onClose?.()
      setVisible(false)
    }
    useImperativeHandle(ref, () => ({
      close: handleClose,
    }))
    function handleAfterClose() {
      props.afterClose?.()
      unmount()
      handlerSet.delete(handler)
    }
    return (
      <ImageViewer
        {...props}
        visible={visible}
        onClose={handleClose}
        afterClose={handleAfterClose}
      />
    )
  })
  const ref = createRef<ImageViewerHandler>()
  const unmount = renderToBody(<Wrapper ref={ref} />)
  const handler = {
    close: () => {
      ref.current?.close()
    },
  }
  handlerSet.add(handler)
  return handler
}

export function showMultiImageViewer(
  props: Omit<MultiImageViewerProps, 'visible'>
) {
  clearImageViewer()
  const Wrapper = forwardRef<ImageViewerHandler>((_, ref) => {
    const [visible, setVisible] = useState(false)
    const closedRef = useRef(false)
    useEffect(() => {
      if (!closedRef.current) {
        setVisible(true)
      }
    }, [])
    function handleClose() {
      closedRef.current = true
      props.onClose?.()
      setVisible(false)
    }
    useImperativeHandle(ref, () => ({
      close: handleClose,
    }))
    function handleAfterClose() {
      props.afterClose?.()
      unmount()
      handlerSet.delete(handler)
    }
    return (
      <MultiImageViewer
        {...props}
        visible={visible}
        onClose={handleClose}
        afterClose={handleAfterClose}
      />
    )
  })
  const ref = createRef<ImageViewerHandler>()
  const unmount = renderToBody(<Wrapper ref={ref} />)
  const handler = {
    close: () => {
      ref.current?.close()
    },
  }
  handlerSet.add(handler)
  return handler
}

export function clearImageViewer() {
  handlerSet.forEach(handler => {
    handler.close()
  })
  handlerSet.clear()
}
