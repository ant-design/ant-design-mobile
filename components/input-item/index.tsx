import * as React from 'react';
import { PropTypes } from 'react';
import { View, Image, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import variables from '../style/variables';
import InputItemProps from './InputItemPropsType';
import InputItemStyle from './style/index';

export interface InputItemState {
  focus: boolean;
}

export default class InputItem extends React.Component<InputItemProps, InputItemState> {
  static propTypes = {
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
  };

  static defaultProps = {
    type: 'hasLine',
    format: 'text',
    editable: true,
    name: '',
    value: '',
    placeholder: '',
    clear: false,
    maxLength: -1,
    extra: '',
    error: false,
    size: 'large',
    labelNumber: 4,
    labelPosition: 'left',
    textAlign: 'left',
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  onInputChange = (e) => {
    let value = e.target.value;
    const { maxLength, onChange, format } = this.props;

    switch (format) {
      case 'text':
        if (maxLength > 0) {
          value = value.substring(0, maxLength);
        }
        break;
      case 'bankCard':

        value = value.replace(/\D/g, '');
        if (maxLength > 0) {
          value = value.substring(0, maxLength);
        }
        value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      case 'phone':
        value = value.replace(/\D/g, '');
        if (maxLength > 0) {
          value = value.substring(0, 11);
        }
        const valueLen = value.length;
        if (valueLen > 3 && valueLen < 8) {
          value = `${value.substr(0, 3)} ${value.substr(3)}`;
        } else if (valueLen >= 8) {
          value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`;
        }
        break;
      case 'number':
        value = value.replace(/\D/g, '');
        break;
      case 'password':
        break;
      default:
        break;
    }
    onChange(value);
  };

  onInputBlur = (e) => {
    setTimeout(() => {
      this.setState({
        focus: false,
      });
    }, 300);
    const value = e.target.value;
    this.props.onBlur(value);
  };

  onInputFocus = (e) => {
    this.setState({
      focus: true,
    });
    const value = e.target.value;
    this.props.onFocus(value);
  };

  onExtraClick = (e) => {
    this.props.onExtraClick(e);
  };

  onErrorClick = (e) => {
    this.props.onErrorClick(e);
  };

  clearInput = () => {
    this.props.onChange('');
  };

  render() {
    const { format, name, editable, value, placeholder,
      style, clear, children, error, extra } = this.props;

    let inputType = 'text';
    if (format === 'bankCard' || format === 'phone') {
      inputType = 'tel';
    } else if (format === 'password') {
      inputType = 'password';
    }

    const iconStyle = {
      right: error ? 8 * variables.grid : 2 * variables.grid,
    };

    return (
      <View style={style}>
        {children ? (<Text>{children}</Text>) : null}
        <View>
          <TextInput
            type={inputType}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={this.onInputChange}
            onBlur={this.onInputBlur}
            onFocus={this.onInputFocus}
            readOnly={!editable}
            pattern={format === 'number' ? '[0-9]*' : ''}
          />
        </View>
        {clear && editable && value.length > 0 ?
          <TouchableWithoutFeedback onPress={this.clearInput} >
            <View style={[InputItemStyle.icon, iconStyle]}>
              <Image
                source={{ uri: 'https://zos.alipayobjects.com/rmsportal/WvpyGwPbGnTLdKd.png' }}
                style={{ width: 18, height:18 }}
              />
            </View>
          </TouchableWithoutFeedback>
          : null}
        {error ? (<TouchableWithoutFeedback onPress={this.onErrorClick} >
          <View style={[InputItemStyle.errorIcon]}>
            <Image
              source={{ uri: 'https://zos.alipayobjects.com/rmsportal/ginyKmmfHfKAXze.png' }}
              style={{ width: 18, height:18 }}
            />
          </View>
        </TouchableWithoutFeedback>) : null}
        {extra !== '' ? <TouchableWithoutFeedback onPress={this.onExtraClick}>{extra}</TouchableWithoutFeedback> : null}
      </View>
    );
  }
}
