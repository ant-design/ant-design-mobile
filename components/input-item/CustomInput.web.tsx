import React from 'react';
import CustomKeyboard from './CustomKeyboard.web';

class NumberInput extends React.Component<any, any> {
  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    placeholder: '',
    value: '',
    prefixCls: 'am-input',
    keyboardPrefixCls: 'am-number-keyboard',
  };

  debounceFocusTimeout: any;

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('focused' in nextProps && nextProps.focused !== this.state.focused) {
      this.debounceFocusTimeout = setTimeout(() => {
        if (nextProps.focused) {
          this.onInputFocus(this.props.value);
        }
      }, 10);
    }
  }

  componentDidMount() {
    const { autoFocus, focused, value } = this.props;
    if (autoFocus || focused) {
      this.onInputFocus(value);
    }
    document.addEventListener('click', this._blurEventListener, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._blurEventListener, false);
    if (this.debounceFocusTimeout) {
      clearTimeout(this.debounceFocusTimeout);
      this.debounceFocusTimeout = null;
    }
  }

  _blurEventListener = (ev) => {
    const { value } = this.props;
    if (ev.target !== this.refs['input-container']) {
      this.onInputBlur(value);
    }
  }

  onInputBlur = (value) => {
    const { focused } = this.state;
    if (focused) {
      this.setState({
        focused: false,
      });
      this.props.onBlur(value);
    }
  }

  onInputFocus = (value) => {
    this.setState({
      focused: true,
    });
    this.props.onFocus(value);
  }

  onKeyboardClick = (KeyboardItemValue) => {
    let { value, onChange, maxLength } = this.props;
    // 删除键
    if (KeyboardItemValue === 'delete') {
      onChange({ target: { value: value.substring(0, value.length - 1) } });
    // 确认键
    } else if (KeyboardItemValue === 'confirm') {
      onChange({ target: { value: value } });
      this.onInputBlur(value);
    // 收起键
    } else if (KeyboardItemValue === 'hide') {
      this.onInputBlur(value);
    } else {
      if (maxLength !== undefined && +maxLength >= 0 && (value + KeyboardItemValue).length > maxLength) {
        onChange({ target: { value: (value + KeyboardItemValue).substr(0, maxLength) } });
      } else {
        onChange({ target: { value: (value + KeyboardItemValue) } });
      }
    }
  }

  onFakeInputClick = () => {
    const { value } = this.props;
    const { focused } = this.state;
    if (!focused) {
      this.onInputFocus(value);
    }
  }

  render() {
    const { placeholder, value, keyboardPrefixCls } = this.props;
    const { focused } = this.state;
    return (<div className="fake-input-container">
      {value === '' && <div className="fake-input-placeholder">{placeholder}</div>}
      <div
        className={focused ? 'fake-input focus' : 'fake-input'}
        ref="input-container"
        onClick={this.onFakeInputClick}
      >
        {value}
      </div>
      <CustomKeyboard
        onClick={this.onKeyboardClick}
        hide={!focused}
        confirmDisabled={value === ''}
        preixCls={keyboardPrefixCls}
      />
    </div>);
  }
}

export default NumberInput;
