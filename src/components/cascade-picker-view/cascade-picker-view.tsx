import React, { FC } from 'react'
import PickerView from '../picker-view'
import type { PickerViewProps } from '../picker-view'
import type { CascadePickerOption } from '../cascade-picker'
import { useCascadePickerOptions } from '../cascade-picker/use-cascade-picker-options'
import { generateCascadePickerColumns } from '../cascade-picker/cascade-picker-utils'

export type CascadePickerViewProps = Omit<PickerViewProps, 'columns'> & {
  options: CascadePickerOption[]
}

export const CascadePickerView: FC<CascadePickerViewProps> = props => {
  const { options, ...pickerProps } = props
  const { depth, subOptionsRecord } = useCascadePickerOptions(options)

  return (
    <PickerView
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
