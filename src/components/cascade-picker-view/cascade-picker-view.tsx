import React, { FC } from 'react'
import PickerView from '../picker-view'
import type { PickerViewProps } from '../picker-view'
import type { CascadePickerOption } from '../cascade-picker'
import { useColumnsFn } from '../cascade-picker/cascade-picker-utils'

export type CascadePickerViewProps = Omit<PickerViewProps, 'columns'> & {
  options: CascadePickerOption[]
}

export const CascadePickerView: FC<CascadePickerViewProps> = props => {
  const { options, ...pickerProps } = props
  const columnsFn = useColumnsFn(options)

  return <PickerView {...pickerProps} columns={columnsFn} />
}
