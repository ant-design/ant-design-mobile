import { useLayoutEffect, useRef, useState } from 'react'

export function useRefState<T>(initialState: T | (() => T)) {
  const [state, setState] = useState<T>(initialState)
  // const updateState: typeof setState = (action) => {
  //   setState(action)
  // }
  const ref = useRef<T>(state)
  useLayoutEffect(() => {
    ref.current = state
  }, [state])
  return [state, setState, ref] as const
}
