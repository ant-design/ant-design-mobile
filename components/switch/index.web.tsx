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

  onClick = (value) => {
  if (this.props.onClick) {
      this.props.onClick(value);
    }
  }

  render() {
    let { prefixCls, style, name, checked, disabled, className, platform } = this.props;
    const isAndroid = platform === 'android' || (platform === 'cross' && !!navigator.userAgent.match(/Android/i));
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
          {...(disabled ? { disabled: 'disabled' } : {})}
          checked={checked}
          onChange={this.onChange}
        />
        <div
          className={fackInputCls}
          onClick={this.onChange}
        />
      </label>);
  }
}
