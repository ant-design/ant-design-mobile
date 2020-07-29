import { BasePropsType } from '../_internal'

export interface PopoverItemProps extends BasePropsType {
  className?: string
  icon?: React.ReactNode
  disabled?: boolean
  firstItem?: string
  value?: any
  badge?: {
    dot?: boolean
    text?: string | number
  }
  onPress?: (e: React.SyntheticEvent) => void
}

export interface PopoverPropsType extends BasePropsType {
  visible?: boolean
  onVisibleChange: (visible: boolean) => void
  placement?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
  mask?: boolean
  onSelect?: (node: any, index?: number) => void
  overlay: React.ReactNode
  disabled?: boolean
  align?: {}
  trigger?: any
}
