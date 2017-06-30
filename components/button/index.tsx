/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { TouchableHighlight, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import buttonStyles from './style/index';
import { ButtonProps } from './PropsType';

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    pressIn: false,
    disabled: false,
    activeStyle: {},
    loading: false,
    onClick: (_x?: any) => {
    },
    onPressIn: (_x?: any) => {
    },
    onPressOut: (_x?: any) => {
    },
    onShowUnderlay: (_x?: any) => {
    },
    onHideUnderlay: (_x?: any) => {
    },
    styles: buttonStyles,
  };

  constructor(props) {
    super(props);
    this.state = {
      pressIn: false,
      touchIt: false,
    };
  }

  onPressIn = (...arg) => {
    this.setState({ pressIn: true });
    if (this.props.onPressIn) {
      (this.props.onPressIn as any)(...arg);
    }
  }
  onPressOut = (...arg) => {
    this.setState({ pressIn: false });
    if (this.props.onPressOut) {
      (this.props.onPressOut as any)(...arg);
    }
  }
  onShowUnderlay = (...arg) => {
    this.setState({ touchIt: true });
    if (this.props.onShowUnderlay) {
      (this.props.onShowUnderlay as any)(...arg);
    }
  }
  onHideUnderlay = (...arg) => {
    this.setState({ touchIt: false });
    if (this.props.onHideUnderlay) {
      (this.props.onHideUnderlay as any)(...arg);
    }
  }

  render() {
    // TODO: replace `TouchableHighlight` with `TouchableWithoutFeedback` in version 1.1.0
    // for using setNativeProps to improve performance
    const {
      size = 'large', type = 'default', disabled, activeStyle, onClick, style,
      styles, loading, ...restProps,
    } = this.props;
    const buttonStyles = styles!;

    ['activeOpacity', 'underlayColor', 'onPress', 'onPressIn',
     'onPressOut', 'onShowUnderlay', 'onHideUnderlay'].forEach((prop) => {
       if (restProps.hasOwnProperty(prop)) {
         delete restProps[prop];
       }
     });

    const textStyle = [
      buttonStyles[`${size}RawText`],
      buttonStyles[`${type}RawText`],
      disabled && buttonStyles.disabledRawText,
      this.state.pressIn && buttonStyles[`${type}HighlightText`],
    ];

    const wrapperStyle = [
      buttonStyles.wrapperStyle,
      buttonStyles[`${size}Raw`],
      buttonStyles[`${type}Raw`],
      disabled && buttonStyles.disabledRaw,
      this.state.pressIn && activeStyle && buttonStyles[`${type}Highlight`],
      activeStyle && this.state.touchIt && activeStyle,
      style,
    ];

    const underlayColor = StyleSheet.flatten(
      buttonStyles[activeStyle ? `${type}Highlight` : `${type}Raw`],
    ).backgroundColor;

    const indicatorColor = (StyleSheet.flatten(
      this.state.pressIn ? buttonStyles[`${type}HighlightText`] : buttonStyles[`${type}RawText`],
    ) as any).color;

    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={underlayColor}
        style={wrapperStyle}
        onPress={(e?: any) => onClick && onClick(e)}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onShowUnderlay={this.onShowUnderlay}
        onHideUnderlay={this.onHideUnderlay}
        disabled={disabled}
        {...restProps}
      >
        <View style={buttonStyles.container}>
          {
            loading ? (
              <ActivityIndicator
                style={buttonStyles.indicator}
                animating
                color={indicatorColor}
                size="small"
              />
            ) : null
          }
          <Text style={textStyle}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
