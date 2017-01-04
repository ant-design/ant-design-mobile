import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import buttonStyles, {
  rawStyles as rs, highlightStyles as hs, textStyles as ts, highlightTextStyles as hts,
} from './style/index';
import tsProps from './PropsType';

export default class Button extends React.Component<tsProps, any> {
  static defaultProps = {
    pressIn: false,
    disabled: false,
    activeStyle: {},
    onClick: (_x: any) => {
    },
    onPressIn: (_x: any) => {
    },
    onPressOut: (_x: any) => {
    },
    onShowUnderlay: (_x: any) => {
    },
    onHideUnderlay: (_x: any) => {
    },
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
    const { size = 'large', type = 'default', disabled, activeStyle, styles = buttonStyles } = this.props;
    const { rawStyles = rs, highlightStyles = hs, textStyles = ts, highlightTextStyles = hts } = styles;
    const textStyle = [
      textStyles[size],
      textStyles[type],
      disabled && textStyles.disabled,
      this.state.pressIn && highlightTextStyles[type],
    ];
    const wrapperStyle: any = [
      styles.wrapperStyle,
      styles[size],
      styles[type],
      disabled && styles.disabled,
      this.state.pressIn && activeStyle && highlightStyles[type],
    ];

    if (activeStyle && this.state.touchIt) {
      wrapperStyle.push(activeStyle);
    }
    wrapperStyle.push(this.props.style);

    const newChild = (
      <Text style={textStyle}>
        {this.props.children}
      </Text>
    );

    if (disabled) {
      return (
        <View {...this.props} style={wrapperStyle}>
          {newChild}
        </View>
      );
    }

    return (
      <TouchableHighlight
        activeOpacity={1}
        delayPressOut={1}
        {...this.props}
        underlayColor={activeStyle ? highlightStyles[type].backgroundColor : rawStyles[type].backgroundColor}
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
