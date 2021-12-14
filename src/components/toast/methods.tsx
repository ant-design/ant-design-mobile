import React, { useEffect, useState } from 'react'
import { resolveContainer } from '../../utils/get-container'
import ReactDOM from 'react-dom'
import { InternalToast, ToastProps } from './toast'
import { mergeProps } from '../../utils/with-default-props'

const containers = [] as HTMLDivElement[]

function unmount(container: HTMLDivElement) {
  const unmountResult = ReactDOM.unmountComponentAtNode(container)
  if (unmountResult && container.parentNode) {
    container.parentNode.removeChild(container)
  }
}

export type ToastShowProps = Omit<ToastProps, 'visible'>

const defaultProps = {
  duration: 2000,
  position: 'center',
  maskClickable: true,
}

export function show(p: ToastShowProps | string) {
  const props = mergeProps(
    defaultProps,
    typeof p === 'string' ? { content: p } : p
  )
  let timer = 0
  const { getContainer = () => document.body } = props
  const container = document.createElement('div')
  const bodyContainer = resolveContainer(getContainer)
  bodyContainer.appendChild(container)
  clear()
  containers.push(container)

  const TempToast = () => {
    const [visible, setVisible] = useState(true)
    useEffect(() => {
      return () => {
        props.afterClose?.()
      }
    }, [])

    useEffect(() => {
      if (props.duration === 0) {
        return
      }
      timer = window.setTimeout(() => {
        setVisible(false)
      }, props.duration)
      return () => {
        window.clearTimeout(timer)
      }
    }, [])

    return (
      <InternalToast
        {...props}
        getContainer={() => container}
        visible={visible}
        afterClose={() => {
          unmount(container)
        }}
      />
    )
  }
  ReactDOM.render(<TempToast />, container)
}

export function clear() {
  while (true) {
    const container = containers.pop()
    if (!container) break
    unmount(container)
  }
}

export function config(val: {
  duration?: ToastProps['duration']
  position?: ToastProps['position']
  maskClickable?: ToastProps['maskClickable']
}) {
  if (typeof val.duration === 'number') {
    defaultProps.duration = val.duration
  }
  if (typeof val.position === 'string') {
    defaultProps.position = val.position
  }
  if (typeof val.maskClickable === 'boolean') {
    defaultProps.maskClickable = val.maskClickable
  }
}
