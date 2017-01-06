import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import topView from 'rn-topview';
import PopupContainer from './PopupContainer';

export default {
  show(content, options = {
    animationType: 'slide-down',
    maskClosable: true,
    onMaskClose() {},
  }) {
    topView.set(
      <PopupContainer
        animationType={options.animationType}
        maskClosable={options.maskClosable}
        onMaskClose={options.onMaskClose}
        onAnimationEnd={visible => {
          if (!visible) {
            topView.remove();
          }
        }}
        visible
      >
        {content}
      </PopupContainer>
    );
  },
  hide() {
    (DeviceEventEmitter as any).emit('PopupHide');
  },
};
