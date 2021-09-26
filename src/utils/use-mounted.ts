import { useRef, useEffect } from 'react'

export function useMounted() {
  const mountedRef = useRef(false)
  useEffect(() => {
    mountedRef.current = true
  }, [])
  return mountedRef.current
}
