import React from 'react';
import Notification from 'rc-notification';
import Icon from '../icon';
import classnames from 'classnames';

let messageInstance;
let prefixCls = 'am-toast';

function getMessageInstance(mask, callback) {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }
  (Notification as any).newInstance({
    prefixCls,
    style: { }, // clear rc-notification default style
    transitionName: 'am-fade',
    className: classnames({
      [`${prefixCls}-mask`]: mask,
      [`${prefixCls}-nomask`]: !mask,
    }),
  }, (notification) => callback && callback(notification));
}

function notice(content, type, duration = 3, onClose, mask = true) {
  let iconType = ({
    info: '',
    success: 'success',
    fail: 'fail',
    offline: 'dislike',
    loading: 'loading',
  })[type];

  getMessageInstance(mask, (notification) => {
    messageInstance = notification;

    notification.notice({
      duration,
      style: {},
      content: !!iconType ? (
        <div className={`${prefixCls}-text ${prefixCls}-text-icon`} role="alert" aria-live="assertive">
          <Icon type={iconType} size="lg" />
          <div className={`${prefixCls}-text-info`}>{content}</div>
        </div>
      ) : (
        <div className={`${prefixCls}-text`} role="alert" aria-live="assertive">
          <div>{content}</div>
        </div>
      ),
      closable: true,
      onClose() {
        if (onClose) {
          onClose();
        }
        notification.destroy();
        notification = null;
        messageInstance = null;
      },
    });
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
