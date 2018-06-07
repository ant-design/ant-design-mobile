import classnames from 'classnames';
import Swipeout from 'rc-swipeout';
import * as React from 'react';
import { SwipeActionPropsType } from './PropsType';

export interface SwipeActionProps
  extends SwipeActionPropsType<React.CSSProperties> {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

class SwipeAction extends React.Component<SwipeActionProps, any> {
  static defaultProps = {
    prefixCls: 'am-swipe',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() {},
    onClose() {},
  };

  render() {
    const {
      className,
      style,
      prefixCls,
      left = [],
      right = [],
      autoClose,
      disabled,
      onOpen,
      onClose,
      children,
    } = this.props;

    const wrapClass = classnames(prefixCls, className);

    return left.length || right.length ? (
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
      <div style={style} className={wrapClass}>
        {children}
      </div>
    );
  }
}

export default SwipeAction;
