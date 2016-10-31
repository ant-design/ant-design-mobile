import React from 'react';
import { View, Image, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import variables from '../style/themes/default';
import TextAreaItemProps from './TextAreaItemPropsType';
import TextAreaItemStyle from './style/index';

export default class TextAreaItem extends React.Component<TextAreaItemProps, any> {
  static defaultProps = {
    onChange() {
    },
    onFocus() {
    },
    onBlur() {
    },
    onErrorClick() {
    },
    clear: true,
    error: false,
    editable: true,
    rows: 1,
    value: '',
    placeholder: '',
    count: 0,
    keyboardType: 'default',
    autoHeight: false,
    last: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      inputCount: 0,
      height: props.rows > 1 ? 6 * props.rows * 4 : variables.list_item_height,
    };
  }

  onChange = (event) => {

    const text = event.nativeEvent.text;
    let height;
    const { autoHeight, rows } = this.props;

    if (autoHeight) {
      height = event.nativeEvent.contentSize.height;
    } else if (rows > 1) {
      height = 6 * rows * 4;
    } else {
      height = variables.list_item_height;
    }

    this.setState({
      value: text,
      inputCount: text.length,
      height,
    });
    if (this.props.onChange) {
      this.props.onChange({ text });
    }
  }

  onFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onErrorClick = () => {
    if (this.props.onErrorClick) {
      this.props.onErrorClick();
    }
  }

  render() {
    const { inputCount } = this.state;
    const { rows, error, clear, count, placeholder, autoHeight, editable, last } = this.props;

    const containerStyle = {
      borderBottomWidth: last ? 0 : variables.border_width_sm,
    };

    const textareaStyle = {
      color: error ? '#f50' : variables.color_text_base,
      paddingRight: error ? 2 * variables.h_spacing_lg : 0,
    };

    const maxLength = count > 0 ? count : undefined;

    return (
      <View style={[TextAreaItemStyle.container, containerStyle, { position: 'relative' }]}>
        <TextInput
          style={[TextAreaItemStyle.input, textareaStyle, {height: Math.max(45, this.state.height)}]}
          onChange={(event) => this.onChange(event)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.state.value}
          placeholder={placeholder}
          multiline={rows > 1 || autoHeight}
          numberOfLines={rows}
          maxLength={maxLength}
          clearButtonMode={clear ? 'while-editing' : 'never'}
          editable={editable}
          underlineColorAndroid="transparent"
        />
        {error ? <TouchableWithoutFeedback onPress={this.onErrorClick}>
          <View style={[TextAreaItemStyle.errorIcon]}>
            <Image
              source={require('../style/images/error.png')}
              style={{ width: variables.icon_size_xs, height:variables.icon_size_xs }}
            />
          </View>
        </TouchableWithoutFeedback> : null}
        {rows > 1 && count > 0 ? <View style={[TextAreaItemStyle.count]}>
          <Text>
            {inputCount} / {count}
          </Text>
        </View> : null}
      </View>
    );
  }
}
