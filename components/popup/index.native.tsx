import React from 'react';
import topView from 'rn-topview';
import PopupContainer from './PopupContainer.native';

let popupInstance;

export default {
  show(content, options = {
    animationType: 'slide-down',
    maskClosable: true,
    onMaskClose() {},
  }) {
    topView.set(
      <PopupContainer
        ref={i => popupInstance = i}
        animationType={options.animationType}
        maskClosable={options.maskClosable}
        onMaskClose={options.onMaskClose}
        onAnimationEnd={visible => { if (!visible) { topView.remove(); } }}
        visible
      >
        {content}
      </PopupContainer>,
    );
  },
  hide() {
    if (popupInstance) {
      popupInstance.hide();
    }
  },
};
