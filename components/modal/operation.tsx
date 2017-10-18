import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import { Action } from './PropsType';

export default function operation(
  actions = [{ text: '确定' }],
  platform = 'ios',
) {

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
      const res = orginPress();
      if (res && res.then) {
        res.then(() => {
          close();
        });
      } else {
        close();
      }
    };
    return button;
  });

  function onWrapTouchStart(e) {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    e.preventDefault();
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
