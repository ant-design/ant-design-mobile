import React from 'react';
import assign from 'object-assign';
import { View, Image, Text, TextInput, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import variables from '../style/themes/default';
import InputItemProps from './PropsType';
import InputItemStyle from './style/index';

const noop: any = () => {
};

export default class InputItem extends React.Component<InputItemProps, any> {
  static defaultProps = {
    type: 'text',
    editable: true,
    value: '',
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

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.autoFocus || this.props.focused) {
      (this.refs as any).input.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.focused) {
      (this.refs as any).input.focus();
    }
  }

  onChange = (text) => {
    const { maxLength, onChange, type } = this.props;
    switch (type) {
      case 'text':
        if (maxLength > 0) {
          text = text.substring(0, maxLength);
        }
        break;
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
      case 'number':
        text = text.replace(/\D/g, '');
        break;
      case 'password':
        break;
      default:
        break;
    }
    if (onChange) {
      onChange(text);
    }
  };

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
      type, style, clear, children, error, extra, labelNumber, last, onExtraClick = noop, onErrorClick = noop, styles,
    } = this.props;

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
      'type', 'style', 'clear', 'children', 'error', 'extra', 'labelNumber', 'last', 'onExtraClick', 'onErrorClick',
      'keyboardType', 'onChange', 'secureTextEntry', 'styles',
    ].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    const keyboardTypeArray = ['default', 'email-address',
      'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation',
      'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search'];

    let keyboardType: any = 'default';

    if (type === 'number' || type === 'bankCard') {
      keyboardType = 'numeric';
    } else if (type && keyboardTypeArray.indexOf(type) > -1) {
      keyboardType = type;
    }

    return (
      <View style={[styles.container, containerStyle, style]}>
        {children ? <Text style={[styles.text, textStyle]}>{children}</Text> : null}
        <TextInput
          ref="input"
          style={[styles.input, inputStyle]}
          keyboardType={keyboardType}
          onChange={(event) => this.onChange(event.nativeEvent.text)}
          secureTextEntry={type === 'password'}
          clearButtonMode={clear ? 'while-editing' : 'never'}
          underlineColorAndroid="transparent"
          {...restProps}
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
        />
        {extra ? <TouchableWithoutFeedback
          onPress={onExtraClick}
        >
          <View>
            <Text style={[styles.extra, extraStyle]}>{extra}</Text>
          </View>
        </TouchableWithoutFeedback> : null}
        {
          error &&
          <TouchableWithoutFeedback
            onPress={onErrorClick}
          >
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
