import { BasePropsType } from '../_internal'

export interface CheckboxPropsType extends BasePropsType {
  // use for label
  id?: string

  // use for form
  name?: string
  value?: any

  // others
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}
