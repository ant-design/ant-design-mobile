import classnames from 'classnames';
import * as React from 'react';
import Notification from 'rmc-notification';
import Icon from '../icon';

const SHORT = 3;

interface IToastConfig {
  duration: number;
  mask: boolean;
}

const config: IToastConfig = {
  duration: SHORT,
  mask: true,
};

let messageInstance: any;
const prefixCls = 'am-toast';

function getMessageInstance(
  mask: boolean,
  callback: (notification: any) => void,
) {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }
  (Notification as any).newInstance(
    {
      prefixCls,
      style: {}, // clear rmc-notification default style
      transitionName: 'am-fade',
      className: classnames({
        [`${prefixCls}-mask`]: mask,
        [`${prefixCls}-nomask`]: !mask,
      }),
    },
    (notification: any) => callback && callback(notification),
  );
}

function notice(
  content: React.ReactNode,
  type: string,
  duration = config.duration,
  onClose: (() => void) | undefined | null,
  mask = config.mask,
) {
  const iconTypes: { [key: string]: string } = {
    info: '',
    success: 'success',
    fail: 'fail',
    offline: 'dislike',
    loading: 'loading',
  };
  const iconType = iconTypes[type];

  getMessageInstance(mask, notification => {
    messageInstance = notification;

    notification.notice({
      duration,
      style: {},
      content: !!iconType ? (
        <div
          className={`${prefixCls}-text ${prefixCls}-text-icon`}
          role="alert"
          aria-live="assertive"
        >
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
  SHORT,
  LONG: 8,
  show(content: React.ReactNode, duration?: number, mask?: boolean) {
    return notice(content, 'info', duration, () => {}, mask);
  },
  info(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'info', duration, onClose, mask);
  },
  success(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'success', duration, onClose, mask);
  },
  fail(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'fail', duration, onClose, mask);
  },
  offline(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'offline', duration, onClose, mask);
  },
  loading(
    content: React.ReactNode,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'loading', duration, onClose, mask);
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
  config(conf: Partial<IToastConfig> = {}) {
    const { duration = SHORT, mask } = conf;
    config.duration = duration;
    if (mask === false) {
      config.mask = false;
    }
  },
};
