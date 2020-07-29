import { BasePropsType } from '../_internal'

export interface TabBarPropsType extends BasePropsType {
  maxTabBarCount?: number
  onChange?: (currentIndex: number) => void
}

export interface TabBarItemPropsType extends BasePropsType {
  title?: string
  icon?: React.ReactNode
  activeIcon?: React.ReactNode
  active?: boolean
  activeClassName?: string
  value?: any
  onPress?: (e: React.SyntheticEvent) => void
}
