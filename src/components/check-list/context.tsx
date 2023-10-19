import { createContext, ReactNode } from 'react'
import { CheckListValue } from '.'

export const CheckListContext = createContext<{
  value: CheckListValue[]
  check: (val: CheckListValue) => void
  uncheck: (val: CheckListValue) => void
  activeIcon?: ReactNode
  extra?: (active: boolean) => ReactNode
  disabled?: boolean
  readOnly?: boolean
} | null>(null)
