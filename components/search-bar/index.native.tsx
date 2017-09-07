/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, TextInput, Text, Image, StyleSheet } from 'react-native';
import { SearchBarProps, SearchBarState, defaultProps } from './PropsType';
import SearchBarStyle, { ISearchBarStyle } from './style/index.native';

export interface ISearchBarNativeProps extends SearchBarProps {
  styles: ISearchBarStyle;
  onChangeText?: Function;
  onSubmitEditing?: Function;
}

const SearchBarStyles = StyleSheet.create<any>(SearchBarStyle);

export default class SearchBar extends React.Component<ISearchBarNativeProps, SearchBarState> {
  static defaultProps = {
    ...defaultProps,
    styles: SearchBarStyles,
  };

  inputRef: any;

  constructor(props) {
    super(props);
    let value;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      value = '';
    }
    this.state = {
      value,
      focus: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value);
    }
  }

  onChangeText = (value) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value);
    }
  }

  onFocus = () => {
    this.setState({
      focus: true,
    });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur = () => {
    this.setState({
      focus: false,
    });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }
  render() {
    const {
      showCancelButton, cancelText, styles, value: propsValue,
      onChangeText, onChange, onSubmitEditing, disabled,
      ...restProps,
    } = this.props;
    const { style } = restProps;
    const { value, focus } = this.state;
    const _showCancelButton = showCancelButton || focus;

    return (
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <TextInput
            value={value}
            onChangeText={this.onChangeText}
            style={[styles.input, style]}
            editable={!disabled}
            ref={el => this.inputRef = el}
            onSubmitEditing={this.onSubmit}
            clearButtonMode="always"
            underlineColorAndroid="transparent"
            {...restProps}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </View>
        <Image
          source={require('../style/images/search.png')}
          style={styles.search}
          resizeMode="stretch"
        />
        {
          _showCancelButton &&
            <View style={styles.cancelTextContainer}>
              <Text style={styles.cancelText} onPress={this.onCancel}>
                {cancelText}
              </Text>
            </View>
        }
      </View>
    );
  }
}
