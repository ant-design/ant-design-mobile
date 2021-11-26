import React, { FC, useState } from 'react'
import PickerView from '../picker-view'
import type { PickerValue, PickerValueExtend } from '../picker-view'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps } from '../../utils/native-props'
import type { PickerViewProps } from '../picker-view'
import type { CascadePickerOption } from '../cascade-picker'
import { useCascadePickerOptions } from '../cascade-picker/use-cascade-picker-options'
import { generateCascadePickerColumns } from '../cascade-picker/cascade-picker-utils'

export type CascadePickerViewProps = Omit<PickerViewProps, 'columns'> & {
  options: CascadePickerOption[]
} & NativeProps<'--height'>

const defaultProps = {
  defaultValue: [],
}

export const CascadePickerView: FC<CascadePickerViewProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { options, ...pickerProps } = props
  const { depth, subOptionsRecord } = useCascadePickerOptions(options)

  const [value, setValue] = useState<PickerValue[]>(props.defaultValue)

  const onChange = (val: PickerValue[], ext: PickerValueExtend) => {
    setValue(val)
    // 如果上一次的 value 与本次 val 的最后一个值一样，说明一定是非最后一列发生了变化，跳过本次 onChange
    if (value[value.length - 1] === val[val.length - 1]) return
    // 正在初始化，跳过 onChange
    if (val.length < depth) return
    if (val[0] === undefined) return
    pickerProps.onChange?.(val, ext)
  }

  return (
    <PickerView
      {...pickerProps}
      value={value}
      onChange={(val, ext) => onChange(val, ext)}
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
