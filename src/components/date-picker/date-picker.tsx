import React, { FC, ReactNode, useCallback, useMemo } from 'react'
import { useMemoizedFn } from 'ahooks'
import Picker from '../picker'
import type { PickerProps, PickerValue, PickerColumn } from '../picker'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import {
  convertDateToStringArray,
  convertStringArrayToDate,
  generateDatePickerColumns,
  defaultRenderLabel,
} from './date-picker-utils'
import type { Precision, DatePickerFilter } from './date-picker-utils'
import { bound } from '../../utils/bound'

export type DatePickerProps = Pick<
  PickerProps,
  | 'onCancel'
  | 'onClose'
  | 'closeOnMaskClick'
  | 'visible'
  | 'confirmText'
  | 'cancelText'
  | 'getContainer'
  | 'afterShow'
  | 'afterClose'
  | 'onClick'
  | 'title'
  | 'stopPropagation'
  | 'style'
  | 'mouseWheel'
> & {
  value?: Date | null
  defaultValue?: Date | null
  onSelect?: (value: Date) => void
  onConfirm?: (value: Date) => void
  min?: Date
  max?: Date
  precision?: Precision
  children?: (value: Date | null) => ReactNode
  renderLabel?: (type: Precision, data: number) => ReactNode
  filter?: DatePickerFilter
} & NativeProps

const thisYear = new Date().getFullYear()

const defaultProps = {
  min: new Date(new Date().setFullYear(thisYear - 10)),
  max: new Date(new Date().setFullYear(thisYear + 10)),
  precision: 'day',
  renderLabel: defaultRenderLabel,
  defaultValue: null as Date | null,
}

export const DatePicker: FC<DatePickerProps> = p => {
  const props = mergeProps(defaultProps, p)

  const [value, setValue] = usePropsValue<Date | null>({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: v => {
      if (v === null) return
      props.onConfirm?.(v)
    },
  })

  const now = useMemo(() => new Date(), [])

  const pickerValue = useMemo(() => {
    let date = value ?? now
    date = new Date(
      bound(date.getTime(), props.min.getTime(), props.max.getTime())
    )
    return convertDateToStringArray(date, props.precision)
  }, [value, props.precision, props.min, props.max])

  const onConfirm = useCallback(
    (val: PickerValue[]) => {
      setValue(convertStringArrayToDate(val, props.precision))
    },
    [setValue, props.precision]
  )

  const onSelect = useMemoizedFn((val: PickerValue[]) => {
    const date = convertStringArrayToDate(val, props.precision)
    props.onSelect?.(date)
  })

  const columns = useCallback<(value: PickerValue[]) => PickerColumn[]>(
    selected =>
      generateDatePickerColumns(
        selected as string[],
        props.min,
        props.max,
        props.precision,
        props.renderLabel,
        props.filter
      ),
    [props.min, props.max, props.precision, props.renderLabel]
  )

  return withNativeProps(
    props,
    <Picker
      columns={columns}
      value={pickerValue}
      onCancel={props.onCancel}
      onClose={props.onClose}
      closeOnMaskClick={props.closeOnMaskClick}
      visible={props.visible}
      confirmText={props.confirmText}
      cancelText={props.cancelText}
      onConfirm={onConfirm}
      onSelect={onSelect}
      getContainer={props.getContainer}
      afterShow={props.afterShow}
      afterClose={props.afterClose}
      onClick={props.onClick}
      title={props.title}
      stopPropagation={props.stopPropagation}
      mouseWheel={props.mouseWheel}
    >
      {() => props.children?.(value)}
    </Picker>
  )
}
