import React, {
  useState,
  useEffect,
  ReactNode,
  forwardRef,
  useImperativeHandle,
} from 'react'
import Popup, { PopupProps } from '../popup'
import {
  CascaderValue,
  CascaderValueExtend,
  CascaderOption,
} from '../cascader-view'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import CascaderView from '../cascader-view'
import { useConfig } from '../config-provider'
import { useCascaderValueExtend } from '../cascader-view/use-cascader-value-extend'

const classPrefix = `adm-cascader`

export type CascaderActions = {
  open: () => void
  close: () => void
  toggle: () => void
}
export type CascaderRef = CascaderActions

export type CascaderProps = {
  options: CascaderOption[]
  value?: CascaderValue[]
  defaultValue?: CascaderValue[]
  placeholder?: string
  onSelect?: (value: CascaderValue[], extend: CascaderValueExtend) => void
  onConfirm?: (value: CascaderValue[], extend: CascaderValueExtend) => void
  onCancel?: () => void
  onClose?: () => void
  visible?: boolean
  title?: ReactNode
  confirmText?: ReactNode
  cancelText?: ReactNode
  children?: (
    items: (CascaderOption | null)[],
    actions: CascaderActions
  ) => ReactNode
  onTabsChange?: (index: number) => void
} & Pick<
  PopupProps,
  | 'getContainer'
  | 'afterShow'
  | 'afterClose'
  | 'onClick'
  | 'stopPropagation'
  | 'destroyOnClose'
  | 'forceRender'
> &
  NativeProps

const defaultProps = {
  defaultValue: [],
  destroyOnClose: true,
  forceRender: false,
}

export const Cascader = forwardRef<CascaderRef, CascaderProps>((p, ref) => {
  const { locale } = useConfig()
  const props = mergeProps(
    defaultProps,
    {
      confirmText: locale.common.confirm,
      cancelText: locale.common.cancel,
      placeholder: locale.Cascader.placeholder,
    },
    p
  )

  const [visible, setVisible] = usePropsValue({
    value: props.visible,
    defaultValue: false,
    onChange: v => {
      if (v === false) {
        props.onClose?.()
      }
    },
  })

  const actions: CascaderActions = {
    toggle: () => {
      setVisible(v => !v)
    },
    open: () => {
      setVisible(true)
    },
    close: () => {
      setVisible(false)
    },
  }

  useImperativeHandle(ref, () => actions)

  const [value, setValue] = usePropsValue({
    ...props,
    onChange: val => {
      props.onConfirm?.(val, generateValueExtend(val))
    },
  })

  const generateValueExtend = useCascaderValueExtend(props.options)

  const [innerValue, setInnerValue] = useState<CascaderValue[]>(value)
  useEffect(() => {
    if (!visible) {
      setInnerValue(value)
    }
  }, [visible])
  useEffect(() => {
    if (!visible) {
      setInnerValue(value)
    }
  }, [value])

  const cascaderElement = withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-header`}>
        <a
          className={`${classPrefix}-header-button`}
          onClick={() => {
            props.onCancel?.()
            setVisible(false)
          }}
        >
          {props.cancelText}
        </a>
        <div className={`${classPrefix}-header-title`}>{props.title}</div>
        <a
          className={`${classPrefix}-header-button`}
          onClick={() => {
            setValue(innerValue, true)
            setVisible(false)
          }}
        >
          {props.confirmText}
        </a>
      </div>
      <div className={`${classPrefix}-body`}>
        <CascaderView
          {...props}
          value={innerValue}
          onChange={(val, ext) => {
            setInnerValue(val)
            if (visible) {
              props.onSelect?.(val, ext)
            }
          }}
        />
      </div>
    </div>
  )

  const popupElement = (
    <Popup
      visible={visible}
      position='bottom'
      onMaskClick={() => {
        props.onCancel?.()
        setVisible(false)
      }}
      getContainer={props.getContainer}
      destroyOnClose={props.destroyOnClose}
      forceRender={props.forceRender}
      afterShow={props.afterShow}
      afterClose={props.afterClose}
      onClick={props.onClick}
      stopPropagation={props.stopPropagation}
    >
      {cascaderElement}
    </Popup>
  )

  return (
    <>
      {popupElement}
      {props.children?.(generateValueExtend(value).items, actions)}
    </>
  )
})
