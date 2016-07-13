import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Radio from './Radio';
import List from '../list';
import splitObject from '../_util/splitObject';
function noop() {}

export interface RadioItemProps {
  prefixCls?: string,
  style?: React.CSSProperties,
  name?: string,
  checked?: boolean,
  disabled?: boolean,
  onChange?: Function,
  needActive?: boolean,
}

export default class RadioItem extends React.Component<RadioItemProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    needActive: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-radio',
    listPrefixCls: 'am-list',
    name: '',
    checked: false,
    disabled: false,
    needActive: true,
    onChange: noop,
  };

  render() {
    let [{prefixCls, listPrefixCls, style, name, checked, disabled, children, className, onChange, needActive, value}, restProps] = splitObject(this.props,
      ['prefixCls', 'listPrefixCls', 'style', 'name', 'checked', 'disabled',
        'children', 'className', 'onChange', 'needActive', 'value']);
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled === true,
      [className]: className
    });

    return (<List.Item
      prefixCls={listPrefixCls}
      needActive={disabled ? false : needActive}
      style={style}
      className={wrapCls}
      {...restProps}
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
