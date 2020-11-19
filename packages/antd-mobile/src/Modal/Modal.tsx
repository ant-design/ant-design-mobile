import * as React from 'react'
import Dialog from 'rmc-dialog'
import { CloseOutline, CloseCircleOutline } from '@ant-design/mobile-icons'

import { withError, Touchable } from '../rmc'
import { ModalPropsType } from './PropsType'

const RmcDialog: any = Dialog

const Modal: React.FC<ModalPropsType> = props => {
  const prefixCls = 'amd-modal-' + props.type

  // 这里不需要 fade-out/zoom-out 的动效，直接关掉
  if (!props.visible) {
    return null
  }

  return (
    <RmcDialog
      visible={props.visible}
      title=""
      className={props.className}
      prefixCls={prefixCls}
      transitionName="amd-zoom"
      maskTransitionName="amd-fade"
      maskClosable={props.maskClosable}
      onClose={props.onClose}
      closable={false}
    >
      {props.showCloseIcon && (
        <Touchable onPress={props.onClose}>
          <div>
            {props.type === 'product' && (
              <CloseOutline className={prefixCls + '-close-icon'} />
            )}
            {props.type === 'promo' && (
              <CloseCircleOutline className={prefixCls + '-close-icon'} />
            )}
          </div>
        </Touchable>
      )}
      {props.children}
    </RmcDialog>
  )
}

Modal.displayName = 'Modal'
Modal.defaultProps = {
  type: 'product',
  maskClosable: false,
  showCloseIcon: true,
}

export default withError(Modal)
