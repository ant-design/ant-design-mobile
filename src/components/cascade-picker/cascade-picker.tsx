import React, { FC } from 'react'
import Picker from '../picker'
import type { PickerProps } from '../picker'
import { useColumnsFn } from './cascade-picker-utils'

export type CascadePickerOption = {
  label: string
  value: string
  children?: CascadePickerOption[]
}

export type CascadePickerProps = Omit<PickerProps, 'columns'> & {
  options: CascadePickerOption[]
}

export const CascadePicker: FC<CascadePickerProps> = props => {
  const { options, ...pickerProps } = props
  const columnsFn = useColumnsFn(options)

  return <Picker {...pickerProps} columns={columnsFn} />
}
