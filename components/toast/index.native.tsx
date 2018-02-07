import React from 'react';
import topView from 'rn-topview';
import ToastContainer from './ToastContainer.native';

function notice(
  content: string,
  type: string,
  duration = 3,
  onClose: (() => void) | undefined,
  mask = true,
) {
  topView.remove();
  function animationEnd() {
    topView.remove();
  }
  topView.set(
    <ToastContainer
      content={content}
      duration={duration}
      onClose={onClose}
      type={type}
      mask={mask}
      onAnimationEnd={animationEnd}
    />,
  );
}

export default {
  SHORT: 3,
  LONG: 8,
  show(content: string, duration?: number, mask?: boolean) {
    return notice(content, 'info', duration, () => {}, mask);
  },
  info(
    content: string,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'info', duration, onClose, mask);
  },
  success(
    content: string,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'success', duration, onClose, mask);
  },
  fail(
    content: string,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'fail', duration, onClose, mask);
  },
  offline(
    content: string,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'offline', duration, onClose, mask);
  },
  loading(
    content: string,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'loading', duration, onClose, mask);
  },
  hide() {
    topView.remove();
  },
};
