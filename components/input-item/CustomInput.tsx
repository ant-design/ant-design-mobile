/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import CustomKeyboard from './CustomKeyboard';
import { addClass, removeClass } from '../_util/class';

const IS_REACT_16 = !!(ReactDOM as any).createPortal;

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

  state = {
    focus: false,
  };

  private container: any;
  private inputRef: any;

  componentDidMount() {
    if (!IS_REACT_16 && !(window as any).antmCustomKeyboard) {
      this.renderCustomKeyboard();
    }
  }
  addBlurListener = () => {
    document.addEventListener('click', this.doBlur, false);
  }
  removeBlurListen = () => {
    document.removeEventListener('click', this.doBlur, false);
  }
  componentWillUnmount() {
    this.unLinkInput();
  }

  saveRef = (el) => {
    if (IS_REACT_16) {
      (window as any).antmCustomKeyboard = el;
    }
  }

  getComponent() {
    const { keyboardPrefixCls, confirmLabel } = this.props;

    return (<CustomKeyboard
      ref={this.saveRef}
      onClick={this.onKeyboardClick}
      preixCls={keyboardPrefixCls}
      confirmLabel={confirmLabel}
    />);
  }

  getContainer() {
    let container = document.querySelector(`#${this.props.keyboardPrefixCls}-container`);
    if (!container) {
      container = document.createElement('div');
      container.setAttribute('id', `${this.props.keyboardPrefixCls}-container`);
      document.body.appendChild(container);
    }
    this.container = container;
    return container;
  }

  renderCustomKeyboard() {
    if (!this.container) {
      (window as any).antmCustomKeyboard = ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        this.getComponent(),
        this.getContainer(),
      );
    }
  }

  doBlur = (ev) => {
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
      this.removeBlurListen();
    }
  }

  onInputBlur = (value) => {
    const { focus } = this.state;
    if (focus) {
      this.setState({
        focus: false,
      });
      this.props.onBlur(value);
      setTimeout(() => {
        this.unLinkInput();
      }, 50);
    }
  }

  onInputFocus = () => {
    const { value } = this.props;
    this.props.onFocus(value);
    this.setState({
      focus: true,
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
    this.focus();
  }

  focus = () => {
    // this focus may invocked by users page button click, so this click may trigger blurEventListener at the same time
    this.removeBlurListen();
    const { focus } = this.state;
    if (!focus) {
      this.onInputFocus();
    }
    setTimeout(() => {
      this.addBlurListener();
    }, 50);
  }

  render() {
    const { placeholder, value, disabled, editable, moneyKeyboardAlign } = this.props;
    const { focus } = this.state;
    const preventKeyboard = disabled || !editable;
    const fakeInputCls = classnames(`fake-input`, {
      focus,
      'fake-input-disabled': disabled,
    });
    const fakeInputContainerCls = classnames('fake-input-container', {
      'fake-input-container-left': moneyKeyboardAlign === 'left',
    });

    return (
      <div className={fakeInputContainerCls}>
        {value === '' && <div className="fake-input-placeholder">{placeholder}</div>}
        <div
          className={fakeInputCls}
          ref={el => this.inputRef = el}
          onClick={preventKeyboard ? () => {} : this.onFakeInputClick}
        >
          {value}
        </div>
        {IS_REACT_16 && (ReactDOM as any).createPortal(this.getComponent(), this.getContainer())}
      </div>
    );
  }
}

export default NumberInput;
