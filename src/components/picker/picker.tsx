import React, { useState, useEffect, ReactNode, useMemo } from 'react'
import Popup, { PopupProps } from '../popup'
import { mergeProps, withDefaultProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { PickerColumn, PickerColumnItem, PickerValue } from './index'
import PickerView from '../picker-view'
import { useColumns } from '../picker-view/use-columns'

const classPrefix = `adm-picker`

export type PickerProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  onSelect?: (value: PickerValue[]) => void
  onConfirm?: (value: PickerValue[]) => void
  onCancel?: () => void
  onClose?: () => void
  visible?: boolean
  title?: ReactNode
  confirmText?: string
  cancelText?: string
  children?: (items: (PickerColumnItem | null)[]) => ReactNode
} & Pick<PopupProps, 'getContainer' | 'afterShow' | 'afterClose' | 'onClick'> &
  NativeProps

const defaultProps = {
  defaultValue: [],
}

export const Picker = withDefaultProps({
  confirmText: '确定',
  cancelText: '取消',
})<PickerProps>(p => {
  const props = mergeProps(defaultProps, p)
  const controllable = useNewControllableValue({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: props.onConfirm,
  })
  const value = controllable[0] as PickerValue[]
  const setValue = controllable[1]

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

  const columns = useColumns(props.columns, innerValue)

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
          columns={columns}
          value={innerValue}
          onChange={val => {
            setInnerValue(val)
            if(props.visible) {
              props.onSelect?.(val)
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
    >
      {pickerElement}
    </Popup>
  )

  const items = useMemo(() => {
    return value.map((v, index) => {
      const column = columns[index]
      if (!column) return null
      return column.find(item => item.value === v) ?? null
    })
  }, [value, columns])

  return (
    <>
      {popupElement}
      {props.children?.(items)}
    </>
  )
})
