import React, { memo, ReactNode, useEffect, useState } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { Column } from './column'
import { useColumns } from './use-columns'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePickerValueExtend } from './use-picker-value-extend'
import { useDebounceEffect } from 'ahooks'

const classPrefix = `adm-picker-view`

export type PickerValue = string | null

export type PickerValueExtend = {
  items: (PickerColumnItem | null)[]
}

export type PickerColumnItem = {
  label: ReactNode
  value: string
}

export type PickerColumn = (string | PickerColumnItem)[]

export type PickerViewProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  onChange?: (value: PickerValue[], extend: PickerValueExtend) => void
} & NativeProps<'--height'>

const defaultProps = {
  defaultValue: [],
}

export const PickerView = memo<PickerViewProps>(p => {
  const props = mergeProps(defaultProps, p)

  const [innerValue, setInnerValue] = useState<PickerValue[]>(
    props.value === undefined ? props.defaultValue : props.value
  )

  useDebounceEffect(
    () => {
      if (props.value === innerValue) return
      props.onChange?.(innerValue, generateValueExtend(innerValue))
    },
    [innerValue],
    {
      wait: 0,
      leading: false,
      trailing: true,
    }
  )

  // Sync `value` to `innerValue`
  useEffect(() => {
    if (props.value === undefined) return // Uncontrolled mode
    if (props.value === innerValue) return
    setInnerValue(props.value)
  }, [props.value])

  // Reset `innerValue` after 1s in case user does not update `value` when `onChange` is called
  useDebounceEffect(
    () => {
      if (props.value !== undefined && props.value !== innerValue) {
        setInnerValue(props.value)
      }
    },
    [props.value, innerValue],
    {
      wait: 1000,
      leading: false,
      trailing: true,
    }
  )

  const columns = useColumns(props.columns, innerValue)
  const generateValueExtend = usePickerValueExtend(columns)

  return withNativeProps(
    props,
    <div className={`${classPrefix}`}>
      {columns.map((column, index) => (
        <Column
          key={index}
          column={column}
          value={innerValue[index]}
          onSelect={val => {
            const nextInnerValue = [...innerValue]
            nextInnerValue[index] = val
            setInnerValue(nextInnerValue)
          }}
        />
      ))}
      <div className={`${classPrefix}-mask ${classPrefix}-mask-top`} />
      <div className={`${classPrefix}-mask ${classPrefix}-mask-bottom`} />
    </div>
  )
})
