import React from 'react';
import topView from 'rn-topview';
import ToastContainer from './ToastContainer';

function notice(content, type, duration = 3, onClose) {
  if (typeof duration === 'function') {
    onClose = duration;
    duration = 3;
  }

  topView.set(
    <ToastContainer
      content={content}
      duration={duration}
      onClose={onClose}
      type={type}
      onAnimationEnd={() => {
        topView.remove();
      }}
    />
  );
}

export default {
  SHORT: 3,
  LONG: 8,
  show(content: string, duration?: number) {
    return notice(content, 'info', duration, () => {
    });
  },
  info(content: string, duration?: number, onClose?: () => void) {
    return notice(content, 'info', duration, onClose);
  },
  success(content: string, duration?: number, onClose?: () => void) {
    return notice(content, 'success', duration, onClose);
  },
  fail(content: string, duration?: number, onClose?: () => void) {
    return notice(content, 'fail', duration, onClose);
  },
  offline(content: string, duration?: number, onClose?: () => void) {
    return notice(content, 'offline', duration, onClose);
  },
  loading(content: string, duration?: number, onClose?: () => void) {
    return notice(content, 'loading', duration, onClose);
  },
  hide() {
    topView.remove();
  },
};
