/* tslint:disable:no-switch-case-fall-through */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Modal from './Modal';

export default function (...args) {
  if (!args || !args[2]) {
    // console.log('Must specify callbackOrActions');
    return;
  }

  const prefixCls = 'am-modal';
  const title = args[0];

  let inputDom;
  const type = args[3] || 'default';

  let data: any = {};

  function onChange(e) {
    const target = e.target;
    const inputType = target.getAttribute('type');
    data[inputType] =  target.value;
  }

  switch (type) {
    case 'login-password':
      inputDom = (
        <div>
          <div className={`${prefixCls}-input`}>
            <input type="text" defaultValue="" onChange={onChange} />
          </div>
          <div className={`${prefixCls}-input`}>
            <input type="password" defaultValue="" onChange={onChange} />
          </div>
        </div>
      );
      break;
    case 'secure-text':
      inputDom = (
        <div>
          <div className={`${prefixCls}-input`}>
            <input type="password" defaultValue="" onChange={onChange} />
          </div>
        </div>
      );
      break;
    case 'plain-text':
    case 'default':
    default:
      inputDom = (
        <div>
          <div className={`${prefixCls}-input`}>
            <input type="text" defaultValue="" onChange={onChange} />
          </div>
        </div>
      );
      break;
  }

  let content = (
    <div>
      {args[1]}
      {inputDom}
    </div>
  );

  let div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    div.parentNode.removeChild(div);
  }

  function getArgs(func) {
    const text = data.text || '';
    const password = data.password || '';
    if (type === 'login-password') {
      return func(text, password);
    } else if (type === 'secure-text') {
      return func(password);
    }
    return func(text);
  }

  let actions;
  if (typeof args[2] === 'function') {
    actions = [
      { text: '取消' },
      { text: '确定', onPress: () => { getArgs(args[2]); } },
    ];
  } else {
    actions = args[2].map(item => {
      return {
        text: item.text,
        onPress: () => {
          if (item.onPress) {
            getArgs(item.onPress);
          }
        },
      };
    });
  }

  const footer = [<div key="footer" className={`${prefixCls}-button-group-h`}>
    {
      actions.map((button, i) => {
        return (
          <a key={i} className={`${prefixCls}-button`} href="#" onClick={(e) => {
            e.preventDefault();
            if (button.onPress) {
              button.onPress();
            }
            close();
          }}>{button.text}</a>
        );
      })
    }
  </div>];

  ReactDOM.render(<Modal
    visible
    transparent
    prefixCls={prefixCls}
    title={title}
    transitionName="am-zoom"
    footer={footer}
    maskTransitionName="am-fade">
    <div style={{ zoom: 1, overflow: 'hidden' }}>{content}</div>
  </Modal>, div);
}
