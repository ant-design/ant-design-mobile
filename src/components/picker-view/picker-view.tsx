import React, { FC } from 'react'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { Column } from './column'
import { useColumns } from './use-columns'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-picker-view`

export type PickerValue = string | null

export type PickerColumnItem = {
  label: string
  value: string
}

export type PickerColumn = (string | PickerColumnItem)[]

export type PickerViewProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  onChange?: (value: PickerValue[]) => void
} & NativeProps<'--height'>

const defaultProps = {
  defaultValue: [],
}

export const PickerView: FC<PickerViewProps> = p => {
  const props = mergeProps(defaultProps, p)
  const [value, setValue] = usePropsValue(props)
  const columns = useColumns(props.columns, value)

  return withNativeProps(
    props,
    <div className={`${classPrefix}`}>
      {columns.map((column, index) => (
        <Column
          key={index}
          column={column}
          value={value[index]}
          onSelect={val => {
            const nextValue = [...value]
            nextValue[index] = val
            setValue(nextValue)
          }}
        />
      ))}
      <div className={`${classPrefix}-mask ${classPrefix}-mask-top`} />
      <div className={`${classPrefix}-mask ${classPrefix}-mask-bottom`} />
    </div>
  )
}
