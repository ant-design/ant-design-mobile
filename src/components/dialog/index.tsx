import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import {noop} from '../../utils/noop'
import {resolveContainer} from '../../utils/get-container'
import Button from '../button'
import Mask from '../mask'

const classPrefix = `am-dialog`

export interface DialogBtnProps {
  loading?: boolean
  disabled?: boolean
}
export interface DialogProps {
  /** Dialog 完全关闭后的回调 */
  afterClose?: () => void
  /** 顶部图片 url */
  headerImage?: string
  /** 是否等待图片加载完毕后再弹出对话框，默认为 true */
  waitImageLoad?: boolean
  /** Dialog 内容样式 */
  bodyStyle?: React.CSSProperties
  /** Dialog 内容类名 */
  bodyClassName?: string
  /** Dialog 遮罩样式 */
  maskStyle?: React.CSSProperties
  /** Dialog 遮罩类名 */
  maskClassName?: string
  /** 对话框标题 */
  title?: React.ReactNode
  /** 对话框提示文字 */
  content?: React.ReactNode
  /** 取消的文字 */
  cancelText?: React.ReactNode
  /** 点击取消的回调 */
  onCancel?: (
    e: React.MouseEvent
  ) =>
    | void
    | Boolean
    | Promise<Boolean>
    | Promise<void>
    | Promise<void | Boolean>
  /** 取消按钮的状态 */
  cancelProps?: DialogBtnProps
  /** 确认的文字 */
  okText?: React.ReactNode
  /** 确认按钮的状态 */
  okProps?: DialogBtnProps
  /** 点击确认的回调 */
  onOk?: (
    e: React.MouseEvent
  ) =>
    | void
    | Boolean
    | Promise<Boolean>
    | Promise<void>
    | Promise<void | Boolean>
  /** 是否支持点击遮罩关闭对话框 */
  maskClosable?: boolean
  /** 是否展示 */
  visible?: boolean
  /** 自定义挂载父容器、默认为 document.body */
  getContainer?: HTMLElement | (() => HTMLElement) | undefined
}

export type AlertProps = Omit<DialogProps, 'okText' | 'okProps' | 'onOk'>

const InternalDialog: React.FC<DialogProps> = props => {
  return (
    <Mask
      visible={props.visible}
      destroyOnClose
      getContainer={props.getContainer}
      afterClose={props.afterClose}
      onMaskClick={
        props.maskClosable && !props.cancelProps?.loading
          ? props.onCancel
          : noop
      }
      style={props.maskStyle}
      className={classNames(`${classPrefix}-mask`, props.maskClassName)}
    >
      <div onClick={e => e.stopPropagation()} className={`${classPrefix}-wrap`}>
        {Boolean(props.headerImage) && (
          <div className={`${classPrefix}-image`}>
            <img src={props.headerImage} alt='inside dialog' />
          </div>
        )}
        <div
          style={props.bodyStyle}
          className={classNames(`${classPrefix}-body`, props.bodyClassName)}
        >
          {Boolean(props.title) && (
            <div className={`${classPrefix}-body-title`}>{props.title}</div>
          )}
          {Boolean(props.content) && (
            <div className={`${classPrefix}-body-message-wrapper`}>
              <div
                className={classNames(`${classPrefix}-body-message`, {
                  [`${classPrefix}-body-message-with-title`]: !!props.title,
                })}
              >
                {props.content}
              </div>
            </div>
          )}
        </div>
        <div className={`${classPrefix}-footer`}>
          <Button
            onClick={props.cancelProps?.loading ? noop : props.onCancel}
            className={`${classPrefix}-btn-cancel`}
            fill='none'
            block
            loading={props.cancelProps?.loading}
            disabled={props.cancelProps?.disabled}
          >
            {props.cancelText || (props.okText ? '取消' : '我知道了')}
          </Button>
          {Boolean(props.okText) && (
            <Button
              onClick={props.okProps?.loading ? noop : props.onOk}
              loading={props.okProps?.loading}
              fill='none'
              block
              disabled={props.okProps?.disabled}
              className={`${classPrefix}-btn-ok`}
            >
              {props.okText || '确认'}
            </Button>
          )}
        </div>
      </div>
    </Mask>
  )
}

type DialogType = {
  show: (props: DialogProps) => void
  confirm: (props: DialogProps) => Promise<boolean>
  alert: (props: DialogProps) => Promise<React.MouseEvent>
}

const Dialog = {} as DialogType

// 可返回用于销毁此弹窗的方法
Dialog.show = (props: DialogProps) => {
  const {
    afterClose,
    onCancel = noop,
    onOk = noop,
    cancelProps,
    okProps,
    ...restProps
  } = props

  const userContainer = resolveContainer(props.getContainer)
  const container = document.createElement('div')
  userContainer.appendChild(container)
  let destroy = noop

  const TempDialog = () => {
    const [cancelLoading, setCancelLoading] = useState(false)
    const [okLoading, setOkLoading] = useState(false)
    const [visible, setVisible] = useState(true)
    destroy = () => {
      setVisible(false)
      if (afterClose) {
        afterClose()
      }
    }

    const _afterClose = () => {
      const unmountResult = ReactDOM.unmountComponentAtNode(container)
      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container)
      }
    }
    const _onOk = async (e: React.MouseEvent) => {
      const i = setTimeout(() => setOkLoading(true))
      if ((await onOk(e)) !== false) {
        clearTimeout(i)
        destroy()
      } else {
        clearTimeout(i)
        setOkLoading(false)
      }
    }
    const _onCancel = async (e: React.MouseEvent) => {
      const i = setTimeout(() => setCancelLoading(true))
      if ((await onCancel(e)) !== false) {
        clearTimeout(i)
        destroy()
      } else {
        clearTimeout(i)
        setCancelLoading(false)
      }
    }
    return (
      <InternalDialog
        {...restProps}
        visible={visible}
        getContainer={() => container}
        cancelProps={{loading: cancelLoading, ...cancelProps}}
        okProps={{loading: okLoading, ...okProps}}
        onCancel={_onCancel}
        onOk={_onOk}
        afterClose={_afterClose}
      />
    )
  }
  if (props.headerImage && props.waitImageLoad !== false) {
    const preloadImage = new Image()
    preloadImage.src = props.headerImage
    preloadImage.onload = () => {
      ReactDOM.render(<TempDialog />, container)
    }
  } else {
    ReactDOM.render(<TempDialog />, container)
  }

  return destroy
}
// 可使用 async/await 的方式
Dialog.alert = (props: AlertProps) => {
  const {onCancel = noop} = props
  return new Promise(resolve => {
    Dialog.show({
      ...props,
      // 强制不现实 OK Btn
      okText: undefined,
      onOk: noop,
      onCancel: e => {
        onCancel(e)
        resolve(e)
      },
    })
  })
}
Dialog.confirm = (props: DialogProps) => {
  const {onCancel = noop, onOk = noop} = props
  return new Promise((resolve, reject) => {
    Dialog.show({
      // 强制显示 OK Btn
      okText: '确认',
      ...props,
      onCancel: e => {
        onCancel(e)
        resolve(false)
      },
      onOk: e => {
        onOk(e)
        resolve(true)
      },
    })
  })
}

export default Dialog
