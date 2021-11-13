import React, { useState, useEffect, ReactNode, FC, useMemo } from 'react'
import Popup, { PopupProps } from '../popup'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { PickerColumn, PickerColumnItem, PickerValue } from './index'
import PickerView from '../picker-view'
import { useColumns } from '../picker-view/use-columns'
import { useConfig } from '../config-provider'
import memoize from 'lodash/memoize'

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

  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: val => {
      props.onConfirm?.(val, generateContext(val))
    },
  })

  function generateContext(val: PickerValue[]): PickerValueContext {
    return {
      get items() {
        return generateItems(val)
      },
    }
  }

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
              props.onSelect?.(val, generateContext(val))
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

  const generateItems = useMemo(() => {
    return memoize(
      (val: PickerValue[]) => {
        return val.map((v, index) => {
          const column = columns[index]
          if (!column) return null
          return column.find(item => item.value === v) ?? null
        })
      },
      val => JSON.stringify(val)
    )
  }, [columns])

  return (
    <>
      {popupElement}
      {props.children?.(generateItems(value))}
    </>
  )
}
