import * as React from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { SearchBarProps, SearchBarState, propTypes, defaultProps } from './SearchBarPropTypes';
import styles from './style/index';

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

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
    this.state = { value };
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
    this.props.onSubmit(this.state.value);
  };

  onChangeText = (value) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.props.onChange(value);
  };

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value);
    }
  };

  render() {
    const {
      showCancelButton, placeholder, cancelText, onFocus, onBlur,
    } = this.props;

    const { value } = this.state;

    return (
      <View style={styles.wrapper}>
        <TextInput
          autoCorrect={false}
          value={value}
          placeholder={placeholder}
          onChangeText={this.onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          style={styles.input}
          ref="searchInput"
          onSubmitEditing={this.onSubmit}
          clearButtonMode="always"
        />
        <Image
          source={require('../style/images/search.png')}
          style={styles.search}
          resizeMode="stretch"
        />
        {
          showCancelButton ? (
            <View style={styles.cancelTextContainer}>
              <Text style={styles.cancelText} onPress={this.onCancel}>
                {cancelText}
              </Text>
            </View>
          ) : null
        }
      </View>
    );
  }
}
