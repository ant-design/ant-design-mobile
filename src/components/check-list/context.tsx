import { createContext, ReactNode } from 'react'

export const CheckListContext = createContext<{
  value: string[]
  check: (val: string) => void
  uncheck: (val: string) => void
  activeIcon?: ReactNode
  disabled?: boolean
} | null>(null)
