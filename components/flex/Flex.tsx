import * as React from 'react';
import { PropTypes } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import FlexProps from './FlexPropTypes';

export default class Flex extends React.Component<FlexProps, any> {
  static Item: any;

  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    direction: PropTypes.oneOf(['row', 'column']),
    wrap: PropTypes.oneOf(['nowrap', 'wrap']),
    justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
    align: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  };

  static defaultProps = {
    direction: 'row',
    wrap: 'nowrap',
    justify: 'start',
    align: 'center',
    onPress: () => {},
  };

  render() {
    let { style, direction, wrap, justify, align, children, onPress } = this.props;
    let transferConst = [justify, align];
    transferConst = transferConst.map((el) => {
      let tempTxt = el;
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
          break;
      }

      return tempTxt;
    });
    const flexStyle = {
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: transferConst[0],
      alignItems: transferConst[1],
    };

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[flexStyle, style]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
