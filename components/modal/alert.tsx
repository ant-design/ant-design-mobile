import * as React from 'react';
import * as ReactDOM from 'react-dom';
import closest from '../_util/closest';
import Modal from './Modal';
import { Action } from './PropsType';

export default function alert(
  title: React.ReactNode,
  message: React.ReactNode,
  actions = [{ text: '确定' }],
  platform = 'ios',
) {
  let closed = false;

  if (!title && !message) {
    // console.log('Must specify either an alert title, or message, or both');
    return {
      close: () => {},
    };
  }

  const div: any = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const footer = actions.map((button: Action<React.CSSProperties>) => {
    // tslint:disable-next-line:only-arrow-functions
    const orginPress = button.onPress || function() {};
    button.onPress = () => {
      if (closed) {
        return;
      }

      const res = orginPress();
      if (res && res.then) {
        res
          .then(() => {
            closed = true;
            close();
          })
          .catch(() => {});
      } else {
        closed = true;
        close();
      }
    };
    return button;
  });

  const prefixCls = 'am-modal';

  function onWrapTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target as Element, `.${prefixCls}-footer`);
    if (!pNode) {
      e.preventDefault();
    }
  }

  ReactDOM.render(
    <Modal
      visible
      transparent
      title={title}
      transitionName="am-zoom"
      closable={false}
      maskClosable={false}
      footer={footer}
      maskTransitionName="am-fade"
      platform={platform}
      wrapProps={{ onTouchStart: onWrapTouchStart }}
    >
      <div className={`${prefixCls}-alert-content`}>{message}</div>
    </Modal>,
    div,
  );

  return {
    close,
  };
}
