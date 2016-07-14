import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import SwitchProps from './switchPropsType';

export default class Switch extends React.Component<SwitchProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange() {},
  };

  onChange = (e) => {
    const checked = e.target.checked;
    this.props.onChange(checked);
  };

  render() {
    let { prefixCls, style, name, checked, disabled, className } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className
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
