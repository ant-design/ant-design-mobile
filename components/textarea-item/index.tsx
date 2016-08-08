import { PropTypes } from 'react';
import * as React from 'react';
import { View, Image, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import variables from '../style/variables';
import TextAreaItemProps from './TextAreaItemPropsType';
import TextAreaItemStyle from './style/index';

export default class TextAreaItem extends React.Component<TextAreaItemProps, any> {
  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onErrorClick: PropTypes.func,
    clear: PropTypes.bool,
    error: PropTypes.bool,
    autoHeight: PropTypes.bool,
    editable: PropTypes.bool,
    rows: PropTypes.number,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    count: PropTypes.number,
    keyboardType: PropTypes.string,
  };

  static defaultProps = {
    onChange() {},
    onFocus() {},
    onBlur() {},
    onErrorClick() {},
    clear: true,
    error: false,
    editable: true,
    rows: 1,
    value: '',
    placeholder: '',
    count: 0,
    keyboardType: 'default',
    autoHeight: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      inputCount: 0,
      height: props.rows > 1 ? 6 * props.rows * variables.grid : 10 * variables.grid,
    };
  }

  onChange = (event) => {

    const text = event.nativeEvent.text;
    let height;
    const { autoHeight, rows } = this.props;

    if (autoHeight) {
      height = event.nativeEvent.contentSize.height;
    } else if (rows > 1) {
      height = 6 * rows * variables.grid;
    } else {
      height = 10 * variables.grid;
    }

    this.setState({
      value: text,
      inputCount: text.length,
      height,
    });
    this.props.onChange({text});
  }

  onFocus = () => {
    this.props.onFocus();
  }

  onBlur = () => {
    this.props.onBlur();
  }

  onErrorClick = () => {
    this.props.onErrorClick();
  }

  render() {
    const { inputCount } = this.state;
    const { rows, error, clear, count, placeholder, autoHeight, editable } = this.props;

    const inputStyle = {
      color: error ? '#f50' : variables.neutral_10,
    };

    const maxLength = count > 0 ? count : null;

    return (
      <View>
        <TextInput
          style={[TextAreaItemStyle.input, inputStyle, {height: Math.max(35, this.state.height)}]}
          onChange={(event) => this.onChange(event)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.state.value}
          placeholder = {placeholder}
          multiline = {rows > 1 || autoHeight}
          numberOfLines = {rows}
          maxLength = {maxLength}
          clearButtonMode = {clear ? 'while-editing' : 'never'}
          editable = {editable}
        />

        {
        error &&
        <TouchableWithoutFeedback onPress={this.onErrorClick}>
          <View style={[TextAreaItemStyle.errorIcon]}>
            <Image
              source={{ uri: 'https://zos.alipayobjects.com/rmsportal/nHIBAEcRUDcxCUd.png' }}
              style={{ width: 16, height:16 }}
            />
          </View>
        </TouchableWithoutFeedback>
        }

        {
        rows > 1 && count > 0 &&
        <View style={[TextAreaItemStyle.count]}>
          <Text>
            {inputCount} / {count}
          </Text>
        </View>
        }
      </View>
    );
  }
}
