import { BasePropsType } from '../_internal'

export interface LoadingPropsType extends BasePropsType {
  show: boolean
  text?: string
  delay?: number
  className?: string
}
