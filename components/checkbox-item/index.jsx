import React, { PropTypes } from 'react';
import classNames from 'classnames';
import List from '../list';
import Checkbox from 'rc-checkbox';
function noop() {}

export default class CheckboxItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    prefixListCls: PropTypes.string,
    mode: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-checkbox',
    prefixListCls: 'am-list',
    style: {},
    mode: 'normal',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  render() {
    const { style, prefixCls, prefixListCls, mode, name, checked, disabled, extra, children, className } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-agree`]: mode === 'agree',
      [className]: className
    });

    let listPropObj = {
      ...this.props,
      prefixCls: prefixListCls,
      className: wrapCls,
      extra,
      thumb: <Checkbox
        prefixCls={prefixCls}
        defaultChecked={checked}
        name={name}
        onChange={this.props.onChange}
        disabled={disabled}
      />
    };

    return mode === 'agree' ? (
      <div className={wrapCls} style={style}>
        {<Checkbox
          prefixCls={prefixCls}
          defaultChecked={checked}
          name={name}
          onChange={this.props.onChange}
          disabled={disabled}
        />}
        <label className={`${prefixCls}-agree-label`} htmlFor={name}>{children}</label>
      </div>) : (<List.Item {...listPropObj}>{children}</List.Item>);
  }
}
