import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

export default class SwitchItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    prefixListCls: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['pure', 'normal']),
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-switch',
    prefixListCls: 'am-list',
    style: {},
    type: 'normal',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  onChange = (e) => {
    const checked = e.target.checked;
    this.props.onChange(checked);
  };

  render() {
    let { prefixCls, prefixListCls, style, type, name, checked, disabled, children, className } = this.props;
    const wrapCls = classNames({
      [`${prefixListCls}-item`]: type === 'normal',
      [`${prefixCls}-item`]: type === 'normal',
      [`${prefixCls}`]: type === 'pure',
      [className]: className
    });

    return type === 'normal' ? (
      <div className={wrapCls} style={style}>
        <div className={`${prefixListCls}-content`}>{children}</div>
        <label className={`${prefixCls}`}>
          <input type="checkbox" name={name} className={`${prefixCls}-checkbox`} {...(disabled ? { disabled: 'disabled' } : '') } checked={checked} onChange={this.onChange} />
          <div className="checkbox"></div>
        </label>
      </div>
    ) : (
      <label className={wrapCls} style={style}>
        <input type="checkbox" name={name} className={`${prefixCls}-checkbox`} {...(disabled ? { disabled: 'disabled' } : '') } checked={checked} onChange={this.onChange} />
        <div className="checkbox"></div>
      </label>
    );
  }
}
