import Swipeout from 'rc-swipeout/lib/Swipeout';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { SwipeActionPropsType } from './PropsType';

export interface SwipeActionProps extends SwipeActionPropsType<TextStyle> {
  styles?: any;
  style?: StyleProp<ViewStyle>;
}

class SwipeAction extends React.Component<SwipeActionProps, any> {
  render() {
    return <Swipeout {...this.props} />;
  }
}

export default SwipeAction;
