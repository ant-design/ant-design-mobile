import { useMemo } from 'react'
import memoize from 'lodash/memoize'
import { PickerValue, PickerValueExtend, PickerColumnItem } from './picker-view'

export function usePickerValueExtend(columns: PickerColumnItem[][]) {
  const generateItems = useMemo(() => {
    return memoize(
      (val: PickerValue[]) => {
        return val.map((v, index) => {
          const column = columns[index]
          if (!column) return null
          return column.find(item => item.value === v) ?? null
        })
      },
      val => JSON.stringify(val)
    )
  }, [columns])

  function generateValueExtend(val: PickerValue[]): PickerValueExtend {
    return {
      get items() {
        return generateItems(val)
      },
    }
  }

  return generateValueExtend
}
