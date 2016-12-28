import React from 'react';
import Swipeout from 'rc-swipeout/lib/Swipeout';
import SwipeActionProps from './PropsType';

class SwipeAction extends React.Component<SwipeActionProps, any> {
  static defaultProps = {
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() {},
    onClose() {},
  };

  render() {
    const { left, right, autoClose, disabled, onOpen, onClose, children } = this.props;
    return (
      <Swipeout
        left={left}
        right={right}
        autoClose={autoClose}
        disabled={disabled}
        onOpen={onOpen}
        onClose={onClose}
      >
        {children}
      </Swipeout>
    );
  }
}

export default SwipeAction;
