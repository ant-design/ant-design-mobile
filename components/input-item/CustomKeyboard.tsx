import classnames from 'classnames';
import React from 'react';
import TouchFeedback from 'rmc-feedback';
import { Omit } from '../_util/types';
import { IS_IOS } from '../_util/exenv';

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

    const wrapCls = classnames(`${prefixCls}-item`, className);
    return (
      <TouchFeedback activeClassName={`${prefixCls}-item-active`}>
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
    if (value === 'confirm' && this.confirmDisabled) {
      return null;
    } else {
      if (this.linkedInput) {
        this.linkedInput.onKeyboardClick(value);
      }
    }
  }

  renderKeyboardItem = (item: string, index: number) => {
    return (
      <KeyboardItem
        onClick={this.onKeyboardClick}
        key={`item-${item}-${index}`}
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
