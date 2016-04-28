import React, { PropTypes } from 'react';
import classNames from 'classnames';
import RcCheckbox from 'rc-checkbox';
function noop() {}

export default class Checkbox extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['normal', 'agree']),
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-checkbox',
    style: {},
    type: 'normal',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  render() {
    const { prefixCls, style, type, name, checked, disabled, children, className } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}`]: type === 'normal',
      [`${prefixCls}-item`]: type === 'agree',
      [`${prefixCls}-agree`]: type === 'agree',
      [className]: className
    });

    return type === 'agree' ? (
      <div className={wrapCls} style={style}>
        {<RcCheckbox
          prefixCls={prefixCls}
          defaultChecked={checked}
          name={name}
          onChange={this.props.onChange}
          disabled={disabled}
        />}
        <label className={`${prefixCls}-agree-label`} htmlFor={name}>{children}</label>
      </div>) : (<RcCheckbox
        prefixCls={prefixCls}
        style={style}
        defaultChecked={checked}
        name={name}
        onChange={this.props.onChange}
        disabled={disabled}
      />);
  }
}
