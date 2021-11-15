import { useMemo } from 'react'
import memoize from 'lodash/memoize'
import {
  PickerValue,
  PickerValueContext,
  PickerColumnItem,
} from './picker-view'

export function usePickerContext(columns: PickerColumnItem[][]) {
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

  function generateContext(val: PickerValue[]): PickerValueContext {
    return {
      get items() {
        return generateItems(val)
      },
    }
  }

  return generateContext
}
