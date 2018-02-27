import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import closest from '../_util/closest';
import { Action } from './PropsType';

export default function operation(
  actions = [{ text: '确定' }],
  platform = 'ios',
) {
  let closed = false;

  const prefixCls = 'am-modal';
  let div: any = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const footer = actions.map((button: Action) => {
    const orginPress = button.onPress || function() {};
    button.onPress = () => {
      if (closed) { return; }

      const res = orginPress();
      if (res && res.then) {
        res.then(() => {
          closed = true;
          close();
        }).catch(() => { });
      } else {
        closed = true;
        close();
      }
    };
    return button;
  });

  function onWrapTouchStart(e) {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, `.am-modal-footer`);
    if (!pNode) {
      e.preventDefault();
    }
  }

  ReactDOM.render(
    <Modal
      visible
      operation
      transparent
      prefixCls={prefixCls}
      transitionName="am-zoom"
      closable={false}
      maskClosable
      onClose={close}
      footer={footer}
      maskTransitionName="am-fade"
      className="am-modal-operation"
      platform={platform}
      wrapProps={{ onTouchStart: onWrapTouchStart }}
    /> , div,
  );

  return {
    close,
  };
}
