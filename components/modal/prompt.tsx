import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import closest from '../_util/closest';

export default function prompt(
  title, message, callbackOrActions,
  type = 'default', defaultValue = '', placeholders = ['', ''],
  platform = 'ios',
) {
  let closed = false;

  defaultValue = typeof defaultValue === 'string' ? defaultValue :
    typeof defaultValue === 'number' ? `${defaultValue}` : '';

  if (!callbackOrActions) {
    // console.log('Must specify callbackOrActions');
    return {
      close: () => { },
    };
  }

  const prefixCls = 'am-modal';

  let data: any = {
    text: defaultValue,
  };

  function onChange(e) {
    const target = e.target;
    const inputType = target.getAttribute('type');
    data[inputType] = target.value;
  }

  let inputDom;

  const focusFn = function (input) {
    setTimeout(() => {
      if (input) {
        input.focus();
      }
    }, 500);
  };

  switch (type) {
    case 'login-password':
      inputDom = (
        <div className={`${prefixCls}-input-container`}>
          <div className={`${prefixCls}-input`}>
            <label>
              <input
                type="text"
                value={data.text}
                ref={input => focusFn(input)}
                onChange={onChange}
                placeholder={placeholders[0]}
              />
            </label>
          </div>
          <div className={`${prefixCls}-input`}>
            <label>
              <input
                type="password"
                value={data.password}
                onChange={onChange}
                placeholder={placeholders[1]}
              />
            </label>
          </div>
        </div>
      );
      break;
    case 'secure-text':
      inputDom = (
        <div className={`${prefixCls}-input-container`}>
          <div className={`${prefixCls}-input`}>
            <label>
              <input
                type="password"
                value={data.password}
                ref={input => focusFn(input)}
                onChange={onChange}
                placeholder={placeholders[0]}
              />
            </label>
          </div>
        </div>
      );
      break;
    case 'default':
    default:
      inputDom = (
        <div className={`${prefixCls}-input-container`}>
          <div className={`${prefixCls}-input`}>
            <label>
              <input
                type="text"
                value={data.text}
                ref={input => focusFn(input)}
                onChange={onChange}
                placeholder={placeholders[0]}
              />
            </label>
          </div>
        </div>
      );
  }

  let content = (
    <div>
      {message}
      {inputDom}
    </div>
  );

  let div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function handleConfirm(callback) {
    if (typeof callback !== 'function') {
      return;
    }
    const { text = '', password = '' } = data;
    const callbackArgs =
      type === 'login-password' ? [text, password] :
        type === 'secure-text' ? [password] : [text];

    return callback(...callbackArgs);
  }

  let actions;
  if (typeof callbackOrActions === 'function') {
    actions = [
      { text: '取消' },
      { text: '确定', onPress: () => { handleConfirm(callbackOrActions); } },
    ];
  } else {
    actions = callbackOrActions.map(item => {
      return {
        text: item.text,
        onPress: () => {
          return handleConfirm(item.onPress);
        },
      };
    });
  }

  const footer = actions.map((button) => {
    const orginPress = button.onPress || function () { };
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
    // exclude input element for focus
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, `.${prefixCls}-content`);
    if (!pNode) {
      e.preventDefault();
    }
  }

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
      platform={platform}
      wrapProps={{ onTouchStart: onWrapTouchStart }}
    >
      <div className={`${prefixCls}-propmt-content`}>{content}</div>
    </Modal>, div,
  );

  return {
    close,
  };
}
