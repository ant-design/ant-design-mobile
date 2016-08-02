import * as React from 'react';
import Notification from 'rc-notification';
import Icon from '../icon';

let messageInstance;
let prefixCls = 'am-toast';

function getMessageInstance() {
  messageInstance = (Notification as any).newInstance({
    prefixCls,
    style: { top: 0 },
    transitionName: 'am-fade',
  });
  return messageInstance;
}

function notice(content, type, duration = 3, onClose) {
  let iconType = ({
    info: '',
    success: 'check-circle-o',
    fail: 'cross-circle-o',
    network: 'frown',
    loading: 'loading',
  })[type];

  if (typeof duration === 'function') {
    onClose = duration;
    duration = 3;
  }

  let instance = getMessageInstance();
  instance.notice({
    duration,
    style: {},
    content: (
      <div className={`${prefixCls}-text`}>
        {!!iconType && <Icon type={iconType} />}
        <div>{content}</div>
      </div>
    ),
    onClose: () => {
      if (onClose) {
        onClose();
      }
      instance.destroy();
      instance = null;
    },
  });
}

export default {
  SHORT: 3,
  LONG: 8,
  show(content: string, duration?: number) {
    return notice(content, 'info', duration, () => {});
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
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
