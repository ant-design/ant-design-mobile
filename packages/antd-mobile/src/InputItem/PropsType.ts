import { BasePropsType, BaseFormItemType } from '../_internal'

export interface InputItemPropsType
  extends BasePropsType,
    BaseFormItemType<string> {
  value?: string
  defaultValue?: string
  placeholder?: string
  clear?: boolean
}
