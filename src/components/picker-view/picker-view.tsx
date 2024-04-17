import { useDebounceEffect } from 'ahooks'
import type { ReactNode } from 'react'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { PickerProps } from '../picker'
import { defaultRenderLabel } from '../picker/picker-utils'
import SpinLoading from '../spin-loading'
import { useColumnsExtend } from './columns-extend'
import { Wheel } from './wheel'

const classPrefix = `adm-picker-view`

export type PickerValue = string | number | null

export type PickerValueExtend = {
  columns: PickerColumnItem[][]
  items: (PickerColumnItem | null)[]
}

export type PickerColumnItem = {
  label: ReactNode
  value: string | number
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

export const PickerView = memo<PickerViewProps>(props => {
  const mergedProps = mergeProps(defaultProps, props)

  const [innerValue, setInnerValue] = useState<PickerValue[]>(
    mergedProps.value === undefined
      ? mergedProps.defaultValue
      : mergedProps.value
  )

  // Sync `value` to `innerValue`
  useEffect(() => {
    if (mergedProps.value === undefined) return // Uncontrolled mode
    if (mergedProps.value === innerValue) return
    setInnerValue(mergedProps.value)
  }, [mergedProps.value])

  useEffect(() => {
    if (mergedProps.value === innerValue) return
    const timeout = window.setTimeout(() => {
      if (mergedProps.value !== undefined && mergedProps.value !== innerValue) {
        setInnerValue(mergedProps.value)
      }
    }, 1000)
    return () => {
      window.clearTimeout(timeout)
    }
  }, [mergedProps.value, innerValue])

  const extend = useColumnsExtend(mergedProps.columns, innerValue)
  const columns = extend.columns

  useDebounceEffect(
    () => {
      if (mergedProps.value === innerValue) return
      mergedProps.onChange?.(innerValue, extend)
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
    mergedProps,
    <div className={`${classPrefix}`}>
      {mergedProps.loading ? (
        mergedProps.loadingContent
      ) : (
        <>
          {columns.map((column, index) => (
            <Wheel
              key={index}
              index={index}
              column={column}
              value={innerValue[index]}
              onSelect={handleSelect}
              renderLabel={mergedProps.renderLabel}
              mouseWheel={mergedProps.mouseWheel}
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
