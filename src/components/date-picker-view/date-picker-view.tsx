import type { FC, ReactNode } from 'react'
import React, { useCallback, useMemo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
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

export type RenderLabel = (
  type: Precision | 'now',
  data: number,
  info: {
    selected: boolean
  }
) => ReactNode

export type DatePickerViewProps = Pick<
  PickerViewProps,
  'style' | 'mouseWheel' | 'loading' | 'loadingContent' | 'prefixCls'
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
  const { renderLabel, prefixCls: customPrefix } = props
  const { getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('picker-view', customPrefix)
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
      prefixCls={prefixCls}
    />
  )
}
