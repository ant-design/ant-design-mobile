/* eslint no-console:0 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import Icon from '../icon/index.web';
import assign from 'object-assign';

const NORMAL = 'NORMAL';
const SHARE = 'SHARE';

function noop() {
}

const queue = [];

function createActionSheet(flag, config, callback) {
  const props = assign({}, {
    prefixCls: 'am-action-sheet',
  }, config);
  const {prefixCls, transitionName, maskTransitionName, maskClosable = true} = props;

  let div = document.createElement('div');
  document.body.appendChild(div);

  queue.push(div);

  function close() {
    if (div) {
      ReactDOM.unmountComponentAtNode(div);
      div.parentNode.removeChild(div);
      div = null;
      const index = queue.indexOf(close);
      if (index !== -1) {
        queue.splice(index, 1);
      }
    }
  }

  function cb(info) {
    callback(info);
    close();
  }

  const {title, message, options, destructiveButtonIndex, cancelButtonIndex} = props;
  const titleMsg = [
    title ? <h3 key="0" className={`${prefixCls}-title`}>{title}</h3> : null,
    message ? <div key="1" className={`${prefixCls}-message`}>{message}</div> : null,
  ];
  let children = null;
  switch (flag) {
    case NORMAL:
      children = (<div className={`${prefixCls}-normal`}>
        {titleMsg}
        <ul className={`${prefixCls}-button-list`}>
          {options.map((item, index) => {
            const extraProp = {
              onClick: () => cb(index),
            };
            let li = <li className={[`${prefixCls}-button-list-item`]} key={index} {...extraProp}>{item}</li>;
            const cls = {
              [`${prefixCls}-destructive-button`]: destructiveButtonIndex === index,
              [`${prefixCls}-cancel-button`]: cancelButtonIndex === index,
            };
            if (cancelButtonIndex === index || destructiveButtonIndex === index) {
              li = (<li key={index} className={classNames(cls) } {...extraProp}>
                {item}
                {cancelButtonIndex === index ? <span className={`${prefixCls}-cancel-button-mask`}></span> : null}
              </li>);
            }
            return li;
          })}
        </ul>
      </div>);
      break;
    case SHARE:
      children = (<div className={`${prefixCls}-share`}>
        {titleMsg}
        <ul className={`${prefixCls}-share-content`}>
          {options.map((item, index) => {
            const extraProp = {
              onClick: () => cb(index),
            };
            return (<li key={index} {...extraProp}>
              <p className={`${prefixCls}-share-item-icon`}>
                {item.iconName ? <Icon type={item.iconName}/> : item.icon}
              </p>
              <p className={`${prefixCls}-share-item-title`}>{item.title}</p>
            </li>);
          })}
        </ul>
      </div>);
      break;
    default:
      children = (<div className={`${prefixCls}-custom`}>
        {titleMsg}
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
    transitionName={transitionName || `am-slide-up`}
    maskTransitionName={maskTransitionName || `am-fade`}
    onClose={close}
    maskClosable={maskClosable}
  >{children}</Dialog>, div);

  return {
    close,
  };
}

export default {
  showActionSheetWithOptions(config, callback = noop) {
    createActionSheet(NORMAL, config, callback);
  },
  showShareActionSheetWithOptions(config, callback = noop) {
    createActionSheet(SHARE, config, callback);
  },
  showActionSheetWithCustom(config, callback = noop) {
    createActionSheet(null, config, callback);
  },
  close() {
    queue.forEach(q => q());
  },
};
