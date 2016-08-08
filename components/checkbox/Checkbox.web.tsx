import * as React from 'react';
import RcCheckbox from 'rc-checkbox';
function noop() {}

export interface CheckboxProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  name?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static defaultProps = {
    prefixCls: 'am-checkbox',
    name: '',
    defaultChecked: false,
    checked: false,
    disabled: false,
    onChange: noop,
  };

  static CheckboxItem: any;
  static AgreeItem: any;

  render() {
    let { prefixCls, style, name, defaultChecked, checked, disabled, className, onChange } = this.props;

    return (<RcCheckbox
      prefixCls={prefixCls}
      className={className}
      style={style}
      checked={checked}
      defaultChecked={defaultChecked}
      name={name}
      onChange={onChange}
      disabled={disabled}
    />);
  }
}
