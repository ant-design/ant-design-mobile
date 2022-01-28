import React, { memo, ReactNode, useCallback, useEffect, useState } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { Wheel } from './wheel'
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
} & NativeProps<'--height' | '--item-font-size'>

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

  useEffect(() => {
    if (props.value === innerValue) return
    const timeout = window.setTimeout(() => {
      if (props.value !== undefined && props.value !== innerValue) {
        setInnerValue(props.value)
      }
    }, 1000)
    return () => {
      window.clearTimeout(timeout)
    }
  }, [props.value, innerValue])

  const columns = useColumns(props.columns, innerValue)
  const generateValueExtend = usePickerValueExtend(columns)

  const handleSelect = useCallback((val: PickerValue, index: number) => {
    setInnerValue(prev => {
      const next = [...prev]
      next[index] = val
      return next
    })
  }, [])

  return withNativeProps(
    props,
    <div className={`${classPrefix}`}>
      {columns.map((column, index) => (
        <Wheel
          key={index}
          index={index}
          column={column}
          value={innerValue[index]}
          onSelect={handleSelect}
        />
      ))}
      <div className={`${classPrefix}-mask`}>
        <div className={`${classPrefix}-mask-top`} />
        <div className={`${classPrefix}-mask-middle`} />
        <div className={`${classPrefix}-mask-bottom`} />
      </div>
    </div>
  )
})

PickerView.displayName = 'PickerView'
