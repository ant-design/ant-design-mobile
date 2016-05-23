import React, { View, TouchableHighlight, PropTypes, Text } from 'react-native';

const Button = React.createClass({
  propTypes: {
    disabled: PropTypes.bool,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
  },
  getInitialState() {
    return {
      pressIn: false
    };
  },
  pressTextColor() {
    if (this.state.pressIn) {
      return { color: this._textHighlightColor };
    }
    return { color: this._textColor };
  },
  pressBorderColor() {
    if (this.state.pressIn && this._borderHighlightColor) {
      return { borderColor: this._borderHighlightColor };
    }
    return {};
  },
  render() {
    const size = (this.props.size || 'default');
    const mode = (this.props.mode || 'default');
    const disabled = this.props.disabled;
    let borderColor;
    let borderHighlightColor;
    let borderTopWidth;
    let borderBottomWidth;
    // 默认值
    let borderWidth = 0;
    let borderRadius = 4;
    let backgroundColor = '#0ae';
    let underlayColor = '#0091cb';
    let textColor = '#fff';
    let textHighlightColor = '#fff';
    let height = 43;
    let fontSize = 18;

    switch (size) {
      case 'tiny':
        height = 24;
        fontSize = 13;
        borderRadius = 3;
        break;
      case 'little':
        height = 31;
        fontSize = 13;
        borderRadius = 3;
        break;
      case 'small':
        height = 36;
        fontSize = 13;
        borderRadius = 3;
        break;
      case 'middle':
        height = 40;
        fontSize = 16;
        borderRadius = 3;
        break;
      case 'large':
        borderRadius = 5;
        break;
      case 'flat':
        borderRadius = 0;
        break;
      default:
        break;
    }
    if (disabled) {
      switch (mode) {
        case 'warn':
          textColor = '#d2d2d2';
          borderTopWidth = borderBottomWidth = 1;
          borderColor = '#e5e5e5';
          backgroundColor = '#fff';
          break;
        case 'blue':
          textColor = '#73baf8';
          backgroundColor = '#3998ed';
          break;
        case 'red':
          textColor = '#ab2020';
          backgroundColor = '#cb3636';
          break;
        case 'plain':
          textColor = '#e6e6e6';
          backgroundColor = '#fff';
          borderRadius = 0;
          break;
        default:
          textColor = '#d2d2d2';
          backgroundColor = '#ebebf0';
          break;
      }
    } else {
      switch (mode) {
        case 'red':
          backgroundColor = '#ec5050';
          underlayColor = '#bd4040';
          break;
        case 'white':
          borderColor = '#ddd';
          borderHighlightColor = '#d8d8d8';
          borderWidth = 1;
          backgroundColor = '#fff';
          underlayColor = '#f8f8f8';
          textColor = textHighlightColor = '#666';
          break;
        case 'light':
          borderColor = '#0ae';
          borderWidth = 1;
          backgroundColor = textHighlightColor = 'white';
          underlayColor = '#0ae';
          textColor = '#0ae';
          break;
        case 'warn':
          borderTopWidth = borderBottomWidth = 1;
          borderColor = '#e5e5e5';
          backgroundColor = '#fff';
          underlayColor = '#ededed';
          textColor = textHighlightColor = '#f4333c';
          break;
        case 'plain':
          textColor = textHighlightColor = '#0ae';
          backgroundColor = '#fff';
          underlayColor = '#fff';
          borderRadius = 0;
          break;
        default:
          break;
      }
    }

    let touchableProps = {};
    if (!disabled) {
      touchableProps.onPressIn = (...args) => {
        if (this.props.onPressIn) {
          this.props.onPressIn(...args);
        }
        this.setState({ pressIn: true });
      };
      touchableProps.onPressOut = (...args) => {
        if (this.props.onPressOut) {
          this.props.onPressOut(...args);
        }
        this.setState({ pressIn: false });
      };
    }
    let style = {
      alignItems: 'center',
      margin: 5,
      paddingLeft: 10,
      paddingRight: 10,
      height,
      backgroundColor,
      borderRadius,
      justifyContent: 'center',
    };
    if (size === 'flat') {
      delete style.margin;
      style.marginTop = style.marginBottom = 5;
      style.borderTopWidth = borderTopWidth;
      style.borderBottomWidth = borderBottomWidth;
      style.borderColor = borderColor;
    } else if (borderWidth) {
      style.borderWidth = borderWidth;
      style.borderColor = borderColor;
    }
    this._textColor = textColor;
    this._textHighlightColor = textHighlightColor;
    if (borderHighlightColor) {
      this._borderHighlightColor = borderHighlightColor;
    }
    if (disabled) {
      return (<View {...this.props} style={[style, this.pressBorderColor(), this.props.style]}>
        <Text style={[{ fontSize }, this.pressTextColor()]}>
          {this.props.children}
        </Text>
      </View>);
    }
    return (<TouchableHighlight
      activeOpacity={1}
      delayPressOut={1}
      {...this.props}
      {...touchableProps}
      style={[style, this.pressBorderColor(), this.props.style]}
      underlayColor={underlayColor}>
      <Text style={[{ fontSize }, this.pressTextColor()]}>
        {this.props.children}
      </Text>
    </TouchableHighlight>);
  },
});

export default Button;
