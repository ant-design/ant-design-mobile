import React, {
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import type { FieldNamesType } from '../../hooks'
import { useFieldNames } from '../../hooks'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import CascaderView, {
  CascaderOption,
  CascaderValue,
  CascaderValueExtend,
} from '../cascader-view'
import { useCascaderValueExtend } from '../cascader-view/use-cascader-value-extend'
import { useConfig } from '../config-provider'
import Popup, { PopupProps } from '../popup'

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
  loading?: boolean
  children?: (
    items: (CascaderOption | null)[],
    actions: CascaderActions
  ) => ReactNode
  onTabsChange?: (index: number) => void
  activeIcon?: ReactNode
  fieldNames?: FieldNamesType
  prefixCls?: string
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
  const { locale, getPrefixCls } = useConfig()
  const props = mergeProps(
    defaultProps,
    {
      confirmText: locale.common.confirm,
      cancelText: locale.common.cancel,
      placeholder: locale.Cascader.placeholder,
    },
    p
  )
  const prefixCls = getPrefixCls('cascader', props.prefixCls)

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

  const [, valueName, childrenName] = useFieldNames(props.fieldNames)
  const generateValueExtend = useCascaderValueExtend(props.options, {
    valueName,
    childrenName,
  })

  const [innerValue, setInnerValue] = useState<CascaderValue[]>(value)

  useEffect(() => {
    if (!visible) {
      setInnerValue(value)
    }
  }, [visible, value])

  const cascaderElement = withNativeProps(
    props,
    <div className={prefixCls}>
      <div className={`${prefixCls}-header`}>
        <a
          className={`${prefixCls}-header-button`}
          onClick={() => {
            props.onCancel?.()
            setVisible(false)
          }}
        >
          {props.cancelText}
        </a>
        <div className={`${prefixCls}-header-title`}>{props.title}</div>
        <a
          className={`${prefixCls}-header-button`}
          onClick={() => {
            setValue(innerValue, true)
            setVisible(false)
          }}
        >
          {props.confirmText}
        </a>
      </div>
      <div className={`${prefixCls}-body`}>
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
