import React from 'react';
import Swipeout from 'rc-swipeout/lib/Swipeout';
import BasePropsType from './PropsType';

export interface SwipeActionProps extends BasePropsType {
  styles?: any;
}

class SwipeAction extends React.Component<SwipeActionProps, any> {
  render() {
    return (
      <Swipeout {...this.props} />
    );
  }
}

export default SwipeAction;
