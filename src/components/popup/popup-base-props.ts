import React from 'react'
import { GetContainer } from '../../utils/render-to-container'
import { MaskProps } from '../mask'
import { PropagationEvent } from '../../utils/with-stop-propagation'

export type PopupBaseProps = {
  afterClose?: () => void
  afterShow?: () => void
  bodyClassName?: string
  bodyStyle?: React.CSSProperties
  closeOnMaskClick?: boolean
  destroyOnClose?: boolean
  disableBodyScroll?: boolean
  forceRender?: boolean
  getContainer?: GetContainer
  mask?: boolean
  maskClassName?: string
  maskStyle?: MaskProps['style']
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onClose?: () => void
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  showCloseButton?: boolean
  stopPropagation?: PropagationEvent[]
  visible?: boolean
}

export const defaultPopupBaseProps = {
  closeOnMaskClick: false,
  destroyOnClose: false,
  disableBodyScroll: true,
  forceRender: false,
  getContainer: () => document.body,
  mask: true,
  showCloseButton: false,
  stopPropagation: ['click'],
  visible: false,
}
