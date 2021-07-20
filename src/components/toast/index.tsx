import React, {useEffect, useMemo, useState, useCallback} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import {CheckOutlined, CloseOutlined} from '@ant-design/icons'
import {useUpdateEffect} from 'ahooks'
import {noop} from '../../utils/noop'
import Loading from '../loading'
import Mask from '../mask'

const classPrefix = `am-toast`

export interface ToastProps {
  /** Toast 完全关闭后的回调 */
  afterClose?: () => void
  /** Toast 遮罩样式 */
  maskStyle?: React.CSSProperties
  /** Toast 遮罩类名 */
  maskClassName?: string
  /** 是否允许背景点击 */
  maskClickable?: boolean
  /** toast 文本内容 */
  content?: string
  /** toast 图标 */
  icon?: React.ReactNode
  /** 提示持续时间，若为 0 则不会自动关闭 */
  duration?: number
  /** 垂直方向显示位置，默认为 center */
  position?: 'top' | 'bottom' | 'center'
  /** 是否显示 */
  visible?: boolean
  /** 轻提示弹出时的的父容器 */
  getContainer?: () => HTMLElement
}

const toastArray: Function[] = []

const InternalToast: React.FC<ToastProps> = props => {
  const {maskClickable = true, content, icon = null, position} = props
  const top = useMemo(() => {
    switch (position) {
      case 'top':
        return '20%'
      case 'bottom':
        return '80%'
      default:
        return '50%'
    }
  }, [position])

  return (
    <Mask
      visible={props.visible}
      destroyOnClose
      opacity={0}
      disableBodyScroll={!maskClickable}
      getContainer={props.getContainer}
      afterClose={props.afterClose}
      style={{
        pointerEvents: maskClickable ? 'none' : 'all',
        ...props.maskStyle,
      }}
      className={classNames(`${classPrefix}-mask`, props.maskClassName)}
    >
      <div
        style={{top}}
        className={classNames(
          `${classPrefix}-wrap`,
          icon ? `${classPrefix}-wrap-icon` : `${classPrefix}-wrap-text`
        )}
      >
        {Boolean(icon) && <div className={`${classPrefix}-icon`}>{icon}</div>}
        {content}
      </div>
    </Mask>
  )
}

// 可返回用于销毁此弹窗的方法
function show(props: ToastProps) {
  let updateConfig: React.Dispatch<React.SetStateAction<ToastProps>> = () => {}
  let timer = 0
  const {afterClose = noop, getContainer = () => document.body} = props
  const container = document.createElement('div')
  const bodyContainer = getContainer()
  bodyContainer.appendChild(container)

  const TempToast = () => {
    const [visible, setVisible] = useState(true)
    const [state, setState] = useState({duration: 2000, ...props})

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

    updateConfig = useCallback(
      nextState =>
        setState(prev =>
          typeof nextState === 'function'
            ? {...prev, ...nextState(prev)}
            : {...prev, ...nextState}
        ),
      [setState]
    )

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

  return updateConfig
}

type ToastPropsWithoutIcon = Omit<ToastProps, 'icon'>

function success(props: ToastPropsWithoutIcon) {
  return show({
    icon: <CheckOutlined />,
    ...props,
  })
}

function fail(props: ToastPropsWithoutIcon) {
  return show({
    icon: <CloseOutlined />,
    ...props,
  })
}

function loading(props: ToastPropsWithoutIcon) {
  return show({
    icon: <Loading color='white' />,
    ...props,
  })
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
function clear() {
  setTimeout(_clear)
}

const Toast = {
  show,
  success,
  fail,
  loading,
  clear,
}

export default Toast
