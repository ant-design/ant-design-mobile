/* tslint:disable:jsx-no-multiline-js */
import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import { getComponentLocale } from '../_util/getLocale';
import { defaultProps, SearchBarPropsType, SearchBarState } from './PropsType';
import SearchBarStyle, { ISearchBarStyle } from './style/index.native';

export interface SearchBarNativeProps extends SearchBarPropsType {
  styles: ISearchBarStyle;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: (event: { nativeEvent: { text: string } }) => void;
  style?: StyleProp<TextStyle>;
}

const SearchBarStyles = StyleSheet.create<any>(SearchBarStyle);

export default class SearchBar extends React.Component<
  SearchBarNativeProps,
  SearchBarState
> {
  static defaultProps = {
    ...defaultProps,
    styles: SearchBarStyles,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  inputRef: TextInput | null;

  constructor(props: SearchBarNativeProps) {
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

  componentWillReceiveProps(nextProps: SearchBarNativeProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onSubmit = (_: { nativeEvent: { text: string } }) => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value || '');
    }
  }

  onChangeText = (value: string) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value || '');
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
      showCancelButton,
      styles,
      value: propsValue,
      cancelText,
      onChangeText,
      onChange,
      disabled,
      style,
      ...restProps,
    } = this.props;

    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(
      this.props,
      this.context,
      'SearchBar',
      () => require('./locale/zh_CN'),
    );

    const { value, focus } = this.state;
    // tslint:disable-next-line:variable-name
    const _showCancelButton = showCancelButton || focus;

    return (
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <TextInput
            clearButtonMode="always"
            underlineColorAndroid="transparent"
            editable={!disabled}
            {...restProps}
            style={[styles.input, style]}
            ref={el => ((this.inputRef as any) = el)}
            value={value}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmit}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </View>
        <Image
          source={require('../style/images/search.png')}
          style={styles.search}
          resizeMode="stretch"
        />
        {_showCancelButton && (
          <View style={styles.cancelTextContainer}>
            <Text style={styles.cancelText} onPress={this.onCancel}>
              {cancelText || _locale.cancelText}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
