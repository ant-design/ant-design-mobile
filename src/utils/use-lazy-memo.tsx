import memoize from 'lodash/memoize'
import { DependencyList, useMemo } from 'react'

export function useLazyMemo<T>(
  factory: () => T,
  deps: DependencyList
): () => T {
  return useMemo(() => memoize(factory), deps)
}
