import React from 'react';
import classNames from 'classnames';
import Touchable from 'rc-touchable';

export class KeyboardItem extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-number-keyboard',
    onClick: () => {},
    disabled: false,
  };

  render () {
    const { prefixCls, onClick, className, disabled, children, ...restProps } = this.props;
    let value = children;
    if (className === 'keyboard-delete') {
      value = 'delete';
    } else if (className === 'keyboard-hide') {
      value = 'hide';
    } else if (className === 'keyboard-confirm') {
      value = 'confirm';
    }
    const wrapCls = {
      [className as string]: className,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled,
    };
    return (<Touchable activeClassName={`${prefixCls}-item-active`}>
      <td onClick={(e) => { onClick(e, value); }} className={classNames(wrapCls)} {...restProps}>{children}</td>
    </Touchable>);
  }
}

class CustomKeyboard extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-number-keyboard',
    onClick: () => {},
    confirmDisabled: false,
  };
  onKeyboardClick = (e, value) => {
    e.nativeEvent.stopImmediatePropagation();
    const { confirmDisabled } = this.props;
    if (value === 'confirm' && confirmDisabled) {
      return null;
    } else {
      this.props.onClick(value);
    }
  }

  renderKetboardItem = (item, index) => {
    return (<KeyboardItem onClick={this.onKeyboardClick} key={`item-${item}-${index}`}>{item}</KeyboardItem>);
  }
  render() {
    const { prefixCls, confirmDisabled, hide } = this.props;
    const wrapperCls = classNames({
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper-hide`]: hide,
    });
    return (<div className={wrapperCls}>
      <table>
        <tbody>
          <tr>
            {['1', '2', '3'].map((item, index) => { return this.renderKetboardItem(item, index); })}
            <KeyboardItem className="keyboard-delete" rowSpan={2} onClick={this.onKeyboardClick} />
          </tr>
          <tr>
            {['4', '5', '6'].map((item, index) => { return this.renderKetboardItem(item, index); })}
          </tr>
          <tr>
            {['7', '8', '9'].map((item, index) => { return this.renderKetboardItem(item, index); })}
            <KeyboardItem
              className="keyboard-confirm"
              disabled={confirmDisabled}
              rowSpan={2}
              onClick={this.onKeyboardClick}
            >
              确定
            </KeyboardItem>
          </tr>
          <tr>
            {['.', '0'].map((item, index) => { return this.renderKetboardItem(item, index); })}
            <KeyboardItem className="keyboard-hide" onClick={this.onKeyboardClick} />
          </tr>
        </tbody>
      </table>
    </div>);
  }
}

export default CustomKeyboard;
