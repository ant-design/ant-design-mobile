import * as React from 'react';
import { PropTypes } from 'react';
import { View, TextInput, Text } from 'react-native';
import { SearchBarProps, SearchBarState } from './SearchBarPropTypes';
import styles from './style/index';

function noop() {}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onCancel: PropTypes.func,
    onClear: PropTypes.func,
    showCancelButton: PropTypes.bool,
    cancelText: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-search',
    value: '',
    placeholder: '',
    onSubmit: noop,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    onCancel: noop,
    onClear: noop,
    showCancelButton: false,
    cancelText: '取消',
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
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
    this.props.onSubmit(this.state.value);
  };

  onChange = (e) => {
    let value = e.target.value;
    this.setState({ value });
    this.props.onChange(value);
  };

  onFocus = (e) => {
    if (this.props.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.setState({
      focus: true,
    });
    this.props.onFocus(e.target.value);
  };

  onBlur = (e) => {
    this.setState({
      focus: false,
    });
    this.props.onBlur(e.target.value);
  };

  onCancel = () => {
    this.props.onCancel(this.state.value);
  };

  onClear = () => {
    this.setState({
      value: '',
    });
    (this.refs as any).searchInput.focus();
    this.props.onClear('');
    this.props.onChange('');
  };

  render() {
    const { showCancelButton, disabled, placeholder, cancelText } = this.props;
    const { value, focus } = this.state;

    return (
      <View style={styles.wrapper}>
        <TextInput
          autoCorrect={false}
          value={value}
          placeholder={placeholder}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          style={styles.input}
          ref="searchInput"
          onSubmitEditing={this.onSubmit}
          clearButtonMode="always"
        />
      </View>
    );
  }
}
