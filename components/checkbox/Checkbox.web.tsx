import React from 'react';
import RcCheckbox from 'rc-checkbox';
import { CheckboxProps } from './PropsType';

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static defaultProps = {
    prefixCls: 'am-checkbox',
  };

  static CheckboxItem: any;
  static AgreeItem: any;

  render() {
    let { prefixCls, style, name, defaultChecked, checked, disabled, className, onChange } = this.props;

    return (
      <RcCheckbox
        prefixCls={prefixCls}
        className={className}
        style={style}
        checked={checked}
        defaultChecked={defaultChecked}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />
    );
  }
}
