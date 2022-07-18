import React, { FC, ReactNode, useCallback, useMemo } from 'react'
import PickerView from '../picker-view'
import type { PickerValue, PickerViewProps } from '../picker-view'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import {
  generateDatePickerColumns,
  convertDateToStringArray,
  convertStringArrayToDate,
  defaultRenderLabel,
} from '../date-picker/date-picker-utils'
import type {
  Precision,
  DatePickerFilter,
} from '../date-picker/date-picker-utils'

export type DatePickerViewProps = Pick<
  PickerViewProps,
  'style' | 'mouseWheel' | 'loading' | 'loadingContent'
> & {
  value?: Date
  defaultValue?: Date
  onChange?: (value: Date) => void
  min?: Date
  max?: Date
  precision?: Precision
  renderLabel?: (type: Precision, data: number) => ReactNode
  filter?: DatePickerFilter
} & NativeProps

const thisYear = new Date().getFullYear()

const defaultProps = {
  min: new Date(new Date().setFullYear(thisYear - 10)),
  max: new Date(new Date().setFullYear(thisYear + 10)),
  precision: 'day',
  renderLabel: defaultRenderLabel,
}

export const DatePickerView: FC<DatePickerViewProps> = p => {
  const props = mergeProps(defaultProps, p)

  const [value, setValue] = usePropsValue<Date | null>({
    value: props.value,
    defaultValue: props.defaultValue ?? null,
  })

  const pickerValue = useMemo(
    () => convertDateToStringArray(value, props.precision),
    [value, props.precision]
  )

  const onChange = useCallback(
    (val: PickerValue[]) => {
      const date = convertStringArrayToDate(val, props.precision)
      if (date) {
        setValue(date)
        props.onChange?.(date)
      }
    },
    [props.onChange, props.precision]
  )

  return withNativeProps(
    props,
    <PickerView
      columns={selected =>
        generateDatePickerColumns(
          selected as string[],
          props.min,
          props.max,
          props.precision,
          props.renderLabel,
          props.filter
        )
      }
      loading={props.loading}
      loadingContent={props.loadingContent}
      value={pickerValue}
      mouseWheel={props.mouseWheel}
      onChange={onChange}
    />
  )
}
