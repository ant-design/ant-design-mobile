import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { resolveContainer } from '../../utils/get-container'
import ReactDOM from 'react-dom'
import { InternalToast, ToastProps } from './toast'
import { mergeProps } from '../../utils/with-default-props'
import {
  useConfig,
  getDefaultConfig,
} from 'antd-mobile/es/components/config-provider'

const containers = [] as HTMLDivElement[]

function unmount(container: HTMLDivElement) {
  const unmountResult = ReactDOM.unmountComponentAtNode(container)
  if (unmountResult && container.parentNode) {
    container.parentNode.removeChild(container)
  }
}

export type ToastShowProps = Omit<ToastProps, 'visible'>

const defaultProps: Partial<
  Pick<ToastProps, 'duration' | 'position' | 'maskClickable'>
> = {
  duration: undefined,
  position: undefined,
  maskClickable: undefined,
}

export type ToastHandler = {
  close: () => void
}

type ToastShowRef = ToastHandler

export function show(p: ToastShowProps | string) {
  const { globalConfig } = getDefaultConfig()
  let props = mergeProps(
    globalConfig.Toast,
    defaultProps,
    typeof p === 'string' ? { content: p } : p
  )
  props = mergeProps(props, { getContainer: globalConfig.getContainer })
  let timer = 0
  const { getContainer } = props
  const container = document.createElement('div')
  const bodyContainer = resolveContainer(getContainer)
  bodyContainer.appendChild(container)
  clear()
  containers.push(container)

  const TempToast = forwardRef<ToastShowRef>((_, ref) => {
    const {
      globalConfig: { getContainer, Toast },
    } = useConfig()
    props = mergeProps(props, { getContainer, ...Toast })
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

    useImperativeHandle(ref, () => ({
      close: () => setVisible(false),
    }))

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
  })

  const ref = createRef<ToastShowRef>()
  ReactDOM.render(<TempToast ref={ref} />, container)
  return {
    close: () => {
      ref.current?.close()
    },
  } as ToastHandler
}

export function clear() {
  while (true) {
    const container = containers.pop()
    if (!container) break
    unmount(container)
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
