/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { SearchBarProps, SearchBarState, defaultProps } from './PropsType';
import defaultStyles, { ISearchBarStyle } from './style';
import omit from 'omit.js';

export interface ISearchBarNativeProps extends SearchBarProps {
  styles: ISearchBarStyle;
}

export default class SearchBar extends React.Component<ISearchBarNativeProps, SearchBarState> {
  static defaultProps = {
    ...defaultProps,
    styles: defaultStyles,
  };

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
    const { showCancelButton, cancelText, disabled, styles, style } = this.props;
    const restProps = omit(this.props, [
      'showCancelButton', 'cancelText', 'styles', 'value', 'onChangeText', 'onChange', 'onSubmitEditing', 'disabled',
    ]);
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
            ref="searchInput"
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
