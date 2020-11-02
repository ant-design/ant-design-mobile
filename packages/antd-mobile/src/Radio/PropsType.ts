import {
  BasePropsType,
  BaseFormItemType,
  BaseFormItemTypeWithOutFocus,
} from '../_internal'
import { ListPropsType } from '../List/PropsType'

export interface RadioGroupPropsType
  extends BasePropsType,
    ListPropsType,
    Omit<BaseFormItemTypeWithOutFocus<any>, 'id'> {
  defaultValue?: any
  value?: any
}

export interface RadioItemPropsType extends BasePropsType {
  value: any
  disabled?: boolean
  id?: string
  brief?: React.ReactNode
}

export interface RadioPropsType
  extends BasePropsType,
    BaseFormItemType<boolean> {
  value?: any

  checked?: boolean
  defaultChecked?: boolean
}
