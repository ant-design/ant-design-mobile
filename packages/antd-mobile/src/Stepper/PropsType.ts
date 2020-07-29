import { BasePropsType } from '../_internal'

export interface StepperPropsType extends BasePropsType {
  min?: number
  max?: number
  value?: number
  step?: string | number
  defaultValue?: string | number
  disabled?: boolean
  readOnly?: boolean
  showNumber?: boolean
  onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void
  onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => void
  onChange?: (value: any) => void
}
