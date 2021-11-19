import React, { FC } from 'react'
import PickerView from '../picker-view'
import { NativeProps } from '../../utils/native-props'
import type { PickerViewProps } from '../picker-view'
import type { CascadePickerOption } from '../cascade-picker'
import { useCascaderPickerOptions } from '../cascade-picker/use-cascade-picker-options'
import { generateCascaderPickerColumns } from '../cascade-picker/cascade-picker-utils'

export type CascadePickerViewProps = Omit<PickerViewProps, 'columns'> & {
  options: CascadePickerOption[]
} & NativeProps<'--height'>

export const CascadePickerView: FC<CascadePickerViewProps> = props => {
  const { options, ...pickerProps } = props
  const { depth, subOptionsRecord } = useCascaderPickerOptions(options)

  return (
    <PickerView
      {...pickerProps}
      columns={selected =>
        generateCascaderPickerColumns(
          selected as string[],
          options,
          depth,
          subOptionsRecord
        )
      }
    />
  )
}
