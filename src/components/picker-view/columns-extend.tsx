import { useMemo } from 'react'
import type {
  PickerViewProps,
  PickerValue,
  PickerValueExtend,
} from './picker-view'
import { withCache } from '../../utils/with-cache'

export function generateColumnsExtend(
  rawColumns: PickerViewProps['columns'],
  val: PickerValue[]
) {
  const columns = withCache(() => {
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
  })
  const items = withCache(() => {
    return val.map((v, index) => {
      const column = columns()[index]
      if (!column) return null
      return column.find(item => item.value === v) ?? null
    })
  })
  const extend: PickerValueExtend = {
    get columns() {
      return columns()
    },
    get items() {
      return items()
    },
  }
  return extend
}

export function useColumnsExtend(
  rawColumns: PickerViewProps['columns'],
  value: PickerValue[]
) {
  return useMemo(
    () => generateColumnsExtend(rawColumns, value),
    [rawColumns, value]
  )
}
