import { BasePropsType, IconType } from '../_internal'

export interface ButtonPropsType extends BasePropsType {
  type?: 'default' | 'primary' | 'ghost' | 'warn' | 'warn-ghost' | 'light'

  disabled?: boolean
  onPress?: (e?: React.SyntheticEvent) => void
  activeClassName?: string

  subTitle?: string
  capsule?: boolean
  capsuleSize?: 'md' | 'lg' | 'sm'
  capsuleAutoWidth?: boolean

  icon?: IconType
  loading?: boolean
  loadingText?: string

  htmlType?: 'button' | 'submit' | 'reset'
}
