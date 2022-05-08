import React, { forwardRef } from 'react'
import Picker from '../picker'
import type { PickerProps } from '../picker'
import { useColumnsFn } from './cascade-picker-utils'
import { Actions } from '../../utils/use-controllable-visible'

export type CascadePickerOption = {
  label: string
  value: string
  children?: CascadePickerOption[]
}

export type CascadePickerProps = Omit<PickerProps, 'columns'> & {
  options: CascadePickerOption[]
}

export const CascadePicker = forwardRef<Actions, CascadePickerProps>(
  (props, ref) => {
    const { options, ...pickerProps } = props
    const columnsFn = useColumnsFn(options)

    return <Picker {...pickerProps} ref={ref} columns={columnsFn} />
  }
)
