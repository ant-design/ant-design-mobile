import React, { FC, useState } from 'react'
import Picker from '../picker'
import type { PickerProps } from '../picker'
import type { PickerValue, PickerValueExtend } from '../picker-view'
import { mergeProps } from '../../utils/with-default-props'
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

const defaultProps = {
  defaultValue: [],
}

export const CascadePicker: FC<CascadePickerProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { options, ...pickerProps } = props
  const { depth, subOptionsRecord } = useCascadePickerOptions(options)

  const [value, setValue] = useState<PickerValue[]>(props.defaultValue)

  const onSelect = (val: PickerValue[], ext: PickerValueExtend) => {
    setValue(val)
    // 如果上一次的 value 与本次 val 的最后一个值一样，说明一定是非最后一列发生了变化，跳过本次 onSelect
    if (value[value.length - 1] === val[val.length - 1]) return
    // 正在初始化，跳过 onSelect
    if (val.length < depth) return
    if (val[0] === undefined) return
    pickerProps.onSelect?.(val, ext)
  }

  return (
    <Picker
      {...pickerProps}
      value={value}
      onSelect={onSelect}
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
