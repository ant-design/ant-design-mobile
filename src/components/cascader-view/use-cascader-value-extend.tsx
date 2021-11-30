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
        const extendList: CascaderOption[] = []

        for (const v of val) {
          function traverse(option: CascaderOption): boolean {
            if (!option.children || option.children.length === 0) {
              return false
            }
            option.children.forEach(item => {
              if (item.value === v) {
                extendList.push(item)
                return true
              }
              traverse(item)
            })
            return false
          }

          for (const option of options) {
            if (option.value === v) {
              extendList.push(option)
              break
            }
            if (traverse(option)) {
              break
            }
          }
        }
        return extendList
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
