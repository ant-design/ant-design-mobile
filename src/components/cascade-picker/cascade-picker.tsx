import React, { forwardRef } from 'react'
import Picker from '../picker'
import type { PickerProps, PickerRef } from '../picker'
import { useColumnsFn } from './cascade-picker-utils'

export type CascadePickerRef = PickerRef

export type CascadePickerOption = {
  label: string
  value: string
  children?: CascadePickerOption[]
}

export type CascadePickerProps = Omit<PickerProps, 'columns'> & {
  options: CascadePickerOption[]
}

export const CascadePicker = forwardRef<CascadePickerRef, CascadePickerProps>(
  (props, ref) => {
    const { options, ...pickerProps } = props
    const columnsFn = useColumnsFn(options)

    return <Picker {...pickerProps} ref={ref} columns={columnsFn} />
  }
)
