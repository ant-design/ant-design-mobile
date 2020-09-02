import { BasePropsType } from '../_internal'

export interface BaseModalOptions {
  className?: string
  title?: string
  content: React.ReactNode
  // 缩略图
  thumb?: string
  thumbSize?: 'md' | 'lg'
  // 背景
  background?: string
  // 自定义区域
  custom?: React.ReactNode
}

export interface AlertOptions extends BaseModalOptions {
  buttonText?: string
}

export interface ConfirmOptions extends BaseModalOptions {
  confirmText?: string
  cancelText?: string
}

export interface StandardOptions extends BaseModalOptions {
  mainButton: {
    text: string
    type?: 'normal' | 'primary' | 'bold' | 'danger' // 默认 normal, primary 表示强调, bold 表示字体加粗，danger 表示危险操作，文字变红
    onPress?: () => void
  }
  addonButton?: { text: string; onPress?: () => void } // 辅助按钮，第二个按钮
  cancelButton?: { text: string; onPress?: () => void } // 取消按钮，第三个按钮
  closeType?: 'dark' | 'light' | 'none' // 默认 dark , 关闭图标的颜色，用于在深色和浅色背景上切换
  onClose?: () => void
  onDismiss?: () => void // 点击 x 的时候触发
}

export interface ModalPropsType extends BasePropsType {
  type?: 'promo' | 'product'
  visible: boolean
  maskClosable?: boolean
  showCloseIcon?: boolean
  onClose?: () => void
}
