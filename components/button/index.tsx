import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import buttonStyles from './style/index';
import tsProps from './PropsType';

export default class Button extends React.Component<tsProps, any> {
  static defaultProps = {
    pressIn: false,
    disabled: false,
    activeStyle: {},
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
    if (!this.props.disabled) {
      this.setState({ pressIn: true });
    }
    if (this.props.onPressIn) {
      (this.props.onPressIn as any)(...arg);
    }
  }
  onPressOut = (...arg) => {
    if (!this.props.disabled) {
      this.setState({ pressIn: false });
    }
    if (this.props.onPressOut) {
      (this.props.onPressOut as any)(...arg);
    }
  }
  onShowUnderlay = (...arg) => {
    if (!this.props.disabled) {
      this.setState({ touchIt: true });
    }
    if (this.props.onShowUnderlay) {
      (this.props.onShowUnderlay as any)(...arg);
    }
  }
  onHideUnderlay = (...arg) => {
    if (!this.props.disabled) {
      this.setState({ touchIt: false });
    }
    if (this.props.onHideUnderlay) {
      (this.props.onHideUnderlay as any)(...arg);
    }
  }

  render() {
    // TODO: replace `TouchableHighlight` with `TouchableWithoutFeedback` in version 1.1.0
    // for using setNativeProps to improve performance
    const {
      size = 'large', type = 'default', disabled, activeStyle, onClick, style, styles, ...restProps,
    } = this.props;

    ['activeOpacity', 'delayPressOut', 'underlayColor', 'onPress', 'onPressIn',
     'onPressOut', 'onShowUnderlay', 'onHideUnderlay'].forEach((prop) => {
       if (restProps.hasOwnProperty(prop)) {
         delete restProps[prop];
       }
     });

    const textStyle = [
      styles[`${size}RawText`],
      styles[`${type}RawText`],
      disabled && styles.disabledRawText,
      this.state.pressIn && styles[`${type}HighlightText`],
    ];

    const wrapperStyle = [
      styles.wrapperStyle,
      styles[`${size}Raw`],
      styles[`${type}Raw`],
      disabled && styles.disabledRaw,
      this.state.pressIn && activeStyle && styles[`${type}Highlight`],
      activeStyle && this.state.touchIt && activeStyle,
      style,
    ];

    const underlayColor = StyleSheet.flatten(
      styles[activeStyle ? `${type}Highlight` : `${type}Raw`]
    ).backgroundColor;

    return (
      <TouchableHighlight
        activeOpacity={1}
        delayPressOut={1}
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
        <Text style={textStyle}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}
