import * as React from 'react'
import { BasePropsType } from '../_internal'

export type NumericEvent = (v: string) => void

export interface NumericInputPropsType extends BasePropsType {
  header?: React.ReactNode | React.FC<{ locale?: any }>
  defaultValue?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  disabledKeys?: string[]
  keypadClassName?: string
  autoFocus?: boolean
  confirm?: boolean
  confirmLabel?: string
  confirmDisabled?: boolean
  customKey?: '.' | 'X' | '-'
  onConfirm?: NumericEvent
  onChange?: (v: string, changed?: boolean) => void
  onFocus?: NumericEvent
  onBlur?: NumericEvent
  align?: 'left' | 'right'
  clear?: boolean
}
