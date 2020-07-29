import { BasePropsType } from '../_internal'

export interface SelectorItemType {
  text: string
  value: any
  subText?: string
  disabled?: boolean
  active?: boolean
}

export interface SelectorPropsType extends BasePropsType {
  items: Array<SelectorItemType>
  className?: string
  activeItemClassName?: string
  multiple?: boolean
  onChange?: (v: Array<SelectorItemType>) => void
}
