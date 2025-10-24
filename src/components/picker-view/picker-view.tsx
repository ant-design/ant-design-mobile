import { useDebounceEffect } from 'ahooks'
import type { ReactNode } from 'react'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import { PickerProps } from '../picker'
import { defaultRenderLabel } from '../picker/picker-utils'
import SpinLoading from '../spin-loading'
import { useColumnsExtend } from './columns-extend'
import { Wheel } from './wheel'

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
} & Pick<PickerProps, 'renderLabel' | 'prefixCls'> &
  NativeProps<'--height' | '--item-height' | '--item-font-size'>

const defaultProps = {
  defaultValue: [],
  renderLabel: defaultRenderLabel,
  mouseWheel: false,
  loadingContent: (
    <div className={`adm-loading-content`}>
      <SpinLoading />
    </div>
  ),
}

export const PickerView = memo<PickerViewProps>(p => {
  const props = mergeProps(defaultProps, p)
  const { getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('picker-view', props.prefixCls)
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
    <div className={`${prefixCls}`}>
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
          <div className={`${prefixCls}-mask`}>
            <div className={`${prefixCls}-mask-top`} />
            <div className={`${prefixCls}-mask-middle`} />
            <div className={`${prefixCls}-mask-bottom`} />
          </div>
        </>
      )}
    </div>
  )
})

PickerView.displayName = 'PickerView'
