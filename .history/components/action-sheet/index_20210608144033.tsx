/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dialog from 'rmc-dialog';
import TouchFeedback from 'rmc-feedback';
import getDataAttr from '../_util/getDataAttr';
import Badge, { BadgeProps } from '../badge';

const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
// tslint:disable-next-line:no-empty
function noop() {}
const queue: any[] = [];
export interface ActionSheetOptions {
  maskClosable?: boolean;
  cancelButtonIndex?: number;
  destructiveButtonIndex?: number;
  title?: React.ReactNode;
  message?: React.ReactNode;
  className?: string;
  transitionName?: string;
  maskTransitionName?: string;
}
export interface ShareOption {
  icon: React.ReactNode;
  title: string;
}

export interface ShareActionSheetWithOptions extends ActionSheetOptions {
  options: ShareOption[] | ShareOption[][];
  badges?: BadgesOption[];
}
export interface BadgesOption extends BadgeProps{
  index: number;
}
export interface ActionSheetWithOptions extends ActionSheetOptions {
  options: string[];
  badges?: BadgesOption[];
}

export type ActionCallBack = (
  index: number,
  rowIndex?: number,
) => PromiseLike<any> | void;

function createActionSheet(
  flag: string,
  config: ActionSheetWithOptions | ShareActionSheetWithOptions,
  callback: ActionCallBack,
) {
  const props = {
    prefixCls: 'am-action-sheet',
    cancelButtonText: '取消',
    ...config,
  };
  const {
    prefixCls,
    className,
    transitionName,
    maskTransitionName,
    maskClosable = true,
  } = props;

  const div = document.createElement('div');
  document.body.appendChild(div);

  queue.push(close);

  function close() {
    if (div) {
      ReactDOM.unmountComponentAtNode(div);
      if (div.parentNode) {
        div.parentNode.removeChild(div);
      }
      const index = queue.indexOf(close);
      if (index !== -1) {
        queue.splice(index, 1);
      }
    }
  }

  function cb(index: any, rowIndex = 0) {
    const res = callback(index, rowIndex);
    if (res && res.then) {
      res.then(() => {
        close();
      });
    } else {
      close();
    }
  }

  const {
    title,
    message,
    options,
    destructiveButtonIndex,
    cancelButtonIndex,
    cancelButtonText,
    badges = [],
  } = props;
  const titleMsg = [
    title ? (
      <h3 key="0" className={`${prefixCls}-title`}>
        {title}
      </h3>
    ) : null,
    message ? (
      <div key="1" className={`${prefixCls}-message`}>
        {message}
      </div>
    ) : null,
  ];
  let children: React.ReactElement<any> | null = null;
  let mode = 'normal';
  switch (flag) {
    case NORMAL:
      mode = 'normal';
      const normalOptions = options as string[];
      const badgesMap: any = {};
      if(badges && badges.length > 0){
        badges.forEach(( element: BadgesOption ) => {
          if (element.index >= 0) {
            badgesMap[element.index] = (
              <Badge {...element} />
            );
          }
        });
      }
      children = (
        <div {...getDataAttr(props)}>
          {titleMsg}
          <div className={`${prefixCls}-button-list`} role="group">
            {normalOptions.map((item, index) => {
              const itemProps = {
                className: classnames(`${prefixCls}-button-list-item`, {
                  [`${prefixCls}-destructive-button`]:
                    destructiveButtonIndex === index,
                  [`${prefixCls}-cancel-button`]: cancelButtonIndex === index,
                }),
                onClick: () => cb(index),
                role: 'button',
              };
              let bContent = <div {...itemProps}>
                {item}
              </div>;
              // 仅在设置徽标的情况下修改dom结构
              if (badgesMap[index]) {
                bContent = <div {...itemProps} className={`${itemProps.className} ${prefixCls}-button-list-badge`}>
                  <span className={`${prefixCls}-button-list-item-content`}>{item}</span>
                  {badgesMap[index]}
                </div>;
              }
              let bItem = (
                <TouchFeedback
                  key={index}
                  activeClassName={`${prefixCls}-button-list-item-active`}
                >
                  {bContent}
                </TouchFeedback>
              );
              if (
                cancelButtonIndex === index ||
                destructiveButtonIndex === index
              ) {
                bItem = (
                  <TouchFeedback
                    key={index}
                    activeClassName={`${prefixCls}-button-list-item-active`}
                  >
                    <div {...itemProps}>
                      {item}
                      {cancelButtonIndex === index ? (
                        <span className={`${prefixCls}-cancel-button-mask`} />
                      ) : null}
                    </div>
                  </TouchFeedback>
                );
              }
              return bItem;
            })}
          </div>
        </div>
      );
      break;
    case SHARE:
      mode = 'share';
      const multipleLine =
        (options.length && Array.isArray(options[0])) || false;
      const createList = (item: ShareOption, index: number, rowIndex = 0) => (
        <div
          className={`${prefixCls}-share-list-item`}
          role="button"
          key={index}
          onClick={() => cb(index, rowIndex)}
        >
          <div className={`${prefixCls}-share-list-item-icon`}>{item.icon}</div>
          <div className={`${prefixCls}-share-list-item-title`}>
            {item.title}
          </div>
        </div>
      );
      children = (
        <div {...getDataAttr(props)}>
          {titleMsg}
          <div className={`${prefixCls}-share`}>
            {multipleLine ? (
              (options as ShareOption[][]).map((item, index) => (
                <div key={index} className={`${prefixCls}-share-list`}>
                  {item.map((ii, ind) => createList(ii, ind, index))}
                </div>
              ))
            ) : (
              <div className={`${prefixCls}-share-list`}>
                {(options as ShareOption[]).map((item, index) =>
                  createList(item, index),
                )}
              </div>
            )}
            <TouchFeedback
              activeClassName={`${prefixCls}-share-cancel-button-active`}
            >
              <div
                className={`${prefixCls}-share-cancel-button`}
                role="button"
                onClick={() => cb(-1)}
              >
                {cancelButtonText}
              </div>
            </TouchFeedback>
          </div>
        </div>
      );
      break;
    default:
      break;
  }

  const rootCls = classnames(`${prefixCls}-${mode}`, className);

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
      wrapProps={(props as any).wrapProps || {}}
    >
      {children}
    </Dialog>,
    div,
  );

  return {
    close,
  };
}

export default {
  showActionSheetWithOptions(
    config: ActionSheetWithOptions,
    callback: ActionCallBack = noop,
  ) {
    createActionSheet(NORMAL, config, callback);
  },
  showShareActionSheetWithOptions(
    config: ShareActionSheetWithOptions,
    callback: ActionCallBack = noop,
  ) {
    createActionSheet(SHARE, config, callback);
  },
  close() {
    queue.forEach(q => q());
  },
};
