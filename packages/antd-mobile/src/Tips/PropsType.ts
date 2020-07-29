import { BasePropsType, IconType } from '../_internal'

export interface TipsPropsType extends BasePropsType {
  content: string
  // 右侧操作按钮文案
  opText?: string
  // 左侧图标
  icon?: IconType | React.ReactNode
  show?: boolean
  offset?:
    | undefined
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
  className?: string
  // 右侧关闭按钮
  showClose?: boolean
  // 右侧关闭按钮 点击回调
  onClosePress?: (e?: React.SyntheticEvent) => void
  // 右侧操作按钮 点击回调
  onButtonPress?: (e?: React.SyntheticEvent) => void
}
