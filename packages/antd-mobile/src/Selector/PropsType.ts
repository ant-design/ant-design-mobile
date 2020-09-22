import { BasePropsType } from '../_internal'

export interface SelectorItemType {
  text: string
  value: any
  subText?: string
  disabled?: boolean
}

export interface SelectorPropsType extends BasePropsType {
  value?: any[]
  defaultValue?: any[]
  items: Array<SelectorItemType>
  className?: string
  activeItemClassName?: string
  multiple?: boolean
  onChange?: (v: Array<SelectorItemType>) => void
}
