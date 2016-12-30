import React from 'react';
import Swipeout from 'rc-swipeout';
import classNames from 'classnames';
import SwipeActionProps from './PropsType';

export interface ButtonProps {
  text?: string;
  onPress?: () => void;
  style?: {};
}

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
      className, prefixCls, left = [], right = [], autoClose, disabled, onOpen, onClose, children,
    } = this.props;
    const wrapClass = classNames({
      [`${prefixCls}`]: 1,
      [className as string]: !!className,
    });

    return (left.length || right.length) ? (
      <div className={wrapClass}>
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
      <div className={wrapClass}>{children}</div>
    );
  }
}

export default SwipeAction;
