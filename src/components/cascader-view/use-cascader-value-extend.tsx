import { useMemo } from 'react'
import isEqual from 'react-fast-compare'
import memoize from 'nano-memoize'
import { CascaderValue, CascaderValueExtend } from './cascader-view'
import type { CascaderOption } from './cascader-view'

export function useCascaderValueExtend(
  options: CascaderOption[],
  fieldNames: CascaderOption
) {
  const { valueName, childrenName } = fieldNames

  const generateItems = useMemo(() => {
    return memoize(
      (val: CascaderValue[]) => {
        const ret: CascaderOption[] = []
        let currentOptions = options

        for (const v of val) {
          const target = currentOptions.find(option => option[valueName] === v)
          if (!target) {
            break
          }
          ret.push(target)
          if (!target[childrenName]) break
          currentOptions = target[childrenName]
        }

        return ret
      },
      {
        equals: isEqual,
      }
    )
  }, [options])

  const generateIsLeaf = useMemo(() => {
    return memoize(
      (val: CascaderValue[]) => {
        const children = val.reduce((currentOptions, v) => {
          return (
            currentOptions.find(option => option[valueName] === v)?.[
              childrenName
            ] || []
          )
        }, options)

        return children.length === 0
      },
      {
        equals: isEqual,
      }
    )
  }, [options])

  function generateValueExtend(val: CascaderValue[]): CascaderValueExtend {
    return {
      get items() {
        return generateItems(val)
      },
      get isLeaf() {
        return generateIsLeaf(val)
      },
    }
  }

  return generateValueExtend
}
