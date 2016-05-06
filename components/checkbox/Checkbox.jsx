import React, { PropTypes } from 'react';
import RcCheckbox from 'rc-checkbox';
function noop() {}

export default class Checkbox extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-checkbox',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  render() {
    const { prefixCls, style, name, checked, disabled, className, onChange, ...others } = this.props;

    return (<RcCheckbox
      {...others}
      prefixCls={prefixCls}
      className={className}
      style={style}
      defaultChecked={checked}
      name={name}
      onChange={onChange}
      disabled={disabled}
    />);
  }
}
