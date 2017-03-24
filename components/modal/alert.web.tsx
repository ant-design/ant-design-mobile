/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import ReactDOM from 'react-dom';
import Modal from './Modal';

export default function (...args) {
  const title = args[0];
  const content = args[1];
  const actions = args[2] || [{ text: '确定' }];

  if (!title && !content) {
    // console.log('Must specify either an alert title, or message, or both');
    return {
      close: () => {},
    };
  }

  const prefixCls = 'am-modal';
  let div: any = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    div.parentNode.removeChild(div);
  }

  const footer = actions.map((button) => {
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

  ReactDOM.render(
    <Modal
      visible
      transparent
      prefixCls={prefixCls}
      title={title}
      transitionName="am-zoom"
      closable={false}
      maskClosable={false}
      footer={footer}
      maskTransitionName="am-fade"
    >
      <div style={{ zoom: 1, overflow: 'hidden' }}>{content}</div>
    </Modal>, div,
  );

  return {
    close,
  };
}
