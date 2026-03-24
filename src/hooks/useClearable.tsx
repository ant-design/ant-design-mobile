import { CloseCircleFill } from 'antd-mobile-icons'
import type { ReactNode } from 'react'
import React from 'react'

export interface ClearableConfig {
  onClear?: () => void
  clearIcon?: ReactNode
}

export interface UseClearableProps {
  /** Boolean as toggle, object for detailed config (custom icon / callback) */
  clearable?: boolean | ClearableConfig
  /** Fallback onClear when clearable is boolean (for flat-props pattern like Input) */
  onClear?: () => void
  /** Fallback clearIcon when clearable is boolean (for flat-props pattern like Input) */
  clearIcon?: ReactNode
  value: string
  hasFocus: boolean
  readOnly?: boolean
  disabled?: boolean
  /** Icon from ConfigProvider, lower priority than clearable config / clearIcon prop */
  defaultClearIcon?: ReactNode
  /** Whether to only show clear button when focused */
  onlyShowClearWhenFocus?: boolean
}

export function useClearable(props: UseClearableProps) {
  const {
    clearable,
    value,
    hasFocus,
    readOnly = false,
    disabled = false,
    onlyShowClearWhenFocus,
  } = props

  // Normalize clearable: falsy → off, true → empty config, object → use as-is
  const config: ClearableConfig | null = (() => {
    if (!clearable) return null
    if (clearable === true) return {}
    return clearable
  })()

  // Clearable is disabled when readOnly or disabled
  const isClearable = !!config && !readOnly && !disabled

  // Show clear button only when: clearable enabled + has value + focus condition met
  const shouldShowClear = (() => {
    if (!isClearable || !value) return false
    if (onlyShowClearWhenFocus) return hasFocus
    return true
  })()

  // clearIcon priority: config.clearIcon > props.clearIcon > props.defaultClearIcon > built-in default
  const clearIcon = config?.clearIcon ??
    props.clearIcon ??
    props.defaultClearIcon ?? <CloseCircleFill />

  // onClear priority: config.onClear > props.onClear
  const onClear = config?.onClear ?? props.onClear

  return { isClearable, shouldShowClear, clearIcon, onClear }
}
