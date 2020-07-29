import { BasePropsType } from '../_internal'

export interface TabTitlePropsType {
  title: string
  desc?: string
  badge?: string
}

type TabItemType = 'basis' | 'capsule' | 'mixin'

export interface TabsPropsType extends BasePropsType {
  type?: TabItemType
  index?: number
  maxTabCount?: number
  activeClassName?: string
  onChange?: (currentIndex: number) => void
  enableEdgeFadeOut?: boolean
  onTabPress?: (currentIndex: number, e: React.SyntheticEvent) => boolean | void
  disabled?: boolean
  animateTransitions?: boolean
}

export interface TabItemPropsType {
  type: TabItemType
  active: boolean
  onPress: (e: React.SyntheticEvent) => void
  minTabWidth?: string
  activeClassName?: string
  item: TabTitlePropsType
}

export type handleTabPress = (
  index: number,
) => (e: React.SyntheticEvent) => void

export interface TabPanePropsType extends BasePropsType {
  tab: TabTitlePropsType
}
