import { PickerColumn } from '../picker-view'
import { CascadePickerOption } from './cascade-picker'
import { SubOptionsRecord } from './use-cascade-picker-options'

export function generateCascadePickerColumns(
  value: string[],
  options: CascadePickerOption[],
  depth: number,
  subOptionsRecord: SubOptionsRecord
) {
  const columns: PickerColumn[] = []
  columns.push(
    options.map(option => ({
      label: option.label,
      value: option.value,
    }))
  )
  for (let i = 0; i < depth - 1; i++) {
    const x = value[i]
    const subOptions = subOptionsRecord[x]
    if (!subOptions) {
      columns.push([])
    } else {
      columns.push(
        subOptions.children.map(option => ({
          label: option.label,
          value: option.value,
        }))
      )
      subOptionsRecord = subOptions.subOptionsRecord
    }
  }
  return columns
}
