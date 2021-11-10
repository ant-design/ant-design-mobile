import { useInitialized } from './use-initialized'

export function useShouldRender(
  active: boolean,
  forceRender?: boolean,
  destroyOnClose?: boolean
) {
  const initialized = useInitialized(active)
  if (forceRender) return true
  if (active) return true
  if (!initialized) return false
  return !destroyOnClose
}
