import { useMemoizedFn } from 'ahooks'
import type { ReactNode } from 'react'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { bound } from '../../utils/bound'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import type { RenderLabel } from '../date-picker-view/date-picker-view'
import useRenderLabel from '../date-picker-view/useRenderLabel'
import type {
  PickerActions,
  PickerColumn,
  PickerProps,
  PickerRef,
  PickerValue,
} from '../picker'
import Picker from '../picker'
import type { DatePickerFilter, Precision } from './date-picker-utils'
import {
  convertDateToStringArray,
  convertStringArrayToDate,
  generateDatePickerColumns,
} from './date-picker-utils'
import type { PickerDate } from './util'
import { TILL_NOW } from './util'

export type DatePickerRef = PickerRef

export type DatePickerProps = Pick<
  PickerProps,
  | 'onCancel'
  | 'onClose'
  | 'closeOnMaskClick'
  | 'visible'
  | 'confirmText'
  | 'cancelText'
  | 'getContainer'
  | 'loading'
  | 'loadingContent'
  | 'afterShow'
  | 'afterClose'
  | 'onClick'
  | 'title'
  | 'stopPropagation'
  | 'style'
  | 'mouseWheel'
  | 'forceRender'
  | 'destroyOnClose'
> & {
  value?: PickerDate | null
  defaultValue?: PickerDate | null
  onSelect?: (value: PickerDate) => void
  onConfirm?: (value: PickerDate) => void
  min?: PickerDate
  max?: PickerDate
  precision?: Precision
  children?: (value: PickerDate | null, actions: PickerActions) => ReactNode
  renderLabel?: RenderLabel
  filter?: DatePickerFilter
  tillNow?: boolean
} & NativeProps

const thisYear = new Date().getFullYear()

const defaultProps = {
  min: new Date(new Date().setFullYear(thisYear - 10)),
  max: new Date(new Date().setFullYear(thisYear + 10)),
  precision: 'day',
  defaultValue: null as PickerDate | null,
}

export const DatePicker = forwardRef<DatePickerRef, DatePickerProps>(
  (props, ref) => {
    const mergedProps = mergeProps(defaultProps, props)
    const { renderLabel } = mergedProps

    const [value, setValue] = usePropsValue<PickerDate | null>({
      value: mergedProps.value,
      defaultValue: mergedProps.defaultValue,
      onChange: v => {
        if (v === null) return
        mergedProps.onConfirm?.(v)
      },
    })

    const now = useMemo<PickerDate>(() => new Date(), [])

    const mergedRenderLabel = useRenderLabel(renderLabel)

    const pickerValue = useMemo(() => {
      let date = value ?? now

      if (date.tillNow) {
        return [TILL_NOW]
      }

      date = new Date(
        bound(
          date.getTime(),
          mergedProps.min.getTime(),
          mergedProps.max.getTime()
        )
      )
      return convertDateToStringArray(date, mergedProps.precision)
    }, [value, mergedProps.precision, mergedProps.min, mergedProps.max])

    const onConfirm = useCallback(
      (val: PickerValue[]) => {
        const date = convertStringArrayToDate(val, mergedProps.precision)
        setValue(date, true)
      },
      [setValue, mergedProps.precision]
    )

    const onSelect = useMemoizedFn((val: PickerValue[]) => {
      const date = convertStringArrayToDate(val, mergedProps.precision)
      mergedProps.onSelect?.(date)
    })

    const columns = useCallback<(value: PickerValue[]) => PickerColumn[]>(
      selected =>
        generateDatePickerColumns(
          selected as string[],
          mergedProps.min,
          mergedProps.max,
          mergedProps.precision,
          mergedRenderLabel,
          mergedProps.filter,
          mergedProps.tillNow
        ),
      [
        mergedProps.min,
        mergedProps.max,
        mergedProps.precision,
        mergedRenderLabel,
        mergedProps.tillNow,
      ]
    )

    return withNativeProps(
      mergedProps,
      <Picker
        ref={ref}
        columns={columns}
        value={pickerValue}
        onCancel={mergedProps.onCancel}
        onClose={mergedProps.onClose}
        closeOnMaskClick={mergedProps.closeOnMaskClick}
        visible={mergedProps.visible}
        confirmText={mergedProps.confirmText}
        cancelText={mergedProps.cancelText}
        onConfirm={onConfirm}
        onSelect={onSelect}
        getContainer={mergedProps.getContainer}
        loading={mergedProps.loading}
        loadingContent={mergedProps.loadingContent}
        afterShow={mergedProps.afterShow}
        afterClose={mergedProps.afterClose}
        onClick={mergedProps.onClick}
        title={mergedProps.title}
        stopPropagation={mergedProps.stopPropagation}
        mouseWheel={mergedProps.mouseWheel}
        destroyOnClose={mergedProps.destroyOnClose}
        forceRender={mergedProps.forceRender}
      >
        {(_, actions) => mergedProps.children?.(value, actions)}
      </Picker>
    )
  }
)
