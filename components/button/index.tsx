import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { ButtonProps } from './PropsType';
import TouchFeedback from 'rmc-feedback';

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
      const cls = classNames('am-icon', {
        [`${prefixCls}-icon`]: true,
        [size === 'small' ? 'am-icon-xxs' : 'am-icon-md']: true,
      });
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
          className={classNames(wrapCls)}
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
