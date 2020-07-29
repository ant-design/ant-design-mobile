import { BasePropsType } from '../_internal'

export interface BadgePropsType extends BasePropsType {
  placement?: 'left' | 'right' | 'middle'
  bubble?: boolean
  text?: any
  overflowCount?: number
  dot?: boolean
  stroke?: boolean
}
