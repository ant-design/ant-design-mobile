import { BasePropsType, BaseFormItemTypeWithOutFocus } from '../_internal'

export interface SwitchPropsType
  extends BasePropsType,
    BaseFormItemTypeWithOutFocus<boolean> {
  value?: string // just for html form
  checked?: boolean
  defaultChecked?: boolean
}
