import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ButtonProps } from './PropsType';
import Touchable from 'rc-touchable';

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

class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: 'am-button',
    size: 'large',
    inline: false,
    disabled: false,
    loading: false,
    activeStyle: {},
  };

  render() {
    const {
      children, className, prefixCls, type, size, inline,
      disabled, icon, loading, activeStyle, activeClassName, onClick,
      delayPressIn, delayPressOut, ...restProps,
    } = this.props;

    const wrapCls = {
      [className as string]: className,
      [prefixCls as string]: true,
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-ghost`]: type === 'ghost',
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
    };

    const iconType = loading ? 'loading' : icon;
    const kids = React.Children.map(children, insertSpace);

    if (iconType) {
      wrapCls[`${prefixCls}-icon`] = true;
    }

    const delayProps: any = {};
    if (delayPressIn) {
      delayProps.delayPressIn = delayPressIn;
    }
    if (delayPressOut) {
      delayProps.delayPressOut = delayPressOut;
    }
    // use div, button native is buggy @yiminghe
    return (
      <Touchable
        activeClassName={activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)}
        disabled={disabled}
        activeStyle={activeStyle}
        {...delayProps}
      >
        <a
          role="button"
          className={classNames(wrapCls)}
          {...restProps}
          onClick={disabled ? undefined : onClick}
          aria-disabled={disabled}
        >
          {iconType ? <Icon aria-hidden="true" type={iconType} size={size === 'small' ? 'xxs' : 'md'}/> : null}
          {kids}
        </a>
      </Touchable>
    );
  }
}

export default Button;
