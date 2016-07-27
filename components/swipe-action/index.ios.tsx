import { PropTypes } from 'react';
import * as React from 'react';
import Swipeout from 'rc-swipeout/lib/Swipeout';
import SwipeActionProps from './SwipeActionPropsType';

class SwipeAction extends React.Component<SwipeActionProps, any> {
  static propTypes = {
    autoClose: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    left: PropTypes.arrayOf(PropTypes.object),
    right: PropTypes.arrayOf(PropTypes.object),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.any,
  };

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
