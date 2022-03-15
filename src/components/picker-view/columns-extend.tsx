import { useMemo } from 'react'
import type {
  PickerViewProps,
  PickerValue,
  PickerValueExtend,
} from './picker-view'

export function generateColumnsExtend(
  rawColumns: PickerViewProps['columns'],
  val: PickerValue[]
) {
  // let columns: PickerColumn[] | null = null
  const extend: PickerValueExtend = {
    get columns() {
      const c = typeof rawColumns === 'function' ? rawColumns(val) : rawColumns
      return c.map(column =>
        column.map(item =>
          typeof item === 'string'
            ? {
                label: item,
                value: item,
              }
            : item
        )
      )
    },
    get items() {
      console.log('items')
      return val.map((v, index) => {
        const column = extend.columns[index]
        if (!column) return null
        return column.find(item => item.value === v) ?? null
      })
    },
  }
  return extend
}

export function useColumnsAndExtend(
  rawColumns: PickerViewProps['columns'],
  value: PickerValue[]
) {
  return useMemo(
    () => generateColumnsExtend(rawColumns, value),
    [rawColumns, value]
  )
}
