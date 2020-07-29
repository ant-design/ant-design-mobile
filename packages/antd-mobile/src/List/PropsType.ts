import { BasePropsType, IconType } from '../_internal'

export interface ListPropsType extends BasePropsType {
  radius?: boolean
  renderHeader?: (() => React.ReactNode) | React.ReactNode
  renderFooter?: (() => React.ReactNode) | React.ReactNode
}

export interface ListItemPropsType extends BasePropsType {
  align?: 'top' | 'middle' | 'bottom'
  disabled?: boolean
  thumb?: IconType
  brief?: React.ReactNode
  extra?: React.ReactNode
  arrow?: 'horizontal' | 'down' | 'up' | 'empty' | ''
  wrap?: boolean
  error?: boolean
  platform?: 'android' | 'ios'
  onPress?: (e: React.SyntheticEvent) => void
}

export interface BriefPropsType extends BasePropsType {
  wrap?: boolean
}
