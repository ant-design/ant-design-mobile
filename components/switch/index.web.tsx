import React from 'react';
import classNames from 'classnames';
import SwitchProps from './PropsType';

export default class Switch extends React.Component<SwitchProps, any> {
  static defaultProps = {
    prefixCls: 'am-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange() {},
    platform: 'cross',
    onClick() {},
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
    let { prefixCls, style, name, checked, disabled, className, platform } = this.props;
    const isAndroid = platform === 'android' ||
      (platform === 'cross' && typeof navigator !== 'undefined' && !!navigator.userAgent.match(/Android/i));
    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className as string]: className,
      [`${prefixCls}-android`]: isAndroid,
    });

    const fackInputCls = classNames({
      [`checkbox`]: true,
      [`checkbox-disabled`]: disabled,
    });

    return (<label className={wrapCls} style={style} role="switch">
        <input
          type="checkbox"
          name={name}
          className={`${prefixCls}-checkbox`}
          disabled={disabled}
          checked={checked}
          onChange={this.onChange}
          {...(!disabled ? { onClick: this.onClick } : {})}
        />
        <div
          className={fackInputCls}
          {...(disabled ? { onClick: this.onClick } : {})}
        />
      </label>);
  }
}
