import React from 'react';
import {
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { FlexPropsType } from './PropsType';

export interface FlexProps extends FlexPropsType {
  onPress?: () => void;
  onLongPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default class Flex extends React.Component<FlexProps, any> {
  static Item: any;

  static defaultProps = {
    direction: 'row',
    wrap: 'nowrap',
    justify: 'start',
    align: 'center',
  };

  render() {
    const {
      style,
      direction,
      wrap,
      justify,
      align,
      children,
      ...restProps,
    } = this.props;
    const transferConst = [justify, align];
    const transferConstStyle = transferConst.map(el => {
      let tempTxt;
      switch (el) {
        case 'start':
          tempTxt = 'flex-start';
          break;
        case 'end':
          tempTxt = 'flex-end';
          break;
        case 'between':
          tempTxt = 'space-between';
          break;
        case 'around':
          tempTxt = 'space-around';
          break;
        default:
          tempTxt = el;
          break;
      }

      return tempTxt;
    });
    const flexStyle: any = {
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: transferConstStyle[0],
      alignItems: transferConstStyle[1],
    };

    const inner = (
      <View style={[flexStyle, style]} {...restProps}>
        {children}
      </View>
    );

    const shouldWrapInTouchableComponent =
      restProps.onPress ||
      restProps.onLongPress ||
      restProps.onPressIn ||
      restProps.onPressOut;

    if (!!shouldWrapInTouchableComponent) {
      return (
        <TouchableWithoutFeedback {...restProps}>
          {inner}
        </TouchableWithoutFeedback>
      );
    } else {
      return inner;
    }
  }
}
