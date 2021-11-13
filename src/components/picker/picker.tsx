import React, { useState, useEffect, ReactNode, FC } from 'react'
import Popup, { PopupProps } from '../popup'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { PickerColumn, PickerColumnItem, PickerValue } from './index'
import PickerView from '../picker-view'
import { useColumns } from '../picker-view/use-columns'
import { useConfig } from '../config-provider'
import { useLazyMemo } from '../../utils/use-lazy-memo'

const classPrefix = `adm-picker`

type PickerValueContext = {
  items: (PickerColumnItem | null)[]
}

export type PickerProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  onSelect?: (value: PickerValue[], context: PickerValueContext) => void
  onConfirm?: (value: PickerValue[], context: PickerValueContext) => void
  onCancel?: () => void
  onClose?: () => void
  visible?: boolean
  title?: ReactNode
  confirmText?: string
  cancelText?: string
  children?: (items: (PickerColumnItem | null)[]) => ReactNode
} & Pick<
  PopupProps,
  'getContainer' | 'afterShow' | 'afterClose' | 'onClick' | 'stopPropagation'
> &
  NativeProps

const defaultProps = {
  defaultValue: [],
}

export const Picker: FC<PickerProps> = p => {
  const { locale } = useConfig()
  const props = mergeProps(
    defaultProps,
    {
      confirmText: locale.common.confirm,
      cancelText: locale.common.cancel,
    },
    p
  )

  const controllable = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: val => {
      props.onConfirm?.(val, context(val))
    },
  })
  const value = controllable[0] as PickerValue[]
  const setValue = controllable[1]

  const context: (val: PickerValue[]) => PickerValueContext = val => ({
    get items() {
      return getItems(val)
    },
  })

  const [innerValue, setInnerValue] = useState<PickerValue[]>(value)
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

  const innerColumns = useColumns(props.columns, innerValue)
  const columns = useColumns(props.columns, value)

  const pickerElement = withNativeProps(
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
        <PickerView
          columns={innerColumns}
          value={innerValue}
          onChange={val => {
            setInnerValue(val)
            if (props.visible) {
              props.onSelect?.(val, context(val))
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
      {pickerElement}
    </Popup>
  )

  const getItems = useLazyMemo(
    (val: PickerValue[]) => {
      return val.map((v, index) => {
        const column = columns[index]
        if (!column) return null
        return column.find(item => item.value === v) ?? null
      })
    },
    [columns]
  )

  return (
    <>
      {popupElement}
      {props.children?.(getItems(value))}
    </>
  )
}
