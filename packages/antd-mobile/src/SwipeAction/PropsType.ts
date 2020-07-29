import { BasePropsType } from '../_internal'

type ButtonType = undefined | 'default' | 'primary' | 'warn'

export interface SwipeActionPropsType extends BasePropsType {
  autoClose?: boolean
  disabled?: boolean
  left?: Array<{
    text: string
    onPress?: () => void
    type?: ButtonType
    className?: string
  }>
  right?: Array<{
    text: string
    onPress?: () => void
    type?: ButtonType
    className?: string
  }>
  onOpen?: () => void
  onClose?: () => void
}
