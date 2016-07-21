import * as React from 'react';
import { PropTypes } from 'react';
import RcCheckbox from 'rc-checkbox';
import splitObject from '../_util/splitObject';
function noop() {}

export interface CheckboxProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

export default class Checkbox extends React.Component<CheckboxProps, any> {
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
    let[{ prefixCls, style, name, checked, disabled, className, onChange }, restProps] = splitObject(this.props,
      ['prefixCls', 'style', 'name', 'checked', 'disabled', 'className', 'onChange']);

    return (<RcCheckbox
      {...restProps}
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
