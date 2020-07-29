import { BasePropsType, IconType } from '../_internal'
import { ButtonPropsType } from '../Button/PropsType'

export interface ResultPropsType extends BasePropsType {
  type?: 'success' | 'error' | 'info' | 'wait' | 'warn'
  img?: IconType
  title?: React.ReactNode
  message?: React.ReactNode
  buttons?: (ButtonPropsType & { children: React.ReactNode })[]
}
