import { PropTypes } from 'react';
import * as React from 'react';
import { View, Image, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import variables from '../style/variables';

export default class TextAreaItem extends React.Component<textAreaItemProps, any> {
  
  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onErrorClick: PropTypes.func,
    clear: PropTypes.bool, 
    error: PropTypes.bool,
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
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      clearFlag: false,
      inputCount: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onChange = (text) => {
    this.setState({
      value: text,
      clearFlag: !!text, 
      inputCount: text.length, 
    });
    this.props.onChange({text});
  }

  onFocus = () => {
    this.setState({
      clearFlag: !!this.state.value,
    });
    this.props.onFocus();
  }

  onBlur = () => {
    this.setState({
      clearFlag: false,
    });
    this.props.onBlur();
  }

  clearInput = () => {
    this.setState({
      value: '',
      inputCount: 0,
    });
  }

  onErrorClick = () => {
    this.props.onErrorClick();
  }


  render() {  
    const { clearFlag, inputCount } = this.state;
    const { rows, error, clear, count } = this.props;

    const inputLines = this.props.rows || 1;
    const inputHeight = inputLines > 1 ? 6 * inputLines * variables.grid : 10 * variables.grid;
    const inputFontSize = variables.font_size_6;

    const inputStyle = {
      height: inputHeight,
      fontSize: inputFontSize, 
      paddingHorizontal: 2 * variables.grid,
      backgroundColor: '#fff',
      color: error ? '#f50' : variables.neutral_10,
      paddingRight: error ? 12 * variables.grid : 6 * variables.grid,
    };

    const iconStyle = {
      position: 'absolute',
      right: error ? 8 * variables.grid : 2 * variables.grid,
      top: 2 * variables.grid,
      width: 18,
      height: 18,   
    };

    const errorIconStyle = {
      position: 'absolute',
      right: 2 * variables.grid,
      top: 2 * variables.grid,
    };

    const countStyle = {
      position: 'absolute',
      right: 2 * variables.grid,
      bottom: 2 * variables.grid,
    };

    const maxLength = count > 0 ? count : null;

    return (
      <View>
        <TextInput
          style={inputStyle}
          {...this.props}
          onChangeText={(text) => this.onChange(text)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.state.value}
          multiline = {rows > 1}
          numberOfLines = {rows}
          maxLength = {maxLength}
        />
        {
        clear !== false && clearFlag &&
        <TouchableWithoutFeedback onPress={this.clearInput}>
          <View style={iconStyle}>
            <Image
              source={{ uri: 'https://zos.alipayobjects.com/rmsportal/WvpyGwPbGnTLdKd.png' }}
              style={{ width: 18, height:18 }}
            />
          </View>
        </TouchableWithoutFeedback>
        }
        {
        error &&
        <TouchableWithoutFeedback onPress={this.onErrorClick}>
          <View style={errorIconStyle}>
            <Image
              source={{ uri: 'https://zos.alipayobjects.com/rmsportal/ginyKmmfHfKAXze.png' }}
              style={{ width: 18, height:18 }}
            />
          </View>
        </TouchableWithoutFeedback> 
        }

        {
        rows > 1 && count > 0 &&
        <View style={countStyle}>
          <Text>
            {inputCount} / {count}
          </Text>
        </View>
        }
        
      </View>
    );
  }
}
