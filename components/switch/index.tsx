import React from 'react';
import classnames from 'classnames';
import BasePropsType from './PropsType';

export interface SwitchProps extends BasePropsType {
  prefixCls?: string;
  className?: string;
}

export default class Switch extends React.Component<SwitchProps, any> {
  static defaultProps = {
    prefixCls: 'am-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange() { },
    platform: 'ios',
    onClick() { },
  };

  onChange = (e) => {
    const checked = e.target.checked;
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  }

  onClick = (e) => {
    if (this.props.onClick) {
      let val;
      if (e && e.target && e.target.checked !== undefined) {
        val = e.target.checked;
      } else {
        val = this.props.checked;
      }
      this.props.onClick(val);
    }
  }

  render() {
    let { prefixCls, name, checked, disabled, className, platform, color, ...restProps } = this.props;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-android`]: platform === 'android',
    });

    const fackInputCls = classnames('checkbox', {
      [`checkbox-disabled`]: disabled,
    });

    const globalProps = Object.keys(restProps).reduce((prev, key) => {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = restProps[key];
      }
      return prev;
    }, {});

    const style: any = this.props.style || {};
    if (color && checked) {
      style.backgroundColor = color;
    }

    return (<label className={wrapCls}>
      <input
        type="checkbox"
        name={name}
        className={`${prefixCls}-checkbox`}
        disabled={disabled}
        checked={checked}
        onChange={this.onChange}
        value={checked ? 'on' : 'off'}
        {...(!disabled ? { onClick: this.onClick } : {})}
        {...globalProps}
      />
      <div
        className={fackInputCls}
        style={style}
        {...(disabled ? { onClick: this.onClick } : {})}
      />
    </label>);
  }
}
