import React, { useState, useEffect, ReactNode, memo } from 'react'
import Popup, { PopupProps } from '../popup'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import {
  PickerColumn,
  PickerColumnItem,
  PickerValue,
  PickerValueExtend,
} from './index'
import PickerView from '../picker-view'
import { useColumns } from '../picker-view/use-columns'
import { useConfig } from '../config-provider'
import { usePickerValueExtend } from '../picker-view/use-picker-value-extend'
import { useMemoizedFn } from 'ahooks'
import SafeArea from '../safe-area'

const classPrefix = `adm-picker`

export type PickerProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  onSelect?: (value: PickerValue[], extend: PickerValueExtend) => void
  onConfirm?: (value: PickerValue[], extend: PickerValueExtend) => void
  onCancel?: () => void
  onClose?: () => void
  visible?: boolean
  title?: ReactNode
  confirmText?: ReactNode
  cancelText?: ReactNode
  children?: (items: (PickerColumnItem | null)[]) => ReactNode
} & Pick<
  PopupProps,
  'getContainer' | 'afterShow' | 'afterClose' | 'onClick' | 'stopPropagation'
> &
  NativeProps

const defaultProps = {
  defaultValue: [],
}

export const Picker = memo<PickerProps>(p => {
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
    ...props,
    onChange: val => {
      props.onConfirm?.(val, generateValueExtend(val))
    },
  })

  // TODO: columns generated twice in Picker and PickerView, which can be improved
  const columns = useColumns(props.columns, value)
  const generateValueExtend = usePickerValueExtend(columns)

  const [innerValue, setInnerValue] = useState<PickerValue[]>(value)
  useEffect(() => {
    if (innerValue !== value) {
      setInnerValue(value)
    }
  }, [props.visible])
  useEffect(() => {
    if (!props.visible) {
      setInnerValue(value)
    }
  }, [value])

  const onChange = useMemoizedFn((val, ext) => {
    setInnerValue(val)
    if (props.visible) {
      props.onSelect?.(val, ext)
    }
  })

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
          columns={props.columns}
          value={innerValue}
          onChange={onChange}
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
      forceRender={true}
      stopPropagation={props.stopPropagation}
    >
      {pickerElement}
      <SafeArea position='bottom' />
    </Popup>
  )

  return (
    <>
      {popupElement}
      {props.children?.(generateValueExtend(value).items)}
    </>
  )
})

Picker.displayName = 'Picker'
