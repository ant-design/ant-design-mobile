import classnames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addClass, removeClass, hasClass } from '../_util/class';
import CustomKeyboard from './CustomKeyboard';
import Portal from './Portal';
import { InputEventHandler } from './PropsType';
import { canUseDOM } from '../_util/exenv';

let instanceArr: any = [];
let customNumberKeyboard: CustomKeyboard | null = null;
const IS_REACT_16 = !!ReactDOM.createPortal;
export interface NumberInputProps {
  placeholder?: string;
  disabled?: boolean;
  editable?: boolean;
  moneyKeyboardAlign?: 'left' | 'right' | string;
  moneyKeyboardWrapProps?: object;
  moneyKeyboardHeader?: React.ReactNode,
  value?: string;
  prefixCls?: string;
  keyboardPrefixCls?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: InputEventHandler;
  onBlur?: InputEventHandler;
  onVirtualKeyboardConfirm?: InputEventHandler;
  confirmLabel: any;
  backspaceLabel: any;
  cancelKeyboardLabel: any;
  maxLength?: number;
  type?: string;
  style?: React.CSSProperties;
  autoAdjustHeight?: boolean;
}
class NumberInput extends React.Component<NumberInputProps, any> {
  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onVirtualKeyboardConfirm: () => {},
    placeholder: '',
    disabled: false,
    editable: true,
    prefixCls: 'am-input',
    keyboardPrefixCls: 'am-number-keyboard',
    autoAdjustHeight: false,
  };
  container: Element;
  inputRef: HTMLDivElement | null;
  keyboardHeight: number | null;

  constructor(props: NumberInputProps) {
    super(props);
    this.keyboardHeight = null;
    this.state = {
      focus: false,
      value: props.value || '',
    };
  }

  onChange = (value: any) => {
    if (!('value' in this.props)) {
      this.setState({ value: value.target.value });
    }
    this.props.onChange!(value);
  }

  onConfirm = (value: any) => {
    this.props.onVirtualKeyboardConfirm!(value);
  }

  componentWillReceiveProps(nextProps: NumberInputProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  componentDidUpdate() {
    this.renderCustomKeyboard();
  }

  addBlurListener = () => {
    document.addEventListener('click', this.doBlur, false);
  }

  removeBlurListener = () => {
    document.removeEventListener('click', this.doBlur, false);
  }

  componentWillUnmount() {
    // focus:true unmount 不能触发 blur
    if (this.state.focus) {
      this.props.onBlur!(this.state.value);
    }
    this.unLinkInput();
  }

  saveRef = (el: CustomKeyboard | null) => {
    if (IS_REACT_16 && el) {
      customNumberKeyboard = el;
      instanceArr.push({ el, container: this.container });
    }
  }

  getComponent() {
    const {
      confirmLabel,
      backspaceLabel,
      cancelKeyboardLabel,
      keyboardPrefixCls,
      moneyKeyboardWrapProps,
      moneyKeyboardHeader,
    } = this.props;

    return (
      <CustomKeyboard
        ref={this.saveRef}
        onClick={this.onKeyboardClick}
        prefixCls={keyboardPrefixCls}
        confirmLabel={confirmLabel}
        backspaceLabel={backspaceLabel}
        cancelKeyboardLabel={cancelKeyboardLabel}
        wrapProps={moneyKeyboardWrapProps}
        header={moneyKeyboardHeader}
      />
    );
  }

  getContainer() {
    const { keyboardPrefixCls } = this.props;
    if (IS_REACT_16) {
      if (!this.container) {
        const container = document.createElement('div');
        container.setAttribute('id', `${keyboardPrefixCls}-container-${(new Date().getTime())}`);
        document.body.appendChild(container);
        this.container = container;
      }
    } else {
      let container = document.querySelector(
        `#${keyboardPrefixCls}-container`,
      );
      if (!container) {
        container = document.createElement('div');
        container.setAttribute('id', `${keyboardPrefixCls}-container`);
        document.body.appendChild(container);
      }
      this.container = container;
    }
    return this.container;
  }

  renderCustomKeyboard() {
    if (IS_REACT_16) {
      return;
    }
    customNumberKeyboard = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.getComponent(),
      this.getContainer(),
    ) as CustomKeyboard;
  }

  doBlur = (ev: MouseEvent) => {
    const { value } = this.state;
    if (ev.target !== this.inputRef) {
      this.onInputBlur(value);
    }
  }

  removeCurrentExtraKeyboard = () => {
    instanceArr = instanceArr.filter((item: any) => {
      const { el, container } = item;
      if (el && container && el !== customNumberKeyboard) {
        (container as any).parentNode.removeChild(container);
      }
      return el === customNumberKeyboard;
    });
  }

  unLinkInput = () => {
    if (
      customNumberKeyboard &&
      customNumberKeyboard.antmKeyboard &&
      customNumberKeyboard.linkedInput &&
      customNumberKeyboard.linkedInput === this
    ) {
      customNumberKeyboard.linkedInput = null;
      addClass(
        customNumberKeyboard.antmKeyboard,
        `${this.props.keyboardPrefixCls}-wrapper-hide`,
      );
      this.fixedBody();
    }
    // for unmount
    this.removeBlurListener();

    if (IS_REACT_16) {
      this.removeCurrentExtraKeyboard();
    }
  }

  onInputBlur = (value: string) => {
    const { focus } = this.state;
    if (focus) {
      this.setState({
        focus: false,
      });
      this.props.onBlur!(value);
      setTimeout(() => {
        this.unLinkInput();
      }, 50);
    }
  }

  onInputFocus = () => {
    const { value } = this.state;
    this.props.onFocus!(value);
    this.setState(
      {
        focus: true,
      },
      () => {
        if (customNumberKeyboard) {
          customNumberKeyboard.linkedInput = this;
          if (customNumberKeyboard.antmKeyboard) {
            removeClass(
              customNumberKeyboard.antmKeyboard,
              `${this.props.keyboardPrefixCls}-wrapper-hide`,
            );
          }
          customNumberKeyboard.confirmDisabled = value === '';
          if (customNumberKeyboard.confirmKeyboardItem) {
            if (value === '') {
              addClass(
                customNumberKeyboard.confirmKeyboardItem,
                `${this.props.keyboardPrefixCls}-item-disabled`,
              );
            } else {
              removeClass(
                customNumberKeyboard.confirmKeyboardItem,
                `${this.props.keyboardPrefixCls}-item-disabled`,
              );
            }
          }
          // 页面向上推，保证输入框可见
          setTimeout(() => {
            this.fixedBody();
          }, 0);
        }
      },
    );
  }
  fixedBody = () => {
    // 保险起见，让用户主动开启。键盘的使用场景比较复杂。
    if (!this.props.autoAdjustHeight) {
      return;
    }
    const keyBoardWrappers = document.querySelectorAll(`.${this.props.keyboardPrefixCls}-wrapper`);
    const { focus } = this.state;
    // 取最后一个
    const keyBoardWrapper = keyBoardWrappers[keyBoardWrappers.length - 1];
    if (keyBoardWrapper) {
      if (focus) {
        // 当重复操作当前输入框时，键盘状态循环变化：show-hide-show-hide...
        // 当键盘处于hide态时，样式设置了transition-duration=0.2s。会导致样式获取不到最新的。因此延时300ms获取正常的值。
        setTimeout(() => {
          const wrapperOffset = keyBoardWrapper.getBoundingClientRect();
          if (this.inputRef) {
            const inputOffset = this.inputRef.getBoundingClientRect();
            // 输入框被键盘挡着
            if (inputOffset.top > wrapperOffset.top) {
              const bodyStyles = window.getComputedStyle(document.body);
              const paddingBottom = bodyStyles.paddingBottom && bodyStyles.paddingBottom.replace('px', '') || '0';

              const keyboardStyles = window.getComputedStyle(keyBoardWrapper);
              let keyboardHeight = keyboardStyles.height && keyboardStyles.height.replace('px', '') || '0';
              this.keyboardHeight = parseInt(keyboardHeight, 10) || 0;
              // // 重设paddingBottom让页面整体向上抬
              document.body.style.paddingBottom = (parseInt(paddingBottom, 10) + this.keyboardHeight) + 'px';
              // // 页面滚动
              document.body.scrollTop = document.body.scrollTop + this.keyboardHeight;
            }
          }
        }, 300);
      } else {
        // 键盘已经被隐藏，恢复
        if (this.keyboardHeight) {
          // 恢复padding
          const bodyStyles = window.getComputedStyle(document.body);
          const paddingBottom = bodyStyles.paddingBottom && bodyStyles.paddingBottom.replace('px', '') || '0';
          document.body.style.paddingBottom = (parseInt(paddingBottom, 10) - this.keyboardHeight) + 'px';
          // 恢复scrollTop
          document.body.scrollTop = document.body.scrollTop - this.keyboardHeight;
        }
        // 隐藏键盘不可见
        this.keyboardHeight = 0;
      }
    } else {
      // 键盘不存在，恢复
      if (this.keyboardHeight) {
        // 恢复padding
        const bodyStyles = window.getComputedStyle(document.body);
        const paddingBottom = bodyStyles.paddingBottom && bodyStyles.paddingBottom.replace('px', '') || '0';
        document.body.style.paddingBottom = (parseInt(paddingBottom, 10) - this.keyboardHeight) + 'px';
        // 恢复scrollTop
        document.body.scrollTop = document.body.scrollTop - this.keyboardHeight;
      }
    }
  }
  onKeyboardClick = (KeyboardItemValue: string) => {
    const { maxLength } = this.props;
    const { value } = this.state;
    // tslint:disable-next-line:no-this-assignment
    const { onChange } = this;

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
      this.onConfirm(value);
      // 收起键
    } else if (KeyboardItemValue === 'hide') {
      valueAfterChange = value;
      this.onInputBlur(valueAfterChange);
    } else {
      if (
        maxLength !== undefined &&
        +maxLength >= 0 &&
        (value + KeyboardItemValue).length > maxLength
      ) {
        valueAfterChange = (value + KeyboardItemValue).substr(0, maxLength);
        onChange({ target: { value: valueAfterChange } });
      } else {
        valueAfterChange = value + KeyboardItemValue;
        onChange({ target: { value: valueAfterChange } });
      }
    }
    if (customNumberKeyboard) {
      customNumberKeyboard.confirmDisabled = valueAfterChange === '';
      if (customNumberKeyboard.confirmKeyboardItem) {
        if (valueAfterChange === '') {
          addClass(
            customNumberKeyboard.confirmKeyboardItem,
            `${this.props.keyboardPrefixCls}-item-disabled`,
          );
        } else {
          removeClass(
            customNumberKeyboard.confirmKeyboardItem,
            `${this.props.keyboardPrefixCls}-item-disabled`,
          );
        }
      }
    }
  }

  onFakeInputClick = () => {
    this.focus();
  }

  focus = () => {
    // this focus may invocked by users page button click, so this click may trigger blurEventListener at the same time
    this.removeBlurListener();
    const { focus } = this.state;
    if (!focus) {
      this.onInputFocus();
    }
    setTimeout(() => {
      this.addBlurListener();
    }, 50);
  }

  renderPortal() {
    if (!IS_REACT_16 || !canUseDOM) {
      return null;
    }

    return (
      <Portal getContainer={() => this.getContainer()}>
        {this.getComponent()}
      </Portal>
    );
  }

  render() {
    const { placeholder, disabled, editable, moneyKeyboardAlign } = this.props;
    const { focus, value } = this.state;
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
        {value === '' && (
        // tslint:disable-next-line:jsx-no-multiline-js
          <div className="fake-input-placeholder">{placeholder}</div>
        )}
        <div
          role="textbox"
          aria-label={value || placeholder}
          className={fakeInputCls}
          ref={el => (this.inputRef = el)}
          onClick={preventKeyboard ? () => {} : this.onFakeInputClick}
        >
          {value}
        </div>
        {this.renderPortal()}
      </div>
    );
  }
}

export default NumberInput;
