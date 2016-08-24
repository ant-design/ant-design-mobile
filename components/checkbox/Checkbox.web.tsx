import * as React from 'react';
import RcCheckbox from 'rc-checkbox';
import CheckboxPropsType from './CheckboxPropsType';
import PropTypes = React.PropTypes;

export default class Checkbox extends React.Component<CheckboxPropsType, any> {

  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-checkbox',
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
