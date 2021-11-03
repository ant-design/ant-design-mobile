import React, { FC, ReactNode, useCallback, useMemo } from 'react'
import Picker, { PickerColumn, PickerProps } from '../picker'
import dayjs from 'dayjs'
import { generateIntArray } from '../../utils/generate-int-array'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'

type Precision = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'

const precisionRankRecord: Record<Precision, number> = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5,
}

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
} & NativeProps

const thisYear = new Date().getFullYear()

const defaultProps = {
  min: new Date(new Date().setFullYear(thisYear - 10)),
  max: new Date(new Date().setFullYear(thisYear + 10)),
  precision: 'day',
}

export const DatePicker: FC<DatePickerProps> = p => {
  const props = mergeProps(defaultProps, p)

  const [value, setValue] = usePropsValue<Date | null>({
    value: props.value,
    defaultValue: props.defaultValue ?? null,
    onChange: props.onConfirm,
  })

  function columns(selected: string[]) {
    const ret: PickerColumn[] = []

    const minYear = props.min.getFullYear()
    const minMonth = props.min.getMonth() + 1
    const minDay = props.min.getDate()
    const minHour = props.min.getHours()
    const minMinute = props.min.getMinutes()
    const minSecond = props.min.getSeconds()

    const maxYear = props.max.getFullYear()
    const maxMonth = props.max.getMonth() + 1
    const maxDay = props.max.getDate()
    const maxHour = props.max.getHours()
    const maxMinute = props.max.getMinutes()
    const maxSecond = props.max.getSeconds()

    const rank = precisionRankRecord[props.precision]

    if (rank >= precisionRankRecord.year) {
      const years: string[] = []
      for (let i = minYear; i <= maxYear; i++) {
        years.push(i.toString())
      }
      ret.push(years)
    }

    const firstDayInSelectedMonth = dayjs(
      convertStringArrayToDate([selected[0], selected[1], '1'])
    )
    const selectedYear = parseInt(selected[0])
    const selectedMonth = parseInt(selected[1])
    const selectedDay = parseInt(selected[2])
    const selectedHour = parseInt(selected[3])
    const selectedMinute = parseInt(selected[4])

    const isInMinYear = selectedYear === minYear
    const isInMaxYear = selectedYear === maxYear
    const isInMinMonth = isInMinYear && selectedMonth === minMonth
    const isInMaxMonth = isInMaxYear && selectedMonth === maxMonth
    const isInMinDay = isInMinMonth && selectedDay === minDay
    const isInMaxDay = isInMaxMonth && selectedDay === maxDay
    const isInMinHour = isInMinDay && selectedHour === minHour
    const isInMaxHour = isInMaxDay && selectedHour === maxHour
    const isInMinMinute = isInMinHour && selectedMinute === minMinute
    const isInMaxMinute = isInMaxHour && selectedMinute === maxMinute

    if (rank >= precisionRankRecord.month) {
      const lower = isInMinYear ? minMonth : 1
      const upper = isInMaxYear ? maxMonth : 12
      const months = generateIntArray(lower, upper)
      ret.push(months.map(v => v.toString()))
    }
    if (rank >= precisionRankRecord.day) {
      const lower = isInMinMonth ? minDay : 1
      const upper = isInMaxMonth
        ? maxDay
        : firstDayInSelectedMonth.daysInMonth()
      const days = generateIntArray(lower, upper)
      ret.push(days.map(v => v.toString()))
    }
    if (rank >= precisionRankRecord.hour) {
      const lower = isInMinDay ? minHour : 0
      const upper = isInMaxDay ? maxHour : 23
      const hours = generateIntArray(lower, upper)
      ret.push(
        hours.map(v => ({
          label: ('0' + v.toString()).slice(-2),
          value: v.toString(),
        }))
      )
    }
    if (rank >= precisionRankRecord.minute) {
      const lower = isInMinHour ? minMinute : 0
      const upper = isInMaxHour ? maxMinute : 59
      const minutes = generateIntArray(lower, upper)
      ret.push(
        minutes.map(v => ({
          label: ('0' + v.toString()).slice(-2),
          value: v.toString(),
        }))
      )
    }
    if (rank >= precisionRankRecord.second) {
      const lower = isInMinMinute ? minSecond : 0
      const upper = isInMaxMinute ? maxSecond : 59
      const seconds = generateIntArray(lower, upper)
      ret.push(
        seconds.map(v => ({
          label: ('0' + v.toString()).slice(-2),
          value: v.toString(),
        }))
      )
    }

    return ret
  }

  const pickerValue = useMemo(() => convertDateToStringArray(value), [value])

  const onConfirm = useCallback(
    (val: string[]) => {
      setValue(convertStringArrayToDate(val))
    },
    [setValue]
  )

  const onSelect = useCallback(
    (val: string[]) => {
      const date = convertStringArrayToDate(val)
      if (date) {
        props.onSelect?.(date)
      }
    },
    [props.onSelect]
  )

  return withNativeProps(
    props,
    <Picker
      columns={columns}
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
          convertStringArrayToDate(items.map(item => item?.value))
        )
      }
    </Picker>
  )
}

function convertDateToStringArray(date: Date | undefined | null): string[] {
  if (!date) return []
  return [
    date.getFullYear().toString(),
    (date.getMonth() + 1).toString(),
    date.getDate().toString(),
    date.getHours().toString(),
    date.getMinutes().toString(),
    date.getSeconds().toString(),
  ]
}

function convertStringArrayToDate(
  value: (string | null | undefined)[]
): Date | null {
  if (value.length === 0) return null
  const yearString = value[0] ?? '1900'
  const monthString = value[1] ?? '1'
  const dateString = value[2] ?? '1'
  const hourString = value[3] ?? '0'
  const minuteString = value[4] ?? '0'
  const secondString = value[5] ?? '0'
  return new Date(
    parseInt(yearString),
    parseInt(monthString) - 1,
    parseInt(dateString),
    parseInt(hourString),
    parseInt(minuteString),
    parseInt(secondString)
  )
}
