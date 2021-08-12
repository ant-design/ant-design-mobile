import { useRef } from 'react'

export function useInitialized(check?: boolean) {
  const initializedRef = useRef(check)
  if (check) {
    initializedRef.current = true
  }
  return !!initializedRef.current
}
