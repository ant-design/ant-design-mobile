import { BasePropsType } from '../_internal'

export interface SwitchPropsType extends BasePropsType {
  checked: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  name?: string
}
