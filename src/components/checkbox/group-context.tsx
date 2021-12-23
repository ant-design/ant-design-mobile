import { createContext } from 'react'
import { CheckboxValue } from '.'

export const CheckboxGroupContext = createContext<{
  value: CheckboxValue[]
  disabled: boolean
  check: (val: CheckboxValue) => void
  uncheck: (val: CheckboxValue) => void
} | null>(null)
