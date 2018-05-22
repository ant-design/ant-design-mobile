// tslint:disable:no-empty
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProperties,
  View,
} from 'react-native';
import { ButtonPropsType } from './PropsType';
import buttonStyle from './style/index.native';

export interface ButtonProps
  extends ButtonPropsType,
    TouchableHighlightProperties {
  styles?: typeof buttonStyle;
  activeStyle?: boolean;
  onClick?: (_?: any) => void;
}

const buttonStyles = StyleSheet.create<any>(buttonStyle);

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    pressIn: false,
    disabled: false,
    activeStyle: {},
    loading: false,

    onClick: (_?: any) => {},
    onPressIn: (_?: any) => {},
    onPressOut: (_?: any) => {},
    onShowUnderlay: (_?: any) => {},
    onHideUnderlay: (_?: any) => {},

    styles: buttonStyles,
  };

  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      pressIn: false,
      touchIt: false,
    };
  }

  onPressIn = (...arg: any[]) => {
    this.setState({ pressIn: true });
    if (this.props.onPressIn) {
      (this.props.onPressIn as any)(...arg);
    }
  }
  onPressOut = (...arg: any[]) => {
    this.setState({ pressIn: false });
    if (this.props.onPressOut) {
      (this.props.onPressOut as any)(...arg);
    }
  }
  onShowUnderlay = (...arg: any[]) => {
    this.setState({ touchIt: true });
    if (this.props.onShowUnderlay) {
      (this.props.onShowUnderlay as any)(...arg);
    }
  }
  onHideUnderlay = (...arg: any[]) => {
    this.setState({ touchIt: false });
    if (this.props.onHideUnderlay) {
      (this.props.onHideUnderlay as any)(...arg);
    }
  }

  render() {
    // TODO: replace `TouchableHighlight` with `TouchableWithoutFeedback` in version 1.1.0
    // for using setNativeProps to improve performance
    const {
      size = 'large',
      type = 'default',
      disabled,
      activeStyle,
      onClick,
      style,
      styles,
      loading,
      ...restProps,
    } = this.props;
    // tslint:disable-next-line:variable-name
    const _styles: any = styles!;

    const textStyle = [
      _styles[`${size}RawText`],
      _styles[`${type}RawText`],
      disabled && _styles[`${type}DisabledRawText`],
      this.state.pressIn && _styles[`${type}HighlightText`],
    ];

    const wrapperStyle = [
      _styles.wrapperStyle,
      _styles[`${size}Raw`],
      _styles[`${type}Raw`],
      disabled && _styles[`${type}DisabledRaw`],
      this.state.pressIn && activeStyle && _styles[`${type}Highlight`],
      activeStyle && this.state.touchIt && activeStyle,
      style,
    ];

    const underlayColor = (StyleSheet.flatten(
      _styles[activeStyle ? `${type}Highlight` : `${type}Raw`],
    ) as any).backgroundColor;

    const indicatorColor = (StyleSheet.flatten(
      this.state.pressIn
        ? _styles[`${type}HighlightText`]
        : _styles[`${type}RawText`],
    ) as any).color;

    return (
      <TouchableHighlight
        {...restProps}
        style={wrapperStyle}
        disabled={disabled}
        activeOpacity={1}
        underlayColor={underlayColor}
        onPress={(e?: any) => onClick && onClick(e)}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onShowUnderlay={this.onShowUnderlay}
        onHideUnderlay={this.onHideUnderlay}
      >
        <View style={_styles.container}>
          {loading ? (
          // tslint:disable-next-line:jsx-no-multiline-js
            <ActivityIndicator
              style={_styles.indicator}
              animating
              color={indicatorColor}
              size="small"
            />
          ) : null}
          <Text style={textStyle}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
