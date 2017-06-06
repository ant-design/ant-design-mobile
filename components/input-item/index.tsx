/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import assign from 'object-assign';
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Input from './Input';
import variables from '../style/themes/default';
import InputItemProps from './PropsType';
import InputItemStyle from './style/index';

const noop: any = () => {};

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

export default class InputItem extends React.Component<InputItemProps, any> {
  static defaultProps = {
    type: 'text',
    editable: true,
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    size: 'large',
    labelNumber: 4,
    labelPosition: 'left',
    textAlign: 'left',
    last: false,
    styles: InputItemStyle,
    focused: false,
  };

  onChange = (text) => {
    const { onChange, type } = this.props;
    const maxLength = this.props.maxLength as number;
    switch (type) {
      case 'bankCard':
        text = text.replace(/\D/g, '');
        if (maxLength > 0) {
          text = text.substring(0, maxLength);
        }
        text = text.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        text = text.replace(/\D/g, '');
        if (maxLength > 0) {
          text = text.substring(0, 11);
        }
        const valueLen = text.length;
        if (valueLen > 3 && valueLen < 8) {
          text = `${text.substr(0, 3)} ${text.substr(3)}`;
        } else if (valueLen >= 8) {
          text = `${text.substr(0, 3)} ${text.substr(3, 4)} ${text.substr(7)}`;
        }
        break;
      case 'password':
        break;
      default:
        break;
    }
    if (onChange) {
      onChange(text);
    }
  }

  onInputBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur(this.props.value);
    }
  }

  onInputFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus(this.props.value);
    }
  }

  render() {
    const {
      value, defaultValue, type, style, clear, children, error, extra,
      last, onExtraClick = noop, onErrorClick = noop, styles,
    } = this.props;
    const labelNumber = this.props.labelNumber as number;
    let valueProps;
    if ('value' in this.props) {
      valueProps = {
        value: fixControlledValue(value),
      };
    } else {
      valueProps = {
        defaultValue,
      };
    }

    const containerStyle = {
      borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth,
    };

    const textStyle = {
      width: variables.font_size_heading * labelNumber * 1.05,
    };

    const inputStyle = {
      color: error ? '#f50' : variables.color_text_base,
    };

    const extraStyle = {
      width: typeof extra === 'string' && (extra as string).length > 0 ?
      (extra as string).length * variables.font_size_heading : 0,
    };

    const restProps = assign({}, this.props);
    [
      'type', 'clear', 'children', 'error', 'extra', 'labelNumber', 'last',
      'onExtraClick', 'onErrorClick', 'styles',
    ].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    const keyboardTypeArray = ['default', 'email-address',
      'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation',
      'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search'];

    let keyboardType: any = 'default';

    if (type === 'number') {
      keyboardType = 'numeric';
    } else if (type === 'bankCard') {
      keyboardType = 'number-pad'; // 不带小数点
    } else if (type === 'phone') {
      keyboardType = 'phone-pad';
    } else if (type && keyboardTypeArray.indexOf(type) > -1) {
      keyboardType = type;
    }

    return (
      <View style={[styles.container, containerStyle, style]}>
        {
          children ? (
            typeof children === 'string' ? <Text style={[styles.text, textStyle]}>{children}</Text> :
            <View style={textStyle}>{children}</View>
          ) : null
        }
        <Input
          clearButtonMode={clear ? 'while-editing' : 'never'}
          underlineColorAndroid="transparent"
          {...restProps}
          {...valueProps}
          style={[styles.input, inputStyle]}
          keyboardType={keyboardType}
          onChange={(event) => this.onChange(event.nativeEvent.text)}
          secureTextEntry={type === 'password'}
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
        />
        {extra ? <TouchableWithoutFeedback onPress={onExtraClick}>
          <View>
            {typeof extra === 'string' ? <Text style={[styles.extra, extraStyle]}>{extra}</Text> : extra}
          </View>
        </TouchableWithoutFeedback> : null}
        {
          error &&
          <TouchableWithoutFeedback onPress={onErrorClick}>
            <View style={[styles.errorIcon]}>
              <Image
                source={require('../style/images/error.png')}
                style={{ width: variables.icon_size_xs, height: variables.icon_size_xs }}
              />
            </View>
          </TouchableWithoutFeedback>
        }
      </View>
    );
  }
}
