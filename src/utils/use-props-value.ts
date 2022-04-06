import { SetStateAction, useRef } from 'react'
import { useMemoizedFn, useUpdate } from 'ahooks'

type Options<T> = {
  value?: T
  defaultValue: T
  onChange?: (v: T) => void
}

export function usePropsValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange } = options

  const update = useUpdate()

  const stateRef = useRef<T>(value !== undefined ? value : defaultValue)
  if (value !== undefined) {
    stateRef.current = value
  }

  const setState = useMemoizedFn((v: SetStateAction<T>) => {
    const nextValue =
      typeof v === 'function' ? (v as (prevState: T) => T)(stateRef.current) : v
    if (value === undefined) {
      stateRef.current = nextValue
      update()
    }
    onChange?.(nextValue)
  })
  return [stateRef.current, setState] as const
}
