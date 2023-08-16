import React, { useCallback, useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import PickerView from '../picker-view'
import type { PickerValue, PickerViewProps } from '../picker-view'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import {
  generateDatePickerColumns,
  convertDateToStringArray,
  convertStringArrayToDate,
} from '../date-picker/date-picker-utils'
import type {
  Precision,
  DatePickerFilter,
} from '../date-picker/date-picker-utils'
import useRenderLabel from './useRenderLabel'
import { TILL_NOW } from '../date-picker/util'
import type { PickerDate } from '../date-picker/util'

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

export const DatePickerView: FC<DatePickerViewProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { renderLabel } = props

  const [value, setValue] = usePropsValue<PickerDate | null>({
    value: props.value,
    defaultValue: props.defaultValue ?? null,
  })

  const mergedRenderLabel = useRenderLabel(renderLabel)

  const pickerValue = useMemo(() => {
    if (value?.tillNow) {
      return [TILL_NOW, null, null]
    }

    return convertDateToStringArray(value, props.precision)
  }, [value, props.precision])

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
          mergedRenderLabel,
          props.filter,
          props.tillNow
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
