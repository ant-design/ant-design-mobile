import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import BadgeStyle from './style/index';
import BadgeProps from './PropsType';

export default class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    size: 'small',
    overflowCount: 99,
    corner: false,
    dot: false,
  };

  render() {
    const {size, overflowCount, corner, dot, text, children, style} = this.props;

    const overflowNum = overflowCount || 99;
    const badgeText = typeof text === 'number' && text > overflowNum ? `${overflowNum}+` : text;

    const badgeCls = corner ? 'textCorner' : 'textDom';

    return (
      <View style={[ BadgeStyle.wrap, style ]}>
        <View style={ [BadgeStyle[`${badgeCls}Wrap`]] }>
          {children}
          {
            !dot ? (
              <TouchableWithoutFeedback>
                <View style={ [BadgeStyle[badgeCls], BadgeStyle[`${badgeCls}${size}`]] }>
                  <Text style={ [BadgeStyle.text] }>{badgeText}</Text>
                </View>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback>
                <View style={ [BadgeStyle.dot, BadgeStyle[`dotSize${size}`] ] } />
              </TouchableWithoutFeedback>
            )
          }

        </View>
      </View>
    );
  }
}
