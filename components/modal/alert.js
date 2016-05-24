import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

export default function (...args) {
  const title = args[0];
  const content = args[1];
  const actions = args[2] || [{ text: '确定' }];

  if (!title || !content) {
    console.log('Must specify either an alert title, or message, or both');
    return;
  }

  const prefixCls = 'am-modal';
  let div = document.createElement('div');
  document.body.appendChild(div);

  let d;
  function close() {
    d.setState({
      visible: false
    });
    ReactDOM.unmountComponentAtNode(div);
    div.parentNode.removeChild(div);
  }

  const btnGroupClass = `${prefixCls}-button-group-${actions.length === 2 ? 'h' : 'v'}`;
  const footer = [<div key="footer" className={btnGroupClass}>
    {
      actions.map((button, i) => {
        return (
          <a key={i} className={`${prefixCls}-button`} href="#" onClick={(e) => {
            e.preventDefault();
            if (button.onPress) {
              button.onPress();
            }
            close();
          }}>{button.text || `按钮${i}`}</a>
        );
      })
    }
  </div>];

  ReactDOM.render(<Modal
    visible
    transparent
    prefixCls={prefixCls}
    title={title}
    animation="zoom"
    footer={footer}
    maskAnimation="fade">
    <div style={{ zoom: 1, overflow: 'hidden' }}>{content}</div>
  </Modal>, div, function () {
    d = this;
  });
}
