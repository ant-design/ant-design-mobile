import { useMemo } from 'react'
import { CascaderOption } from './cascader-view'

export function useCascaderOptions(options: CascaderOption[]) {
  return useMemo(() => {
    let depth = 1
    const optionsMap: Record<string, CascaderOption> = {}
    const optionsParentMap: Record<string, CascaderOption> = {}

    function traverse(option: CascaderOption, currentDepth: number) {
      if (!option.children || option.children.length === 0) {
        return
      }
      const nextDepth = currentDepth + 1
      if (nextDepth > depth) {
        depth = nextDepth
      }
      option.children.forEach(item => {
        optionsMap[item.value] = item
        optionsParentMap[item.value] = option
        traverse(item, nextDepth)
      })
    }
    options.forEach(option => {
      optionsMap[option.value] = option
      traverse(option, 1)
    })
    return { depth, optionsMap, optionsParentMap }
  }, [options])
}
