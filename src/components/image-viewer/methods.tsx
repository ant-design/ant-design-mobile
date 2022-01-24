import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { renderToBody } from '../../utils/render-to-body'
import {
  ImageViewerProps,
  ImageViewer,
  MultiImageViewerProps,
  MultiImageViewer,
} from './image-viewer'
import { useUnmountedRef } from 'ahooks'

export type ImageViewerHandler = {
  close: () => void
}

const handlerSet = new Set<ImageViewerHandler>()

export function showImageViewer(props: Omit<ImageViewerProps, 'visible'>) {
  clearImageViewer()
  const Wrapper = forwardRef<ImageViewerHandler>((_, ref) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      setVisible(true)
    }, [])
    const isUnmountedRef = useUnmountedRef()
    useImperativeHandle(ref, () => ({
      close: () => {
        if (isUnmountedRef.current) return
        setVisible(false)
      },
    }))
    return (
      <ImageViewer
        {...props}
        visible={visible}
        onClose={() => {
          props.onClose?.()
          setVisible(false)
        }}
        afterClose={() => {
          props.afterClose?.()
          unmount()
        }}
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
    useEffect(() => {
      setVisible(true)
    }, [])
    const isUnmountedRef = useUnmountedRef()
    useImperativeHandle(ref, () => ({
      close: () => {
        if (isUnmountedRef.current) return
        setVisible(false)
      },
    }))
    return (
      <MultiImageViewer
        {...props}
        visible={visible}
        onClose={() => {
          props.onClose?.()
          setVisible(false)
        }}
        afterClose={() => {
          props.afterClose?.()
          unmount()
        }}
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
