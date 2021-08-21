import React, { useState, useEffect, ReactNode, useMemo, FC } from 'react'
import Popup, { PopupProps } from '../popup'
import { Column } from './column'
import { mergeProps, withDefaultProps } from '../../utils/with-default-props'
import { ElementProps } from '../../utils/element-props'
import classNames from 'classnames'
import { useNewControllableValue } from '../../utils/use-controllable-value'

const classPrefix = `am-picker`

export type PickerValue = string | null

export type PickerColumnItem = {
  label: string
  value: string
}

export type PickerColumn = (string | PickerColumnItem)[]

export type PickerProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  onSelect?: (value: PickerValue[]) => void
  onConfirm?: (value: PickerValue[]) => void
  onCancel?: () => void
  onClose?: () => void
  visible?: boolean
  confirmText?: string
  cancelText?: string
  children?: (items: (PickerColumnItem | null)[]) => ReactNode
} & Pick<PopupProps, 'getContainer' | 'afterShow' | 'afterClose' | 'onClick'> &
  ElementProps

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

  const columns = useMemo(() => {
    const columns =
      typeof props.columns === 'function'
        ? props.columns(innerValue)
        : props.columns
    return columns.map(column =>
      column.map(item =>
        typeof item === 'string'
          ? {
              label: item,
              value: item,
            }
          : item
      )
    )
  }, [props.columns, innerValue])

  const widget = (
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
      <div
        className={classNames(classPrefix, props.className)}
        style={props.style}
      >
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
        <div className={`${classPrefix}-columns`}>
          {columns.map((column, index) => (
            <Column
              key={index}
              column={column}
              value={innerValue[index]}
              onSelect={val => {
                setInnerValue(prev => {
                  const nextValue = [...prev]
                  nextValue[index] = val
                  props.onSelect?.(nextValue)
                  return nextValue
                })
              }}
            />
          ))}
          <div className={`${classPrefix}-mask ${classPrefix}-mask-top`} />
          <div className={`${classPrefix}-mask ${classPrefix}-mask-bottom`} />
        </div>
      </div>
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
      {widget}
      {props.children?.(items)}
    </>
  )
})
