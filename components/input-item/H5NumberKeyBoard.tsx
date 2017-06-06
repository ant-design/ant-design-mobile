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

class H5NumberKeyBoard extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-number-keyboard',
    onClick: () => {},
    confirmDisabled: false,
  };
  onKeyBoardClick = (e, value) => {
    e.stopPropagation();
    const { confirmDisabled } = this.props;
    if (value === 'confirm' && confirmDisabled) {
      return null;
    } else {
      this.props.onClick(value);
    }
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
            <KeyboardItem onClick={this.onKeyBoardClick}>1</KeyboardItem>
            <KeyboardItem onClick={this.onKeyBoardClick}>2</KeyboardItem>
            <KeyboardItem onClick={this.onKeyBoardClick}>3</KeyboardItem>
            <KeyboardItem className="keyboard-delete" rowSpan={2} onClick={this.onKeyBoardClick} />
          </tr>
          <tr>
            <KeyboardItem onClick={this.onKeyBoardClick}>4</KeyboardItem>
            <KeyboardItem onClick={this.onKeyBoardClick}>5</KeyboardItem>
            <KeyboardItem onClick={this.onKeyBoardClick}>6</KeyboardItem>
          </tr>
          <tr>
            <KeyboardItem onClick={this.onKeyBoardClick}>7</KeyboardItem>
            <KeyboardItem onClick={this.onKeyBoardClick}>8</KeyboardItem>
            <KeyboardItem onClick={this.onKeyBoardClick}>9</KeyboardItem>
            <KeyboardItem
              className="keyboard-confirm"
              disabled={confirmDisabled}
              rowSpan={2}
              onClick={this.onKeyBoardClick}
            >
              确定
            </KeyboardItem>
          </tr>
          <tr>
            <KeyboardItem onClick={this.onKeyBoardClick}>.</KeyboardItem>
            <KeyboardItem onClick={this.onKeyBoardClick}>0</KeyboardItem>
            <KeyboardItem className="keyboard-hide" onClick={this.onKeyBoardClick} />
          </tr>
        </tbody>
      </table>
    </div>);
  }
}

export default H5NumberKeyBoard;
