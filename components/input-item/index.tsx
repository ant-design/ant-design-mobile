import * as React from 'react';
import { PropTypes } from 'react';
import { View, Image, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import variables from '../style/variables';
import InputItemProps from './InputItemPropsType';
import InputItemStyle from './style/index';
function noop() { }

export default class InputItem extends React.Component<InputItemProps, any> {
  static propTypes = {
    type: PropTypes.oneOf(['text', 'bankCard', 'phone', 'password', 'number']),
    extra: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
    size: PropTypes.oneOf(['large', 'small']),
    labelNumber: PropTypes.oneOf([2, 3, 4, 5, 6, 7]),
    labelPosition: PropTypes.oneOf(['left', 'top']),
    textAlign: PropTypes.oneOf(['left', 'center']),
  };

  static defaultProps = {
    prefixCls: 'am-input',
    prefixListCls: 'am-list',
    type: 'text',
    editable: true,
    name: '',
    value: '',
    placeholder: '',
    clear: false,
    maxLength: -1,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraPress: noop,
    error: false,
    onErrorPress: noop,
    size: 'large',
    labelNumber: 4,
    labelPosition: 'left',
    textAlign: 'left',
    last: false,
  };

  constructor(props) {
    super(props);
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
    onChange(text);
  };

  render() {
    const { type, editable, value, placeholder, style,
      clear, children, error, extra, labelNumber, last } = this.props;

    const containerStyle = {
      borderBottomWidth: last ? 0 : 1,
    };

    const textStyle = {
      width: 4 * variables.grid * labelNumber,
    };

    const inputStyle = {
      color: error ? '#f50' : variables.neutral_10,
  };

    const extraStyle = {
      width: typeof extra === 'string' && extra.length > 0 ? extra.length * 4.5 * variables.grid : 0,
    };

    return (
      <View style={[InputItemStyle.container, containerStyle, style]}>
        {children ? <Text style={[InputItemStyle.text, textStyle]}>{children}</Text> : null}
        <TextInput
          style={[InputItemStyle.input, inputStyle]}
          value={value}
          keyboardType={type === 'number' || type === 'bankCard' ? 'numeric' : 'default'}
          onChange={(event) => this.onChange(event.nativeEvent.text)}
          onFocus={() => this.props.onFocus()}
          onBlur={() => this.props.onBlur()}
          placeholder={placeholder}
          autoCorrect={false}
          secureTextEntry={type === 'password'}
          clearButtonMode = {clear ? 'while-editing' : 'never'}
          editable={editable}
        />
        {extra ? <TouchableWithoutFeedback
          onPress={() => { this.props.onExtraPress(); }}
        >
          <View>
            <Text style={[InputItemStyle.extra, extraStyle]}>{extra}</Text>
          </View>
        </TouchableWithoutFeedback> : null}
        {
          error &&
          <TouchableWithoutFeedback
            onPress={() => { this.props.onErrorPress(); }}
          >
            <View style={[InputItemStyle.errorIcon]}>
              <Image
                source={require('../style/images/error.png')}
                style={{ width: 16, height: 16 }}
              />
            </View>
          </TouchableWithoutFeedback>
        }
      </View>
    );
  }
}
