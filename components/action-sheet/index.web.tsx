/* tslint:disable:no-unused-variable */
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
/* tslint:enable:no-unused-variable */
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import Icon from '../icon/index.web';
import assign from 'object-assign';
import getDataAttr from '../_util/getDataAttr';
import Touchable from 'rc-touchable';

const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
function noop() { }
const queue: any[] = [];

function createActionSheet(flag, config, callback) {
  const props = assign({}, {
    prefixCls: 'am-action-sheet',
    cancelButtonText: '取消',
  }, config);
  const { prefixCls, className, transitionName, maskTransitionName, maskClosable = true } = props;

  let div: any = document.createElement('div');
  document.body.appendChild(div);

  queue.push(close);

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

  function cb(index, rowIndex = 0) {
    const res = callback(index, rowIndex);
    if (res && res.then) {
      res.then(() => {
        close();
      });
    } else {
      close();
    }
  }

  const { title, message, options, destructiveButtonIndex, cancelButtonIndex, cancelButtonText } = props;
  const titleMsg = [
    title ? <h3 key="0" className={`${prefixCls}-title`}>{title}</h3> : null,
    message ? <div key="1" className={`${prefixCls}-message`}>{message}</div> : null,
  ];
  let children: React.ReactElement<any> | null = null;
  let mode = 'normal';
  switch (flag) {
    case NORMAL:
      mode = 'normal';
      children = (<div {...getDataAttr(props)}>
        {titleMsg}
        <div className={`${prefixCls}-button-list`}>
          {options.map((item, index) => {
            const cls = {
              [`${prefixCls}-button-list-item`]: true,
              [`${prefixCls}-destructive-button`]: destructiveButtonIndex === index,
              [`${prefixCls}-cancel-button`]: cancelButtonIndex === index,
            };
            const itemProps = {
              className: classNames(cls),
              onClick: () => cb(index),
            };
            let bItem = (
              <Touchable key={index} activeClassName={`${prefixCls}-button-list-item-active`}>
                <div {...itemProps}>{item}</div>
              </Touchable>
            );
            if (cancelButtonIndex === index || destructiveButtonIndex === index) {
              bItem = (
                <Touchable key={index} activeClassName={`${prefixCls}-button-list-item-active`}>
                  <div {...itemProps}>
                    {item}
                    {cancelButtonIndex === index ?
                    <span className={`${prefixCls}-cancel-button-mask`} /> : null}
                  </div>
                </Touchable>
              );
            }
            return bItem;
          })}
        </div>
      </div>);
      break;
    case SHARE:
      mode = 'share';
      const multipleLine = options.length && Array.isArray(options[0]) || false;
      const createList = (item, index, rowIndex = 0) => (
        <div className={`${prefixCls}-share-list-item`} key={index} onClick={() => cb(index, rowIndex) }>
          <div className={`${prefixCls}-share-list-item-icon`}>
            {item.iconName ? <Icon type={item.iconName}/> : item.icon}
          </div>
          <div className={`${prefixCls}-share-list-item-title`}>{item.title}</div>
        </div>
      );
      children = (<div {...getDataAttr(props)}>
        {titleMsg}
        <div className={`${prefixCls}-share`}>
          {multipleLine ? options.map((item, index) => (
            <div key={index} className={`${prefixCls}-share-list`}>
              {item.map((ii, ind) => createList(ii, ind, index))}
            </div>
          )) : (
            <div className={`${prefixCls}-share-list`}>
                {options.map((item, index) => createList(item, index))}
            </div>
          )}
          <Touchable activeClassName={`${prefixCls}-share-cancel-button-active`}>
            <div className={`${prefixCls}-share-cancel-button`} onClick={() => cb(-1)}>
              {cancelButtonText}
            </div>
          </Touchable>
        </div>
      </div>);
      break;
    default:
      break;
  }

  const rootCls = classNames({
    [className as string]: !!className,
    [`${prefixCls}-${mode}`]: true,
  });

  ReactDOM.render(
    <Dialog
      visible
      title=""
      footer=""
      prefixCls={prefixCls}
      className={rootCls}
      transitionName={transitionName || `am-slide-up`}
      maskTransitionName={maskTransitionName || `am-fade`}
      onClose={() => cb(cancelButtonIndex || -1)}
      maskClosable={maskClosable}
      wrapProps={props.wrapProps || {}}
    >
      {children}
    </Dialog>,
    div
  );

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
  close() {
    queue.forEach(q => q());
  },
};
