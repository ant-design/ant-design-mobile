import { createContext } from 'react'

export const CheckListContext = createContext<{
  value: string[]
  check: (val: string) => void
  uncheck: (val: string) => void
} | null>(null)
