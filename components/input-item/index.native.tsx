/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TextInputProperties,
  TouchableWithoutFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import variables from '../style/themes/default.native';
import Input from './Input.native';
import { InputItemPropsType } from './PropsType';
import InputItemStyle from './style/index.native';
import { Omit } from '../_util/types';

/**
 * React Native TextInput Props except these props
 */
export type TextInputProps = Omit<
  TextInputProperties,
  'onChange' | 'onFocus' | 'onBlur'
>;

export interface InputItemProps extends InputItemPropsType, TextInputProps {
  last?: boolean;
  onExtraClick?: (event: GestureResponderEvent) => void;
  onErrorClick?: (event: GestureResponderEvent) => void;
}

const noop = () => {};

function normalizeValue(value?: string) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

const InputItemStyles = StyleSheet.create<any>(InputItemStyle);

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
    labelNumber: 4,
    labelPosition: 'left',
    textAlign: 'left',
    last: false,
    styles: InputItemStyles,
  };

  inputRef: Input | null;

  onChange = (text: string) => {
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
        text = text.replace(/\D/g, '').substring(0, 11);
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

  onInputClear = () => {
    if (this.inputRef) {
      this.inputRef.clear();
    }
    this.onChange('');
  }

  // this is instance method for user to use
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  render() {
    const {
      type,
      editable,
      clear,
      children,
      error,
      extra,
      labelNumber,
      last,
      onExtraClick,
      onErrorClick,
      styles,
      ...restProps,
    } = this.props;
    const { value, defaultValue, style } = restProps;

    let valueProps;
    if ('value' in this.props) {
      valueProps = {
        value: normalizeValue(value),
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
      width: variables.font_size_heading * (labelNumber as number) * 1.05,
    };

    const extraStyle = {
      width:
        typeof extra === 'string' && (extra as string).length > 0
          ? (extra as string).length * variables.font_size_heading
          : 0,
    };

    const keyboardTypeArray = [
      'default',
      'email-address',
      'numeric',
      'phone-pad',
      'ascii-capable',
      'numbers-and-punctuation',
      'url',
      'number-pad',
      'name-phone-pad',
      'decimal-pad',
      'twitter',
      'web-search',
    ];

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
        {children ? (
          typeof children === 'string' ? (
            <Text style={[styles.text, textStyle]}>{children}</Text>
          ) : (
            <View style={textStyle}>{children}</View>
          )
        ) : null}
        <Input
          clearButtonMode={clear ? 'while-editing' : 'never'}
          underlineColorAndroid="transparent"
          ref={el => (this.inputRef = el)}
          {...restProps}
          {...valueProps}
          style={[styles.input, error ? styles.inputErrorColor : null]}
          keyboardType={keyboardType}
          onChange={event => this.onChange(event.nativeEvent.text)}
          secureTextEntry={type === 'password'}
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
        />
        {/* 只在有 value 的 受控模式 下展示 自定义的 安卓 clear 按钮 */}
        {(editable && clear && value && Platform.OS === 'android') ? (
          <TouchableOpacity
            style={[styles.clear]}
            onPress={this.onInputClear}
            hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}
          >
            <Image
              source={require('../style/images/cross_w.png')}
              style={{ width: 12, height: 12 }}
            />
          </TouchableOpacity>
        ) : null}
        {extra ? (
          <TouchableWithoutFeedback onPress={onExtraClick}>
            <View>
              {typeof extra === 'string' ? (
                <Text style={[styles.extra, extraStyle]}>{extra}</Text>
              ) : (
                extra
              )}
            </View>
          </TouchableWithoutFeedback>
        ) : null}
        {error && (
          <TouchableWithoutFeedback onPress={onErrorClick}>
            <View style={[styles.errorIcon]}>
              <Image
                source={require('../style/images/error.png')}
                style={{
                  width: variables.icon_size_xs,
                  height: variables.icon_size_xs,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    );
  }
}
