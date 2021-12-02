import { useMemo } from 'react'
import memoize from 'lodash/memoize'
import {
  CascaderValue,
  CascaderValueExtend,
  CascaderOption,
} from './cascader-view'

export function useCascaderValueExtend(options: CascaderOption[]) {
  const generateItems = useMemo(() => {
    return memoize(
      (val: CascaderValue[]) => {
        const ret: CascaderOption[] = []
        let currentOptions = options
        for (const v of val) {
          const target = currentOptions.find(option => option.value === v)
          if (!target) {
            break
          }
          ret.push(target)
          if (!target.children) break
          currentOptions = target.children
        }
        return ret
      },
      val => JSON.stringify(val)
    )
  }, [options])

  function generateValueExtend(val: CascaderValue[]): CascaderValueExtend {
    return {
      get items() {
        return generateItems(val)
      },
    }
  }

  return generateValueExtend
}
