import { useMemo } from 'react'
import { CascadePickerOption } from './cascade-picker'

export type SubOptionsRecord = Record<
  string,
  { children: CascadePickerOption[]; subOptionsRecord: SubOptionsRecord }
>
export function useCascadePickerOptions(options: CascadePickerOption[]) {
  return useMemo(() => {
    let depth = 1
    const subOptionsRecord: SubOptionsRecord = {}
    function traverse(
      option: CascadePickerOption,
      currentDepth: number,
      subOptionsRecord: SubOptionsRecord
    ) {
      if (!option.children) {
        return
      }
      subOptionsRecord[option.value] = {
        children: option.children,
        subOptionsRecord: {},
      }
      subOptionsRecord = subOptionsRecord[option.value].subOptionsRecord
      const nextDepth = currentDepth + 1
      if (nextDepth > depth) {
        depth = nextDepth
      }
      option.children.forEach(option => {
        traverse(option, nextDepth, subOptionsRecord)
      })
    }
    options.forEach(option => {
      traverse(option, 1, subOptionsRecord)
    })
    return { depth, subOptionsRecord }
  }, [options])
}
