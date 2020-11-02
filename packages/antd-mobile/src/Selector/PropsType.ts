import { BasePropsType, BaseFormItemTypeWithOutFocus } from '../_internal'

export interface SelectorItemType<T> {
  text: string
  value: T
  subText?: string
  disabled?: boolean
}

export interface SelectorPropsType<T>
  extends BasePropsType,
    Omit<BaseFormItemTypeWithOutFocus<T[]>, 'id'> {
  items: SelectorItemType<T>[]
  activeItemClassName?: string
  multiple?: boolean
  value?: T[]
  defaultValue?: T[]
}
