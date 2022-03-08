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
        let isLeaf: boolean = false
        let currentOptions = options
        for (const v of val) {
          const target = currentOptions.find(option => option.value === v)
          if (!target) {
            break
          }
          if (target.children?.length === val.length) {
            isLeaf = true
          }
          ret.push(target)
          if (!target.children) break
          currentOptions = target.children
        }

        return {
          ret,
          isLeaf,
        }
      },
      val => JSON.stringify(val)
    )
  }, [options])

  function generateValueExtend(val: CascaderValue[]): CascaderValueExtend {
    return {
      items: generateItems(val).ret,
      isLeaf: generateItems(val).isLeaf,
    }
  }

  return generateValueExtend
}
