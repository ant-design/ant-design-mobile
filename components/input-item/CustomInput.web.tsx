/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import CustomKeyboard from './CustomKeyboard.web';

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
  _container: any;

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
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
    const { autoFocus, focused, value, disabled, editable } = this.props;
    if ((autoFocus || focused) && !disabled && editable ) {
      this.onInputFocus(value);
    }
    document.addEventListener('click', this._blurEventListener, false);
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    this.renderCustomKeyboard();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._blurEventListener, false);
    if (this.debounceFocusTimeout) {
      clearTimeout(this.debounceFocusTimeout);
      this.debounceFocusTimeout = null;
    }
    this.removeContainer(this);
  }

  getComponent = () => {
    const { value, keyboardPrefixCls, confirmLabel, disabled, editable } = this.props;
    const { focused } = this.state;
    const preventKeyboard = disabled || !editable;
    if (!preventKeyboard) {
      return (<CustomKeyboard
        onClick={this.onKeyboardClick}
        hide={!focused}
        confirmDisabled={value === ''}
        preixCls={keyboardPrefixCls}
        confirmLabel={confirmLabel}
      />);
    }

    return <div />;
  }

  getContainer = () => {
    let container = document.querySelector(`#${this.props.keyboardPrefixCls}-container`);
    if (!container) {
      container = document.createElement('div');
      container.setAttribute('id', `${this.props.keyboardPrefixCls}-container`);
      document.body.appendChild(container);
    }

    return container;
  }

  removeContainer = (instance) => {
    let containerDom = document.querySelector(`#${this.props.keyboardPrefixCls}-container`);
    if (containerDom) {
      if (instance._container) {
        const container = instance._container;
        ReactDOM.unmountComponentAtNode(container);
        container.parentNode.removeChild(container);
        instance._container = null;
      }
    } else {
      if (instance._container) {
        instance._container = null;
      }
    }
  }

  renderCustomKeyboard = () => {
    if (!this._container) {
      this._container = this.getContainer();
    }

    ReactDOM.unstable_renderSubtreeIntoContainer(this, this.getComponent(), this._container);
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
    const { placeholder, value, keyboardPrefixCls, disabled, editable, confirmLabel } = this.props;
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
        ref="input-container"
        onClick={preventKeyboard ? () => {} : this.onFakeInputClick}
      >
        {value}
      </div>
      {!preventKeyboard &&
        <CustomKeyboard
          onClick={this.onKeyboardClick}
          hide={!focused}
          confirmDisabled={value === ''}
          preixCls={keyboardPrefixCls}
          confirmLabel={confirmLabel}
        />
      }
    </div>);
  }
}

export default NumberInput;
