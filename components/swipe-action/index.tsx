import React from 'react';
import Swipeout from 'rc-swipeout/lib/Swipeout';
import SwipeActionProps from './PropsType';

class SwipeAction extends React.Component<SwipeActionProps, any> {
  render() {
    return (
      <Swipeout {...this.props} />
    );
  }
}

export default SwipeAction;
