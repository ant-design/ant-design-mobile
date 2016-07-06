import { PropTypes } from 'react';
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
function noop() {}
import splitObject from '../_util/splitObject';
import ButtonProps from './ButtonPropsType';

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}

// Insert one space between two chinese characters automatically.
function insertSpace(child) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {},
                              child.props.children.split('').join(' '));
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ');
    }
    return <span>{child}</span>;
  }
  return child;
}

export default class Button extends React.Component<ButtonProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    ghost: PropTypes.bool,
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    icon: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-button',
    size: 'large',
    ghost: false,
    inline: false,
    disabled: false,
    loading: false,
    onClick: noop,
  };

  onClick = () => {
    this.props.onClick(this);
  }

  render() {
    let[{ children, className, prefixCls, type, size, ghost, inline, disabled,
      htmlType, icon, loading }, restProps] = splitObject(this.props,
    ['children','className','prefixCls','type','size','ghost','inline',
      'disabled','htmlType','icon','loading']);

    const wrapCls = classNames({
      [className]: className,
      [prefixCls]: true,
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-ghost`]: ghost,
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
    });

    const iconType = loading ? 'loading' : icon;

    const kids = React.Children.map(children, insertSpace);

    return (<button {...restProps}
      type={htmlType || 'button'}
      className={wrapCls}
      disabled={disabled}
      onClick={this.onClick}
      >{iconType ? <Icon type={iconType} /> : null}{kids}</button>);
  }
}
