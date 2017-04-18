/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import Notification from 'rc-notification';
import Icon from '../icon';

let messageInstance;
let prefixCls = 'am-toast';

function getMessageInstance(mask) {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }
  messageInstance = (Notification as any).newInstance({
    prefixCls,
    style: { top: (mask ? 0 : '50%')  },
    transitionName: 'am-fade',
    className: mask ? `${prefixCls}-mask` : '',
  });
  return messageInstance;
}

function notice(content, type, duration = 3, onClose, mask = true) {
  let iconType = ({
    info: '',
    success: require('./style/assets/success.icon.svg'),
    fail: require('./style/assets/fail.icon.svg'),
    offline: require('./style/assets/dislike.icon.svg'),
    loading: 'loading',
  })[type];

  let instance = getMessageInstance(mask);
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
  show(content: string, duration?: number, mask?: boolean) {
    return notice(content, 'info', duration, () => {}, mask);
  },
  info(content: string, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'info', duration, onClose, mask);
  },
  success(content: string, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'success', duration, onClose, mask);
  },
  fail(content: string, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'fail', duration, onClose, mask);
  },
  offline(content: string, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'offline', duration, onClose, mask);
  },
  loading(content: string, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(content, 'loading', duration, onClose, mask);
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
