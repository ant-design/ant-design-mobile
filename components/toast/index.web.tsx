/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
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
    offline: require('./style/assets/dislike.svg'),
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
    content: !!iconType ? (
      <div className={`${prefixCls}-text ${prefixCls}-text-icon`}>
        <Icon type={iconType} size="lg" />
        <div className={`${prefixCls}-text-info`}>{content}</div>
      </div>
    ) : (
      <div className={`${prefixCls}-text`}>
        <div>{content}</div>
      </div>
    ),
    onClose: () => {
      if (onClose) {
        onClose();
      }
      instance.destroy();
      instance = null;
      messageInstance = null;
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
