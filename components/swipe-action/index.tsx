import React from 'react';
import Swipeout from 'rc-swipeout';
import classnames from 'classnames';
import SwipeActionProps from './PropsType';

class SwipeAction extends React.Component<SwipeActionProps, any> {
  static defaultProps = {
    prefixCls: 'am-swipe',
    title: '请确认操作',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() {},
    onClose() {},
  };

  render() {
    const {
      className, style, prefixCls, left = [], right = [], autoClose, disabled, onOpen, onClose, children,
    } = this.props;
    const wrapClass = classnames(prefixCls, className);

    return (left.length || right.length) ? (
      <div style={style} className={className}>
        <Swipeout
          prefixCls={prefixCls}
          left={left}
          right={right}
          autoClose={autoClose}
          disabled={disabled}
          onOpen={onOpen}
          onClose={onClose}
        >
          {children}
        </Swipeout>
      </div>
    ) : (
      <div style={style} className={wrapClass}>{children}</div>
    );
  }
}

export default SwipeAction;
