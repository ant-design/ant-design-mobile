import * as React from 'react';
import { PropTypes } from 'react';
import splitObject from '../_util/splitObject';
import { View } from 'react-native';
import FlexProps from './FlexPropTypes';

export default class Flex extends React.Component<FlexProps, any> {
  static propTypes = {
    style: PropTypes.object,
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
  };

  render() {
    let[{ style, direction, wrap, justify, align }, restProps] = splitObject(this.props,
      ['style', 'direction', 'wrap', 'justify', 'align']);
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

    let { children } = this.props;

    return (
      <View style={[flexStyle, style]} {...restProps}>
        {children}
      </View>
    );
  }
}
