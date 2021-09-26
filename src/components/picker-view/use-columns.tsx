import { useMemo } from 'react'
import { PickerColumn, PickerValue } from './picker-view'

export function useColumns(
  rawColumns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[]),
  value: PickerValue[]
) {
  return useMemo(() => {
    const columns =
      typeof rawColumns === 'function' ? rawColumns(value) : rawColumns
    return columns.map(column =>
      column.map(item =>
        typeof item === 'string'
          ? {
              label: item,
              value: item,
            }
          : item
      )
    )
  }, [rawColumns, value])
}
