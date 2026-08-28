import React from 'react'
import {
  ImperativeHandler,
  renderImperatively,
} from '../../utils/render-imperatively'
import { mergeProps } from '../../utils/with-default-props'
import { InternalToast, ToastProps } from './toast'

let currentHandler: ImperativeHandler | null = null
let currentTimeout: number | null = null
let currentKey = 0

export type ToastShowProps = Omit<ToastProps, 'visible'>

const defaultProps = {
  duration: 2000,
  position: 'center',
  maskClickable: true,
}

export type ToastHandler = {
  close: () => void
}

const ToastInner = (
  props: ToastShowProps & {
    onClose?: () => void
  }
) => <InternalToast {...props} />

export function show(p: ToastShowProps | string) {
  const key = ++currentKey
  const props = mergeProps(
    defaultProps,
    typeof p === 'string' ? { content: p } : p
  )

  const element = (
    <ToastInner
      {...props}
      onClose={() => {
        if (key === currentKey) {
          currentHandler = null
        }
      }}
    />
  )
  if (currentHandler) {
    if (currentHandler.isRendered?.()) {
      currentHandler.replace(element)
    } else {
      currentHandler.close()
      currentHandler = renderImperatively(element)
    }
  } else {
    currentHandler = renderImperatively(element)
  }

  if (currentTimeout) {
    window.clearTimeout(currentTimeout)
  }
  if (props.duration !== 0) {
    currentTimeout = window.setTimeout(() => {
      clear()
    }, props.duration)
  }

  const handler = currentHandler
  return {
    close: () => {
      if (key === currentKey) {
        handler.close()
      }
    },
  } as ToastHandler
}

export function clear() {
  currentKey++
  currentHandler?.close()
  currentHandler = null
}

export function config(
  val: Pick<ToastProps, 'duration' | 'position' | 'maskClickable'>
) {
  if (val.duration !== undefined) {
    defaultProps.duration = val.duration
  }
  if (val.position !== undefined) {
    defaultProps.position = val.position
  }
  if (val.maskClickable !== undefined) {
    defaultProps.maskClickable = val.maskClickable
  }
}
