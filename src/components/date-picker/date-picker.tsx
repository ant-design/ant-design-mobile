import React, { forwardRef, useCallback, useMemo } from 'react'
import type { ReactNode } from 'react'
import { useMemoizedFn } from 'ahooks'
import Picker from '../picker'
import type {
  PickerProps,
  PickerRef,
  PickerActions,
  PickerValue,
  PickerColumn,
} from '../picker'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import {
  convertDateToStringArray,
  convertStringArrayToDate,
  generateDatePickerColumns,
} from './date-picker-utils'
import type { Precision, DatePickerFilter } from './date-picker-utils'
import { bound } from '../../utils/bound'
import useRenderLabel from '../date-picker-view/useRenderLabel'
import type { RenderLabel } from '../date-picker-view/date-picker-view'
import { TILL_NOW } from './util'
import type { PickerDate } from './util'

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
  (p, ref) => {
    const props = mergeProps(defaultProps, p)
    const { renderLabel } = props

    const [value, setValue] = usePropsValue<PickerDate | null>({
      value: props.value,
      defaultValue: props.defaultValue,
      onChange: v => {
        if (v === null) return
        props.onConfirm?.(v)
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
        bound(date.getTime(), props.min.getTime(), props.max.getTime())
      )
      return convertDateToStringArray(date, props.precision)
    }, [value, props.precision, props.min, props.max])

    const onConfirm = useCallback(
      (val: PickerValue[]) => {
        const date = convertStringArrayToDate(val, props.precision)
        setValue(date, true)
      },
      [setValue, props.precision]
    )

    const onSelect = useMemoizedFn((val: PickerValue[]) => {
      const date = convertStringArrayToDate(val, props.precision)
      props.onSelect?.(date)
    })

    const columns = useCallback<(value: PickerValue[]) => PickerColumn[]>(
      selected =>
        generateDatePickerColumns(
          selected as string[],
          props.min,
          props.max,
          props.precision,
          mergedRenderLabel,
          props.filter,
          props.tillNow
        ),
      [props.min, props.max, props.precision, mergedRenderLabel, props.tillNow]
    )

    return withNativeProps(
      props,
      <Picker
        ref={ref}
        columns={columns}
        value={pickerValue}
        onCancel={props.onCancel}
        onClose={props.onClose}
        closeOnMaskClick={props.closeOnMaskClick}
        visible={props.visible}
        confirmText={props.confirmText}
        cancelText={props.cancelText}
        onConfirm={onConfirm}
        onSelect={onSelect}
        getContainer={props.getContainer}
        loading={props.loading}
        loadingContent={props.loadingContent}
        afterShow={props.afterShow}
        afterClose={props.afterClose}
        onClick={props.onClick}
        title={props.title}
        stopPropagation={props.stopPropagation}
        mouseWheel={props.mouseWheel}
        destroyOnClose={props.destroyOnClose}
        forceRender={props.forceRender}
      >
        {(_, actions) => props.children?.(value, actions)}
      </Picker>
    )
  }
)
