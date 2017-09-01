/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import CustomKeyboard from './CustomKeyboard';
import { addClass, removeClass } from '../_util/class';

class NumberInput extends React.Component<any, any> {
  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    placeholder: '',
    value: '',
    disabled: false,
    editable: true,
    prefixCls: 'am-input',
    keyboardPrefixCls: 'am-number-keyboard',
  };

  debounceFocusTimeout: any;
  inputRef: any;

  constructor(props) {
    super(props);
    this.state = {
      focused: props.focused || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('focused' in nextProps && nextProps.focused !== this.state.focused) {
      this.debounceFocusTimeout = setTimeout(() => {
        const { disabled, editable } = this.props;
        if (nextProps.focused && !disabled && editable) {
          this.onInputFocus(this.props.value);
        }
      }, 10);
    }
  }

  componentDidMount() {
    if (!(window as any).antmCustomKeyboard) {
      this.renderCustomKeyboard();
    }
    const { autoFocus, focused, value, disabled, editable } = this.props;
    if ((autoFocus || focused) && !disabled && editable ) {
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
    this.unLinkInput();
  }

  getComponent = () => {
    const { keyboardPrefixCls, confirmLabel } = this.props;

    return (<CustomKeyboard
      onClick={this.onKeyboardClick}
      preixCls={keyboardPrefixCls}
      confirmLabel={confirmLabel}
    />);
  }

  renderCustomKeyboard = () => {
    let container = document.querySelector(`#${this.props.keyboardPrefixCls}-container`);
    if (!container) {
      container = document.createElement('div');
      container.setAttribute('id', `${this.props.keyboardPrefixCls}-container`);
      document.body.appendChild(container);
      (window as any).antmCustomKeyboard = ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        this.getComponent(),
        container,
      );
    }
  }

  _blurEventListener = (ev) => {
    const { value } = this.props;
    if (ev.target !== this.inputRef) {
      this.onInputBlur(value);
    }
  }

  unLinkInput = () => {
    const antmCustomKeyboard = (window as any).antmCustomKeyboard;
    if (antmCustomKeyboard.linkedInput === this) {
      antmCustomKeyboard.linkedInput = null;
      addClass(antmCustomKeyboard.antmKeyboard, `${this.props.keyboardPrefixCls}-wrapper-hide`);
    }
  }

  onInputBlur = (value) => {
    const { focused } = this.state;
    if (focused) {
      this.setState({
        focused: false,
      });
      this.props.onBlur(value);
      setTimeout(() => {
        this.unLinkInput();
      }, 50);
    }
  }

  onInputFocus = (value) => {
    this.props.onFocus(value);
    this.setState({
      focused: true,
    }, () => {
      const antmCustomKeyboard = (window as any).antmCustomKeyboard;
      antmCustomKeyboard.linkedInput = this;
      removeClass(antmCustomKeyboard.antmKeyboard, `${this.props.keyboardPrefixCls}-wrapper-hide`);
      antmCustomKeyboard.confirmDisabled = (value === '');
      if (value === '') {
        addClass(antmCustomKeyboard.confirmKeyboardItem, `${this.props.keyboardPrefixCls}-item-disabled`);
      } else {
        removeClass(antmCustomKeyboard.confirmKeyboardItem, `${this.props.keyboardPrefixCls}-item-disabled`);
      }
    });
  }

  onKeyboardClick = (KeyboardItemValue) => {
    let { value, onChange, maxLength } = this.props;
    let valueAfterChange;
    // 删除键
    if (KeyboardItemValue === 'delete') {
      valueAfterChange = value.substring(0, value.length - 1);
      onChange({ target: { value: valueAfterChange } });
    // 确认键
    } else if (KeyboardItemValue === 'confirm') {
      valueAfterChange = value;
      onChange({ target: { value: valueAfterChange } });
      this.onInputBlur(value);
    // 收起键
    } else if (KeyboardItemValue === 'hide') {
      valueAfterChange = value;
      this.onInputBlur(valueAfterChange);
    } else {
      if (maxLength !== undefined && +maxLength >= 0 && (value + KeyboardItemValue).length > maxLength) {
        valueAfterChange = (value + KeyboardItemValue).substr(0, maxLength);
        onChange({ target: { value: valueAfterChange } });
      } else {
        valueAfterChange = (value + KeyboardItemValue);
        onChange({ target: { value: valueAfterChange } });
      }
    }

    const antmCustomKeyboard = (window as any).antmCustomKeyboard;
    antmCustomKeyboard.confirmDisabled = (valueAfterChange === '');
    if (valueAfterChange === '') {
      addClass(antmCustomKeyboard.confirmKeyboardItem, `${this.props.keyboardPrefixCls}-item-disabled`);
    } else {
      removeClass(antmCustomKeyboard.confirmKeyboardItem, `${this.props.keyboardPrefixCls}-item-disabled`);
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
    const { placeholder, value, disabled, editable } = this.props;
    const { focused } = this.state;
    const preventKeyboard = disabled || !editable;
    const fakeInputCls = classNames({
      [`fake-input`]: true,
      [`focus`]: focused,
      [`fake-input-disabled`]: disabled,
    });
    return (<div className="fake-input-container">
      {value === '' && <div className="fake-input-placeholder">{placeholder}</div>}
      <div
        className={fakeInputCls}
        ref={el => this.inputRef = el}
        onClick={preventKeyboard ? () => {} : this.onFakeInputClick}
      >
        {value}
      </div>
    </div>);
  }
}

export default NumberInput;
