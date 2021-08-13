import React, { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { noop } from '../../utils/noop'
import { resolveContainer } from '../../utils/get-container'
import Button, { ButtonProps } from '../button'
import Mask from '../mask'
import { mergeProps } from '../../utils/with-default-props'
import { alert } from './alert'
import { confirm } from './confirm'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

const classPrefix = `am-dialog`

export type Action = {
  key: string | number
  text: string
  disabled?: boolean
  color?: ButtonProps['color']
  bold?: boolean
  onClick?: () => void | Promise<void>
}

export interface DialogBtnProps {
  loading?: boolean
  disabled?: boolean
}
export interface DialogProps {
  afterClose?: () => void
  headerImage?: string
  waitImageLoad?: boolean
  bodyStyle?: React.CSSProperties
  bodyClassName?: string
  maskStyle?: React.CSSProperties
  maskClassName?: string
  title?: React.ReactNode
  content?: React.ReactNode
  cancelText?: React.ReactNode
  actions?: (Action | Action[])[]
  onAction?: (action: Action) => void | Promise<void>
  closeOnAction?: boolean
  onClose?: () => void

  onCancel?: (
    e: React.MouseEvent
  ) =>
    | void
    | boolean
    | Promise<boolean>
    | Promise<void>
    | Promise<void | boolean>
  cancelProps?: DialogBtnProps
  okText?: React.ReactNode
  okProps?: DialogBtnProps
  onOk?: (
    e: React.MouseEvent
  ) =>
    | void
    | boolean
    | Promise<boolean>
    | Promise<void>
    | Promise<void | boolean>

  closeOnMaskClick?: boolean
  visible?: boolean
  getContainer?: HTMLElement | (() => HTMLElement) | undefined
}

const defaultProps = {
  actions: [],
  closeOnAction: false,
  closeOnMaskClick: false,
}

export type AlertProps = Omit<DialogProps, 'okText' | 'okProps' | 'onOk'>

export const InternalDialog: FC<DialogProps> = p => {
  const props = mergeProps(defaultProps, p)

  function renderAction(action: Action) {
    return (
      <Button
        key={action.key}
        onClick={() => {
          action.onClick?.()
          props.onAction?.(action)
          if (props.closeOnAction) {
            props.onClose?.()
          }
        }}
        className={classNames(`${classPrefix}-button`, {
          [`${classPrefix}-button-bold`]: action.bold,
        })}
        fill='none'
        block
        color={action.color ?? 'primary'}
        // loading={action.loading} TODO
        disabled={action.disabled}
      >
        {action.text}
      </Button>
    )
  }

  return (
    <Mask
      visible={props.visible}
      destroyOnClose
      getContainer={props.getContainer}
      afterClose={props.afterClose}
      onMaskClick={
        props.closeOnMaskClick && !props.cancelProps?.loading
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
          {props.actions.map((row, index) => {
            const actions = Array.isArray(row) ? row : [row]
            return (
              <div className={`${classPrefix}-action-row`} key={index}>
                {actions.map(renderAction)}
              </div>
            )
          })}
        </div>
      </div>
    </Mask>
  )
}

// 可返回用于销毁此弹窗的方法
function show(props: DialogProps) {
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
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      setVisible(true)
    }, [])
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
        cancelProps={{ loading: cancelLoading, ...cancelProps }}
        okProps={{ loading: okLoading, ...okProps }}
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

export default attachPropertiesToComponent(InternalDialog, {
  show,
  alert,
  confirm,
})
