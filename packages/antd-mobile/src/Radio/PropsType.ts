import { BasePropsType } from '../_internal'
import { ListPropsType } from '../List/PropsType'

export interface RadioGroupPropsType extends BasePropsType, ListPropsType {
  // use for form
  name?: string
  defaultValue?: string
  disabled?: boolean
  onChange?: (v: string) => void
}

export interface RadioItemPropsType extends BasePropsType {
  value: any
  disabled?: boolean
  brief?: React.ReactNode
}
