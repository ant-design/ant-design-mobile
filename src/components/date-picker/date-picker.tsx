import React, { FC, ReactNode, useCallback, useMemo } from 'react'
import Picker, { PickerProps } from '../picker'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import {
  Precision,
  convertDateToStringArray,
  convertStringArrayToDate,
  generateDatePickerColumns,
  defaultRenderLabel,
} from './date-picker-utils'

export type DatePickerProps = Pick<
  PickerProps,
  | 'onCancel'
  | 'onClose'
  | 'visible'
  | 'confirmText'
  | 'cancelText'
  | 'getContainer'
  | 'afterShow'
  | 'afterClose'
  | 'onClick'
  | 'title'
  | 'stopPropagation'
> & {
  value?: Date
  defaultValue?: Date
  onSelect?: (value: Date) => void
  onConfirm?: (value: Date) => void
  min?: Date
  max?: Date
  precision?: Precision
  children?: (value: Date | null) => ReactNode
  renderLabel?: (type: Precision, data: number) => ReactNode
} & NativeProps

const thisYear = new Date().getFullYear()

const defaultProps = {
  min: new Date(new Date().setFullYear(thisYear - 10)),
  max: new Date(new Date().setFullYear(thisYear + 10)),
  precision: 'day',
  renderLabel: defaultRenderLabel,
}

export const DatePicker: FC<DatePickerProps> = p => {
  const props = mergeProps(defaultProps, p)

  const [value, setValue] = usePropsValue<Date | null>({
    value: props.value,
    defaultValue: props.defaultValue ?? null,
    onChange: props.onConfirm,
  })

  const pickerValue = useMemo(
    () => convertDateToStringArray(value, props.precision),
    [value, props.precision]
  )

  const onConfirm = useCallback(
    (val: string[]) => {
      setValue(convertStringArrayToDate(val, props.precision))
    },
    [setValue, props.precision]
  )

  const onSelect = useCallback(
    (val: string[]) => {
      const date = convertStringArrayToDate(val, props.precision)
      if (date) {
        props.onSelect?.(date)
      }
    },
    [props.onSelect, props.precision]
  )

  return withNativeProps(
    props,
    <Picker
      columns={selected =>
        generateDatePickerColumns(
          selected as string[],
          props.min,
          props.max,
          props.precision,
          props.renderLabel
        )
      }
      value={pickerValue}
      onCancel={props.onCancel}
      onClose={props.onClose}
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
    >
      {items =>
        props.children?.(
          convertStringArrayToDate(
            items.map(item => item?.value),
            props.precision
          )
        )
      }
    </Picker>
  )
}
