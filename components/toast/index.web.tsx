import * as React from 'react';
import Notification from 'rc-notification';
import Icon from '../icon';

let messageInstance;
let prefixCls = 'am-toast';

function getMessageInstance() {
  messageInstance = Notification.newInstance({
    prefixCls,
    style: { top: 0 },
  });
  return messageInstance;
}

function notice(content, duration = 3, onClose, type) {
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
  info(content, duration, onClose) {
    return notice(content, duration, onClose, 'info');
  },
  success(content, duration, onClose) {
    return notice(content, duration, onClose, 'success');
  },
  fail(content, duration, onClose) {
    return notice(content, duration, onClose, 'fail');
  },
  offline(content, duration, onClose) {
    return notice(content, duration, onClose, 'network');
  },
  loading(content, duration, onClose) {
    return notice(content, duration, onClose, 'loading');
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
