import { BasePropsType } from '../_internal'

export interface TagPropsType extends BasePropsType {
  type?: 'filling' | 'filling-light' | 'line' | 'icon'
  theme?: 'normal' | 'orange' | 'tangerine' | 'green'
  size?: 'sm'
  onPress?: (e?: React.SyntheticEvent) => void
  component?: React.ReactNode | string
}
