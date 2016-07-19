import * as React from 'react';
import { PropTypes } from 'react';
import { View, Image, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import variables from '../style/variables';
import InputItemProps from './InputItemPropsType';
import InputItemStyle from './style/index';
function noop() { }

export default class InputItem extends React.Component<InputItemProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    prefixListCls: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['hasLine']),
    format: PropTypes.oneOf(['text', 'bankCard', 'phone', 'password', 'number']),
    editable: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    extra: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
    onExtraClick: PropTypes.func,
    error: PropTypes.bool,
    onErrorClick: PropTypes.func,
    size: PropTypes.oneOf(['large', 'small']),
    labelNumber: PropTypes.oneOf([2, 3, 4, 5, 6, 7]),
    labelPosition: PropTypes.oneOf(['left', 'top']),
    textAlign: PropTypes.oneOf(['left', 'center']),
    last: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-input',
    prefixListCls: 'am-list',
    type: 'hasLine',
    format: 'text',
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
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
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
    this.props.onChange(text);
  };

  onFocus = () => {
    this.props.onFocus(this.props.value);
  }

  onBlur = () => {
    this.props.onBlur(this.props.value);
  }

  onErrorClick = () => {
    this.props.onErrorClick();
  };

  clearInput = () => {
    this.props.onChange('');
  };

  render() {
    const {
     format, type, name, editable, value, placeholder, style, clear, children,
      error, extra, labelNumber, last } = this.props;

    const containerStyle = {
      borderBottomWidth: last ? 0 : 1;
    };

    const textStyle = {
     width: 4 * variables.grid * labelNumber
    };

    const inputStyle = {
      color: error ? '#f50' : variables.neutral_10,
      left: children ?  4 * variables.grid + 4 * variables.grid * labelNumber : 0,
  };

    const clearIconStyle = {
      right: error ? 8 * variables.grid : 2 * variables.grid,
    };

    console.log(clear);
    console.log(editable);
    return (
      <View style={[InputItemStyle.container, containerStyle, style]}>
        {children ? <Text style={[InputItemStyle.text, textStyle]}>{children}</Text> : null}
        <TextInput
          style={[InputItemStyle.input, inputStyle]}
          onChange={(event) => this.onChange(event.nativeEvent.text)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={value}
          placeholder={placeholder}
          autoCorrect={false}
        />
        {clear && editable && value.length > 0 ? <TouchableWithoutFeedback onPress={this.clearInput}>
          <View style={[InputItemStyle.clearIcon, clearIconStyle]}>
            <Image
              source={{ uri: 'https://zos.alipayobjects.com/rmsportal/WvpyGwPbGnTLdKd.png' }}
              style={{ width: 16, height: 16 }}
            />
          </View>
        </TouchableWithoutFeedback> : null}
        {
          error &&
          <TouchableWithoutFeedback onPress={this.onErrorClick}>
            <View style={[InputItemStyle.errorIcon]}>
              <Image
                source={{ uri: 'https://zos.alipayobjects.com/rmsportal/ginyKmmfHfKAXze.png' }}
                style={{ width: 16, height: 16 }}
              />
            </View>
          </TouchableWithoutFeedback>
        }
      </View>

    );
  }
}
