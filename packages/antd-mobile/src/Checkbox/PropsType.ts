import { BasePropsType, BaseFormItemTypeWithOutFocus } from '../_internal'

import { ListPropsType } from '../List/PropsType'

export interface CheckboxPropsType
  extends BasePropsType,
    BaseFormItemTypeWithOutFocus<boolean> {
  value?: any

  // others
  checked?: boolean
  defaultChecked?: boolean
}

export interface CheckboxGroupPropsType
  extends BasePropsType,
    Omit<BaseFormItemTypeWithOutFocus<any[]>, 'id'>,
    ListPropsType {
  value?: any[]
  defaultValue?: any[]

  // TODO: support options for items
}

export interface CheckboxItemPropsType extends BasePropsType {
  disabled?: boolean
  value?: any
  id?: string
}
