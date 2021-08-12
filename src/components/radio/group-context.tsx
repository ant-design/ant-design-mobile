import { createContext } from 'react'
import { RadioValue } from '.'

export const RadioGroupContext = createContext<{
  value: RadioValue[]
  disabled: boolean
  check: (val: RadioValue) => void
  uncheck: (val: RadioValue) => void
} | null>(null)
