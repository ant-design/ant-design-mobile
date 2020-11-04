import * as React from 'react'
import { BasePropsType, BaseFormItemType } from '../_internal'

export type NumericEvent = (v: string) => void

export interface NumericInputPropsType
  extends BasePropsType,
    BaseFormItemType<string> {
  header?: React.ReactNode
  showEmptyHeader?: boolean
  defaultValue?: string
  value?: string
  placeholder?: string
  disabledKeys?: string[]
  keypadClassName?: string
  autoFocus?: boolean
  confirm?: boolean
  confirmLabel?: string
  confirmDisabled?: boolean
  customKey?: '.' | 'X' | '-'
  onConfirm?: NumericEvent
  align?: 'left' | 'right'
  clear?: boolean
  disabledAutoScroll?: boolean
}
