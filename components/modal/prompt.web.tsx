/* tslint:disable:no-switch-case-fall-through */
/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import ReactDOM from 'react-dom';
import Modal from './Modal';

export default function a(...args) {
  if (!args || !args[2]) {
    // console.log('Must specify callbackOrActions');
    return;
  }

  const prefixCls = 'am-modal';
  const title = args[0];
  const type = args[3] || 'default';
  const defaultValue = args[4] || '';

  let data: any = {};

  function onChange(e) {
    const target = e.target;
    const inputType = target.getAttribute('type');
    data[inputType] =  target.value;
  }

  let inputDom;

  const focusFn = function(input) {
    setTimeout(() => {
      if (input) {
        input.focus();
      }
    }, 500);
  };

  switch (type) {
    case 'login-password':
      inputDom = (
        <div>
          <div className={`${prefixCls}-input`}>
            <input type="text" defaultValue={defaultValue} ref={input => focusFn(input)} onChange={onChange} />
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
            <input type="password" defaultValue="" ref={input => focusFn(input)} onChange={onChange} />
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
            <input type="text" defaultValue={defaultValue} ref={input => focusFn(input)} onChange={onChange} />
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

  let div: any = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
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
            return getArgs(item.onPress);
          }
        },
      };
    });
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
      closable={false}
      maskClosable={false}
      transitionName="am-zoom"
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
