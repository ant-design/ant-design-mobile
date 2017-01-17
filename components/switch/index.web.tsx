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
  };

  onChange = (e) => {
    const checked = e.target.checked;
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  };

  render() {
    let { prefixCls, style, name, checked, disabled, className } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className as string]: className,
      [`${prefixCls}-android`]: !!navigator.userAgent.match(/Android/i),
    });

    return (<label className={wrapCls} style={style}>
        <input
          type="checkbox"
          name={name}
          className={`${prefixCls}-checkbox`}
          {...(disabled ? { disabled: 'disabled' } : '') }
          checked={checked}
          onChange={this.onChange}
        />
        <div className="checkbox"></div>
      </label>);
  }
}
