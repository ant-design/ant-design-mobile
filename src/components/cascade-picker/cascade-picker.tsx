import React, { FC, useMemo } from 'react'
import Picker from '../picker'
import type { PickerProps, PickerColumn } from '../picker'

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

  const { depth, subOptionsRecord } = useMemo(() => {
    let depth = 1
    const subOptionsRecord: Record<string, CascadePickerOption[]> = {}
    function traverse(option: CascadePickerOption, currentDepth: number) {
      if (!option.children) {
        return
      }
      subOptionsRecord[option.value] = option.children
      const nextDepth = currentDepth + 1
      if (nextDepth > depth) {
        depth = nextDepth
      }
      option.children.forEach(option => {
        traverse(option, nextDepth)
      })
    }
    options.forEach(option => {
      traverse(option, 1)
    })
    return { depth, subOptionsRecord }
  }, [options])

  function columns(value: string[]) {
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
          subOptions.map(option => ({
            label: option.label,
            value: option.value,
          }))
        )
      }
    }
    return columns
  }

  return <Picker {...pickerProps} columns={columns} />
}
