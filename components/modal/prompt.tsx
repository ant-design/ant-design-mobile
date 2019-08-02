import * as React from 'react';
import * as ReactDOM from 'react-dom';
import closest from '../_util/closest';
import Modal from './Modal';
import { CallbackOrActions } from './PropsType';

export default function prompt(
  title: React.ReactNode,
  message: React.ReactNode,
  callbackOrActions: CallbackOrActions<React.CSSProperties>,
  type = 'default',
  defaultValue = '',
  placeholders = ['', ''],
  platform = 'ios',
) {
  let closed = false;

  defaultValue =
    typeof defaultValue === 'string'
      ? defaultValue
      : typeof defaultValue === 'number' ? `${defaultValue}` : '';

  if (!callbackOrActions) {
    // console.log('Must specify callbackOrActions');
    return {
      close: () => {},
    };
  }

  const prefixCls = 'am-modal';

  const data: any = {
    text: defaultValue,
  };

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const inputType = target.getAttribute('type');
    if (inputType !== null) {
      data[inputType] = target.value;
    }
  }

  // hotfix issue: https://github.com/ant-design/ant-design-mobile/issues/2177
  function onClick(e: React.MouseEvent<HTMLInputElement>) {
    const target = e.currentTarget || e.target;
    if (target) {
      target.focus();
    }
  }
  function onBlurFixWechat() {
    // https://github.com/ant-design/ant-design-mobile/issues/3137
    if (/MicroMessenger/.test(navigator.userAgent)) {
      document.body.scrollTop = document.body.scrollTop;
    }
  }
  let inputDom;

  const focusFn = (input: HTMLInputElement | null) => {
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
                defaultValue={data.text}
                ref={input => focusFn(input)}
                onClick={onClick}
                onChange={onChange}
                placeholder={placeholders[0]}
                onBlur={onBlurFixWechat}
              />
            </label>
          </div>
          <div className={`${prefixCls}-input`}>
            <label>
              <input
                type="password"
                defaultValue={data.password}
                onClick={onClick}
                onChange={onChange}
                placeholder={placeholders[1]}
                onBlur={onBlurFixWechat}
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
                defaultValue={data.password}
                ref={input => focusFn(input)}
                onClick={onClick}
                onChange={onChange}
                placeholder={placeholders[0]}
                onBlur={onBlurFixWechat}
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
                defaultValue={data.text}
                ref={input => focusFn(input)}
                onClick={onClick}
                onChange={onChange}
                placeholder={placeholders[0]}
                onBlur={onBlurFixWechat}
              />
            </label>
          </div>
        </div>
      );
  }

  const content = (
    <div>
      {message}
      {inputDom}
    </div>
  );

  const div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function handleConfirm(callback?: (...args: any[]) => void) {
    if (typeof callback !== 'function') {
      return;
    }
    const { text = '', password = '' } = data;
    const callbackArgs =
      type === 'login-password'
        ? [text, password]
        : type === 'secure-text' ? [password] : [text];

    return callback(...callbackArgs);
  }

  let actions;
  if (typeof callbackOrActions === 'function') {
    actions = [
      {
        text: '取消',
        onPress: () => {},
      },
      {
        text: '确定',
        onPress: () => {
          handleConfirm(callbackOrActions);
        },
      },
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

  const footer = actions.map(button => {
    // tslint:disable-next-line:only-arrow-functions
    const orginPress = button.onPress || function() {};
    button.onPress = () => {
      if (closed) {
        return;
      }

      const res: any = orginPress();
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

  function onWrapTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    // exclude input element for focus
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target as Element, `.${prefixCls}-content`);
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
    </Modal>,
    div,
  );

  return {
    close,
  };
}
