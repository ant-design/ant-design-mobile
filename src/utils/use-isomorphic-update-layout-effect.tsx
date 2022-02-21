import { createUpdateEffect } from 'ahooks/lib/createUpdateEffect'
import { useIsomorphicLayoutEffect } from 'ahooks'

export const useIsomorphicUpdateLayoutEffect = createUpdateEffect(
  useIsomorphicLayoutEffect
)
