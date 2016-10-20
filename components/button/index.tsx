import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import variables from '../style/themes/default';
import tsProps from './PropsType';

export default class Button extends React.Component<tsProps, any> {
  static defaultProps = {
    pressIn: false,
    size: 'large',
    disabled: false,
    inline: false,
    loading: false,
    onClick: (_x: any) => { },
    onPressIn: (_x: any) => { },
    onPressOut: (_x: any) => { },
    onShowUnderlay: (_x: any) => { },
    onHideUnderlay: (_x: any) => { },
    touchFeedback: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      pressIn: false,
      touchIt: false,
    };
  }
  onPressIn = (...arg) => {
    if (!this.props.disabled) {
      this.setState({ pressIn: true });
    }
    if (this.props.onPressIn) {
      this.props.onPressIn(arg);
    }
  }
  onPressOut = (...arg) => {
    if (!this.props.disabled) {
      this.setState({ pressIn: false });
    }
    if (this.props.onPressOut) {
      this.props.onPressOut(arg);
    }
  }
  onShowUnderlay = (...arg) => {
    if (!this.props.disabled) {
      this.setState({ touchIt: true });
    }
    if (this.props.onShowUnderlay) {
      this.props.onShowUnderlay(arg);
    }
  }
  onHideUnderlay = (...arg) => {
    if (!this.props.disabled) {
      this.setState({ touchIt: false });
    }
    if (this.props.onHideUnderlay) {
      this.props.onHideUnderlay(arg);
    }
  }

  render() {
    const { size, type, disabled, touchFeedback } = this.props;

    let height;
    let fontSize;
    let paddingLeft;
    let paddingRight;
    let backgroundColor;
    let textColor;
    let borderColor;

    let highlightBackgroundColor;
    let highlightTextColor;
    let highlightBorderColor;

    switch (size) {
      case 'large':
        height = variables.button_height;
        fontSize = variables.button_font_size;
        paddingLeft = paddingRight = variables.h_spacing_sm;
        break;
      case 'small':
        height = variables.button_height_sm;
        fontSize = variables.button_font_size_sm;
        paddingLeft = paddingRight = variables.h_spacing_sm;
        break;
      default:
        break;
    }

    if (type === 'primary') {
      textColor = variables.color_text_base_inverse;
      backgroundColor = variables.primary_button_fill;
      borderColor = variables.primary_button_fill;

      highlightTextColor = variables.color_text_base_inverse;
      highlightBackgroundColor = variables.primary_button_fill_tap;
      highlightBorderColor = variables.primary_button_fill;
    } else if (type === 'ghost') {
      textColor = variables.ghost_button_color;
      backgroundColor = 'transparent';
      borderColor = variables.ghost_button_color;

      highlightTextColor = variables.color_text_base_inverse;
      highlightBackgroundColor = variables.ghost_button_fill_tap;
      highlightBorderColor = variables.ghost_button_color;
    } else if (type === 'warning') {
      textColor = variables.brand_warning;
      backgroundColor = variables.fill_base;
      borderColor = variables.brand_warning;

      highlightTextColor = variables.color_text_base_inverse;
      highlightBackgroundColor = variables.brand_warning;
      highlightBorderColor = variables.brand_warning;
    } else {
      textColor = variables.color_text_base;
      backgroundColor = variables.fill_base;
      borderColor = variables.border_color_base;

      highlightTextColor = textColor;
      highlightBackgroundColor = variables.fill_tap;
      highlightBorderColor = variables.border_color_base;
    }
    if (disabled) {
      textColor = variables.color_text_disabled;
      backgroundColor = variables.fill_disabled;
      borderColor = variables.fill_disabled;
    }

    const textStyle = [{
      fontSize,
      color: this.state.pressIn ? highlightTextColor : textColor,
    }];
    const wrapperStyle: any = [{
      alignItems: 'center',
      height,
      paddingLeft,
      paddingRight,
      backgroundColor,
      borderRadius: variables.radius_md,
      borderWidth: 1,
      borderColor,
      justifyContent: 'center',
    }, {
      borderColor: this.state.pressIn ? highlightBorderColor : borderColor,
    }];

    const unProp: any = {};
    if (typeof touchFeedback === 'boolean') {
      unProp.underlayColor = touchFeedback ? highlightBackgroundColor : backgroundColor;
    } else if (Object.prototype.toString.call(touchFeedback) === '[object Object]') {
      wrapperStyle.push(this.state.touchIt ? touchFeedback : {});
    }
    wrapperStyle.push(this.props.style);

    const newChild = (
      <Text style={textStyle}>
        {this.props.children}
      </Text>
    );

    if (disabled) {
      return (<View {...this.props} style={wrapperStyle}>
        {newChild}
      </View>);
    }

    return (
      <TouchableHighlight activeOpacity={1} delayPressOut={1} {...this.props} {...unProp}
        style={wrapperStyle}
        onPress={(e?: any) => this.props.onClick && this.props.onClick(e)}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onShowUnderlay={this.onShowUnderlay}
        onHideUnderlay={this.onHideUnderlay}
      >
        {newChild}
      </TouchableHighlight>
    );
  }
}
