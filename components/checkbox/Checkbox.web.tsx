import React from 'react';
import RcCheckbox from 'rc-checkbox';
import { CheckboxProps } from './PropsType';

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static CheckboxItem: any;
  static AgreeItem: any;
  static defaultProps = {
    prefixCls: 'am-checkbox',
  };

  render() {
    return (<RcCheckbox {...this.props} />);
  }
}
