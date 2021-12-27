import React, { useState, useEffect, ReactNode, FC } from 'react'
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
  children?: (items: (CascaderOption | null)[]) => ReactNode
} & Pick<
  PopupProps,
  'getContainer' | 'afterShow' | 'afterClose' | 'onClick' | 'stopPropagation'
> &
  NativeProps

const defaultProps = {
  defaultValue: [],
}

export const Cascader: FC<CascaderProps> = p => {
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

  const [value, setValue] = usePropsValue({
    ...props,
    onChange: val => {
      props.onConfirm?.(val, generateValueExtend(val))
    },
  })

  const generateValueExtend = useCascaderValueExtend(props.options)

  const [innerValue, setInnerValue] = useState<CascaderValue[]>(value)
  useEffect(() => {
    if (!props.visible) {
      setInnerValue(value)
    }
  }, [props.visible])
  useEffect(() => {
    if (!props.visible) {
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
            props.onClose?.()
          }}
        >
          {props.cancelText}
        </a>
        <div className={`${classPrefix}-header-title`}>{props.title}</div>
        <a
          className={`${classPrefix}-header-button`}
          onClick={() => {
            setValue(innerValue)
            props.onClose?.()
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
            if (props.visible) {
              props.onSelect?.(val, ext)
            }
          }}
        />
      </div>
    </div>
  )

  const popupElement = (
    <Popup
      visible={props.visible}
      position='bottom'
      onMaskClick={() => {
        props.onCancel?.()
        props.onClose?.()
      }}
      getContainer={props.getContainer}
      destroyOnClose
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
      {props.children?.(generateValueExtend(value).items)}
    </>
  )
}
