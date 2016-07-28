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
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static defaultProps = {
    prefixCls: 'am-checkbox',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  static CheckboxItem: any;
  static AgreeItem: any;

  render() {
    let { prefixCls, style, name, checked, disabled, className, onChange } = this.props;

    return (<RcCheckbox
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
