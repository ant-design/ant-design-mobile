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
  const Wrapper = forwardRef<ImageViewerShowHandler>((_, ref) => {
    const [visible, setVisible] = useState(false)
    const closedRef = useRef(false)
    useEffect(() => {
      if (!closedRef.current) {
        setVisible(true)
      } else {
        handleAfterClose()
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
  const ref = createRef<ImageViewerShowHandler>()
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

export const getH = () => {
  console.log(handlerSet)
}
