import React, { memo, ReactNode, useCallback, useEffect, useState } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { Wheel } from './wheel'
import { useColumnsExtend } from './columns-extend'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useDebounceEffect } from 'ahooks'
import { PickerProps } from '../picker'
import { defaultRenderLabel } from '../picker/picker-utils'
import SpinLoading from '../spin-loading'

const classPrefix = `adm-picker-view`

export type PickerValue = string | null

export type PickerValueExtend = {
  columns: PickerColumnItem[][]
  items: (PickerColumnItem | null)[]
}

export type PickerColumnItem = {
  label: ReactNode
  value: string
  key?: string | number
}

export type PickerColumn = (string | PickerColumnItem)[]

export type PickerViewProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  mouseWheel?: boolean
  loading?: boolean
  loadingContent?: ReactNode
  onChange?: (value: PickerValue[], extend: PickerValueExtend) => void
} & Pick<PickerProps, 'renderLabel'> &
  NativeProps<'--height' | '--item-height' | '--item-font-size'>

const defaultProps = {
  defaultValue: [],
  renderLabel: defaultRenderLabel,
  mouseWheel: false,
  loadingContent: (
    <div className={`${classPrefix}-loading-content`}>
      <SpinLoading />
    </div>
  ),
}

export const PickerView = memo<PickerViewProps>(p => {
  const props = mergeProps(defaultProps, p)

  const [innerValue, setInnerValue] = useState<PickerValue[]>(
    props.value === undefined ? props.defaultValue : props.value
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

  const extend = useColumnsExtend(props.columns, innerValue)
  const columns = extend.columns

  useDebounceEffect(
    () => {
      if (props.value === innerValue) return
      props.onChange?.(innerValue, extend)
    },
    [innerValue],
    {
      wait: 0,
      leading: false,
      trailing: true,
    }
  )

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
      {props.loading ? (
        props.loadingContent
      ) : (
        <>
          {columns.map((column, index) => (
            <Wheel
              key={index}
              index={index}
              column={column}
              value={innerValue[index]}
              onSelect={handleSelect}
              renderLabel={props.renderLabel}
              mouseWheel={props.mouseWheel}
            />
          ))}
          <div className={`${classPrefix}-mask`}>
            <div className={`${classPrefix}-mask-top`} />
            <div className={`${classPrefix}-mask-middle`} />
            <div className={`${classPrefix}-mask-bottom`} />
          </div>
        </>
      )}
    </div>
  )
})

PickerView.displayName = 'PickerView'
