import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Radio from './Radio';
import List from '../list';

function noop() {}

export default class RadioItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-radio',
    listPrefixCls: 'am-list',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  render() {
    const { prefixCls, listPrefixCls, style, name, checked, disabled, children, className, onChange, value, ...others } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [className]: className
    });

    return (<List.Item
      prefixCls={listPrefixCls}
      {...others}
      style={style}
      className={wrapCls}
      extra={<Radio
        value={value}
        checked={checked}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />}
    >{children}</List.Item>);
  }
}
