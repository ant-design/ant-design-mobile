import React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import { ButtonProps as BasePropsType } from './PropsType';
import TouchFeedback from 'rmc-feedback';

export interface ButtonProps extends BasePropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
  inline?: boolean;
  icon?: string;
  activeClassName?: string;
}

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

    const iconType = loading ? 'loading' : icon;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-ghost`]: type === 'ghost',
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-icon`]: !!iconType,
    });

    const kids = React.Children.map(children, insertSpace);

    let iconEl;
    if (typeof iconType === 'string') {
      iconEl =
        <Icon
          aria-hidden="true"
          type={iconType}
          size={size === 'small' ? 'xxs' : 'md'}
          className={`${prefixCls}-icon`}
        />;
    } else if (iconType) {
      const cls = classnames('am-icon', `${prefixCls}-icon`, size === 'small' ? 'am-icon-xxs' : 'am-icon-md');
      iconEl = React.cloneElement(iconType, {
        className: cls,
      });
    }
    // use div, button native is buggy @yiminghe
    return (
      <TouchFeedback
        activeClassName={activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)}
        disabled={disabled}
        activeStyle={activeStyle}
      >
        <a
          role="button"
          className={wrapCls}
          {...restProps}
          onClick={disabled ? undefined : onClick}
          aria-disabled={disabled}
        >
          {iconEl}
          {kids}
        </a>
      </TouchFeedback>
    );
  }
}

export default Button;
