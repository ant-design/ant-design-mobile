import React from 'react';
import H5NumberKeyBoard from './H5NumberKeyBoard';

if ((window as any).Element && !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
    let matches = (this.document || this.ownerDocument).querySelectorAll(s);
    let i;
    let el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {}
    } while ((i < 0) && (el = el.parentElement)); // tslint:disable-line
    return el;
  };
}

class H5NumberInput extends React.Component<any, any> {
  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    placeholder: '',
    value: '',
    prefixCls: 'am-input',
    keyboardPrefixCls: 'am-number-keyboard',
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('focused' in nextProps && nextProps.focused !== this.state.focused) {
      setTimeout(() => {
        if (nextProps.focused) {
          this.onInputFocus(this.props.value);
        }
      }, 10);
    }
  }

  componentDidMount() {
    const { autoFocus, focused, value, prefixCls, keyboardPrefixCls } = this.props;
    if (autoFocus || focused) {
      this.onInputFocus(value);
    }
    document.addEventListener('click', (ev) => {
      if (this.refs['input-container'] !== ev.target &&
        this.refs['input-container'] !== (ev.target as any).closest(`.${prefixCls}-control`) &&
        (ev.target as any).closest(`.${keyboardPrefixCls}-wrapper`) === null) {
        this.onInputBlur(value);
      }
    });
  }

  onInputBlur = (value) => {
    this.setState({
      focused: false,
    });
    this.props.onBlur(value);
  }

  onInputFocus = (value) => {
    this.setState({
      focused: true,
    });
    this.props.onFocus(value);
  }

  onKeyBoardClick = (KeyboardItemValue) => {
    let { value, onChange, maxLength } = this.props;
    // 删除键
    if (KeyboardItemValue === 'delete') {
      if (value === '') {
        onChange({ target: { value: '' } });
      } else {
        onChange({ target: { value: value.substring(0, value.length - 1) } });
      }
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
    return (<div
      className={focused ? 'fake-input focus' : 'fake-input'}
      ref="input-container"
      onClick={this.onFakeInputClick}
    >
      {value === '' && <div className="placeholder">{placeholder}</div>}
      {value}
      <H5NumberKeyBoard
        onClick={this.onKeyBoardClick}
        hide={!focused}
        confirmDisabled={value === ''}
        preixCls={keyboardPrefixCls}
      />
    </div>);
  }
}

export default H5NumberInput;
