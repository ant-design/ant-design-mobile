/* eslint no-console:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import assign from 'object-assign';
import Icon from '../icon';

const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
let closeFn = () => {};

function createActionSheet(flag, config, callback) {
  const props = assign({
    prefixCls: 'am-action-sheet',
  }, config);
  const { prefixCls, transitionName, maskTransitionName, maskClosable = true } = props;

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
  closeFn = close;

  function cb(info) {
    callback(info);
    close();
  }

  const { title, message, options, destructiveButtonIndex, cancelButtonIndex } = props;
  let children = null;
  switch (flag) {
    case NORMAL:
      children = (<div className={`${prefixCls}-normal`}>
        <h3 className={`${prefixCls}-title`}>{title}</h3>
        <div className={`${prefixCls}-message`}>{message}</div>
        <ul className={`${prefixCls}-button-list`}>
          {options.map((item, index) => {
            const extraProp = {
              onClick: () => cb(index),
            };
            let li = <li key={index} {...extraProp}>{item}</li>;
            const cls = {
              [`${prefixCls}-destructive-button`]: destructiveButtonIndex === index,
              [`${prefixCls}-cancel-button`]: cancelButtonIndex === index,
            };
            if (cancelButtonIndex === index || destructiveButtonIndex === index) {
              li = <li key={index} className={classNames(cls)} {...extraProp}>{item}</li>;
            }
            return li;
          })}
        </ul>
      </div>);
      break;
    case SHARE:
      children = (<div className={`${prefixCls}-share`}>
        <h3 className={`${prefixCls}-title`}>{title}</h3>
        <div className={`${prefixCls}-message`}>{message}</div>
        <ul className={`${prefixCls}-share-content`}>
        {options.map((item, index) => {
          const extraProp = {
            onClick: () => cb(index),
          };
          return (<li key={index} {...extraProp}>
            <p className={`${prefixCls}-share-item-icon`}>
              {item.iconName ? <Icon type={item.iconName} /> : item.icon}
            </p>
            <p className={`${prefixCls}-share-item-title`}>{item.title}</p>
          </li>);
        })}
        </ul>
      </div>);
      break;
    default:
      children = (<div className={`${prefixCls}-custom`}>
        <h3 className={`${prefixCls}-title`}>{title}</h3>
        <div className={`${prefixCls}-message`}>{message}</div>
        <div className={`${prefixCls}-custom-content`}>
          {props.component}
        </div>
      </div>);
  }

  ReactDOM.render(<Dialog
    prefixCls={prefixCls}
    visible
    title=""
    footer=""
    transitionName={transitionName || `${prefixCls}-slide-fade`}
    maskTransitionName={maskTransitionName || `${prefixCls}-fade`}
    onClose={close}
    maskClosable={maskClosable}
  >{children}</Dialog>, div, function () {
    d = this;
  });
}

export default class ActionSheet {
  static showActionSheetWithOptions = (config, callback = () => {}) => {
    createActionSheet(NORMAL, config, callback);
  }
  static showShareActionSheetWithOptions = (config, callback = () => {}) => {
    createActionSheet(SHARE, config, callback);
  }
  static showActionSheetWithCustom = (config, callback = () => {}) => {
    createActionSheet(null, config, callback);
  }
  static close = () => {
    closeFn();
  }
}
