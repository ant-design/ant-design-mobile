import React from 'react'
import { resolveContainer } from '../../utils/get-container'
import { InternalToast, ToastProps } from './toast'
import { mergeProps } from '../../utils/with-default-props'
import { renderImperatively } from '../../utils/render-imperatively'

export const closeFns = [] as (() => void)[]

export type ToastShowProps = Omit<ToastProps, 'visible'>

const defaultProps = {
  duration: 2000,
  position: 'center',
  maskClickable: true,
}

export type ToastHandler = {
  close: () => void
}

export function show(p: ToastShowProps | string) {
  const props = mergeProps(
    defaultProps,
    typeof p === 'string' ? { content: p } : p
  )
  let timer = 0
  const { getContainer = () => document.body } = props
  const bodyContainer = resolveContainer(getContainer)
  clear()

  const handler: ToastHandler = renderImperatively(
    <InternalToast
      {...props}
      afterClose={() => {
        props.afterClose?.()
      }}
    />,
    bodyContainer
  )

  closeFns.push(handler.close)

  if (props.duration !== 0) {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      handler.close()
    }, props.duration)
  }

  return handler
}

export function clear() {
  while (true) {
    const closeFn = closeFns.pop()
    if (!closeFn) break
    closeFn()
  }
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
