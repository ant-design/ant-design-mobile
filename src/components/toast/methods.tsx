import React, { useCallback, useEffect, useState } from 'react'
import { noop } from '../../utils/noop'
import { resolveContainer } from '../../utils/get-container'
import ReactDOM from 'react-dom'
import { useUpdateEffect } from 'ahooks'
import { InternalToast, ToastProps } from './toast'

const toastArray: (() => void)[] = []

export type ToastShowProps = Omit<ToastProps, 'visible'>

export function show(propsOrString: ToastShowProps | string) {
  const props =
    typeof propsOrString === 'string'
      ? { content: propsOrString }
      : propsOrString
  let timer = 0
  const { afterClose = noop, getContainer = () => document.body } = props
  const container = document.createElement('div')
  const bodyContainer = resolveContainer(getContainer)
  bodyContainer.appendChild(container)

  const TempToast = () => {
    const [visible, setVisible] = useState(true)
    const [state, setState] = useState({ duration: 2000, ...props })

    // clearDOM after animation
    const _afterClose = () => {
      afterClose()
      const unmountResult = ReactDOM.unmountComponentAtNode(container)
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container)
      }
    }

    // close with animation
    const destroy = useCallback(() => {
      setVisible(false)
    }, [])

    useEffect(() => {
      _clear()
      toastArray.push(_afterClose)
    }, [])

    useEffect(() => {
      if (state.duration !== 0 && 'duration' in state) {
        timer = window.setTimeout(destroy, state.duration)
      }
      return () => {
        if (timer !== 0) {
          window.clearTimeout(timer)
        }
      }
    }, [])

    // 当修改 duration 时，重新计时
    useUpdateEffect(() => {
      if ('duration' in state) {
        window.clearTimeout(timer)
        timer = window.setTimeout(destroy, state.duration)
      }
    }, [state.duration])

    return (
      <InternalToast
        {...state}
        getContainer={() => container}
        visible={visible}
        afterClose={_afterClose}
      />
    )
  }
  ReactDOM.render(<TempToast />, container)
}

// 同步的销毁
function _clear() {
  let fn = toastArray.pop()
  while (fn) {
    fn()
    fn = toastArray.pop()
  }
}

// 针对 toast 还没弹出来就立刻销毁的情况，将销毁放到下一个 event loop 中，避免销毁失败。
export function clear() {
  setTimeout(_clear)
}
