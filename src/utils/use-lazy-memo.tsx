import memoize from 'lodash/memoize'
import { DependencyList, useMemo } from 'react'

export function useLazyMemo<V, T>(
  factory: (v?: V) => T,
  deps: DependencyList
): (v?: V) => T {
  return useMemo(() => memoize(factory), deps)
}
