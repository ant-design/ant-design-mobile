import { createUpdateEffect, useIsomorphicLayoutEffect } from 'ahooks'

export const useIsomorphicUpdateLayoutEffect = createUpdateEffect(
  useIsomorphicLayoutEffect
)
