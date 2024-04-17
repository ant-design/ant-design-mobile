import type { FC, ReactNode } from 'react'
import React, { useCallback, useMemo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import type {
  DatePickerFilter,
  Precision,
} from '../date-picker/date-picker-utils'
import {
  convertDateToStringArray,
  convertStringArrayToDate,
  generateDatePickerColumns,
} from '../date-picker/date-picker-utils'
import type { PickerDate } from '../date-picker/util'
import { TILL_NOW } from '../date-picker/util'
import type { PickerValue, PickerViewProps } from '../picker-view'
import PickerView from '../picker-view'
import useRenderLabel from './useRenderLabel'

export type RenderLabel = (type: Precision | 'now', data: number) => ReactNode

export type DatePickerViewProps = Pick<
  PickerViewProps,
  'style' | 'mouseWheel' | 'loading' | 'loadingContent'
> & {
  value?: PickerDate
  defaultValue?: PickerDate
  onChange?: (value: PickerDate) => void
  min?: PickerDate
  max?: PickerDate
  precision?: Precision
  renderLabel?: RenderLabel
  filter?: DatePickerFilter
  tillNow?: boolean
} & NativeProps

const thisYear = new Date().getFullYear()

const defaultProps = {
  min: new Date(new Date().setFullYear(thisYear - 10)),
  max: new Date(new Date().setFullYear(thisYear + 10)),
  precision: 'day',
}

export const DatePickerView: FC<DatePickerViewProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const { renderLabel } = mergedProps

  const [value, setValue] = usePropsValue<PickerDate | null>({
    value: mergedProps.value,
    defaultValue: mergedProps.defaultValue ?? null,
  })

  const mergedRenderLabel = useRenderLabel(renderLabel)

  const pickerValue = useMemo(() => {
    if (value?.tillNow) {
      return [TILL_NOW, null, null]
    }

    return convertDateToStringArray(value, mergedProps.precision)
  }, [value, mergedProps.precision])

  const onChange = useCallback(
    (val: PickerValue[]) => {
      const date = convertStringArrayToDate(val, mergedProps.precision)
      if (date) {
        setValue(date)
        mergedProps.onChange?.(date)
      }
    },
    [mergedProps.onChange, mergedProps.precision]
  )

  return withNativeProps(
    mergedProps,
    <PickerView
      columns={selected =>
        generateDatePickerColumns(
          selected as string[],
          mergedProps.min,
          mergedProps.max,
          mergedProps.precision,
          mergedRenderLabel,
          mergedProps.filter,
          mergedProps.tillNow
        )
      }
      loading={mergedProps.loading}
      loadingContent={mergedProps.loadingContent}
      value={pickerValue}
      mouseWheel={mergedProps.mouseWheel}
      onChange={onChange}
    />
  )
}
