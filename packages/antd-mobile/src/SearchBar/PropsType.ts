import { BasePropsType } from '../_internal'

export interface SearchBarPropsType extends BasePropsType {
  defaultValue?: string
  value?: string
  placeholder?: string
  onSubmit?: (value: string) => void
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onCancel?: (value: string) => void
  showCancelButton?: boolean
  cancelText?: string
  disabled?: boolean
  autoFocus?: boolean
  onClear?: (value: string) => void
  maxLength?: number
  borderColor?: string
}
