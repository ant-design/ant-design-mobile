import { useIsomorphicLayoutEffect } from 'ahooks'
import { createUpdateEffect } from 'ahooks/es/createUpdateEffect';

export const useIsomorphicUpdateLayoutEffect = createUpdateEffect(
  useIsomorphicLayoutEffect
)
