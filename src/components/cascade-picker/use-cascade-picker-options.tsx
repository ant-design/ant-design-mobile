import { useMemo } from 'react'
import { CascadePickerOption } from './cascade-picker'

export function useCascadePickerOptions(options: CascadePickerOption[]) {
  return useMemo(() => {
    let depth = 1
    const subOptionsRecord: Record<string, CascadePickerOption[]> = {}
    function traverse(option: CascadePickerOption, currentDepth: number) {
      if (!option.children) {
        return
      }
      subOptionsRecord[option.value] = option.children
      const nextDepth = currentDepth + 1
      if (nextDepth > depth) {
        depth = nextDepth
      }
      option.children.forEach(option => {
        traverse(option, nextDepth)
      })
    }
    options.forEach(option => {
      traverse(option, 1)
    })
    return { depth, subOptionsRecord }
  }, [options])
}
