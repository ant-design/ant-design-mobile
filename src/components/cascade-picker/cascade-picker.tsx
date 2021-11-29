import React, { FC } from 'react'
import Picker from '../picker'
import type { PickerProps } from '../picker'
import { useCascadePickerOptions } from './use-cascade-picker-options'
import { generateCascadePickerColumns } from './cascade-picker-utils'

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
  const { depth, subOptionsRecord } = useCascadePickerOptions(options)

  return (
    <Picker
      {...pickerProps}
      columns={selected =>
        generateCascadePickerColumns(
          selected as string[],
          options,
          depth,
          subOptionsRecord
        )
      }
    />
  )
}
