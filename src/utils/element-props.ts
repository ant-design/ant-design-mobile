import type { CSSProperties } from 'react'

export interface ElementProps<S extends string = never> {
  className?: string
  style?: CSSProperties & Partial<Record<S, string>>
}
