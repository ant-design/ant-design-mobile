import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import { Omit } from '../_util/types';
import { IS_IOS } from '../_util/exenv';
/**
 * determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * @param {array} arr The array to search in
 * @param {any} item  The value to search for
 */
function includes(arr: Array<any>, item: any) {
  if (!arr || !arr.length || !item) {
    return false;
  }
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}
export type HTMLTableDataProps = Omit<
  React.HTMLProps<HTMLTableDataCellElement>,
  'onClick'
>;

export interface KeyboardItemProps extends HTMLTableDataProps {
  prefixCls?: string;
  tdRef?: React.Ref<HTMLTableDataCellElement>;
  iconOnly?: boolean;
  onClick: (
    event: React.MouseEvent<HTMLTableDataCellElement>,
    value: string,
  ) => void;
}
export class KeyboardItem extends React.Component<KeyboardItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-number-keyboard',
    onClick: () => {},
    disabled: false,
  };

  render() {
    const {
      prefixCls,
      onClick,
      className,
      disabled,
      children,
      tdRef,
      label,
      iconOnly,
      ...restProps
    } = this.props;
    let value = children;
    if (className === 'keyboard-delete') {
      value = 'delete';
    } else if (className === 'keyboard-hide') {
      value = 'hide';
    } else if (className === 'keyboard-confirm') {
      value = 'confirm';
    }
    const extraCls = {
      [`${prefixCls}-item-disabled`]: disabled,
    };
    const wrapCls = classnames(`${prefixCls}-item`, className, extraCls);
    return (
      <TouchFeedback disabled={disabled} activeClassName={`${prefixCls}-item-active`}>
        <td
          ref={tdRef}
          // tslint:disable-next-line:jsx-no-multiline-js
          onClick={e => {
            onClick(e, value as string);
          }}
          className={wrapCls}
          {...restProps}
        >
          {children}
          {iconOnly && <i className="sr-only">{label}</i>}
        </td>
      </TouchFeedback>
    );
  }
}

class CustomKeyboard extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-number-keyboard',
    disabledKeys: null,
  };

  linkedInput: any;
  antmKeyboard: HTMLDivElement | null;
  confirmDisabled: boolean;
  confirmKeyboardItem: HTMLTableDataCellElement | null;

  onKeyboardClick = (
    e: React.MouseEvent<HTMLTableDataCellElement>,
    value: string = '',
  ) => {
    e.nativeEvent.stopImmediatePropagation();
    if (this.props.disabledKeys && includes(this.props.disabledKeys, value)) {
      return null;
    }
    if (value === 'confirm' && this.confirmDisabled) {
      return null;
    } else {
      if (this.linkedInput) {
        this.linkedInput.onKeyboardClick(value);
      }
    }
  }

  renderKeyboardItem = (item: string, index: number) => {
    let disabled = false;
    if (this.props.disabledKeys && includes(this.props.disabledKeys, item)) {
      disabled = true;
    }
    return (
      <KeyboardItem
        onClick={this.onKeyboardClick}
        key={`item-${item}-${index}`}
        disabled={disabled}
      >
        {item}
      </KeyboardItem>
    );
  }

  render() {
    const {
      prefixCls,
      confirmLabel,
      backspaceLabel,
      cancelKeyboardLabel,
      wrapProps,
      header,
    } = this.props;

    const wrapperCls = classnames(
      `${prefixCls}-wrapper`,
      `${prefixCls}-wrapper-hide`,
    );

    return (
      <div className={wrapperCls} ref={el => (this.antmKeyboard = el)} {...wrapProps}>
        { header && React.cloneElement(header, { onClick: this.onKeyboardClick }) }
        <table>
          <tbody>
            <tr>
              {['1', '2', '3'].map((item, index) =>
              // tslint:disable-next-line:jsx-no-multiline-js
                this.renderKeyboardItem(item, index),
              )}
              <KeyboardItem
                className="keyboard-delete"
                rowSpan={2}
                onClick={this.onKeyboardClick}
                {...this.getAriaAttr(backspaceLabel)}
              />
            </tr>
            <tr>
              {['4', '5', '6'].map((item, index) =>
              // tslint:disable-next-line:jsx-no-multiline-js
                this.renderKeyboardItem(item, index),
              )}
            </tr>
            <tr>
              {['7', '8', '9'].map((item, index) =>
              // tslint:disable-next-line:jsx-no-multiline-js
                this.renderKeyboardItem(item, index),
              )}
              <KeyboardItem
                className="keyboard-confirm"
                rowSpan={2}
                onClick={this.onKeyboardClick}
                tdRef={el => (this.confirmKeyboardItem = el)}
              >
                {confirmLabel}
              </KeyboardItem>
            </tr>
            <tr>
              {['.', '0'].map((item, index) =>
              // tslint:disable-next-line:jsx-no-multiline-js
                this.renderKeyboardItem(item, index),
              )}
              <KeyboardItem
                className="keyboard-hide"
                onClick={this.onKeyboardClick}
                {...this.getAriaAttr(cancelKeyboardLabel)}
              />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  getAriaAttr(label: string) {
    if (IS_IOS) {
      return { label, iconOnly: true };
    } else {
      return { role: 'button', 'aria-label': label };
    }
  }
}

export default CustomKeyboard;
