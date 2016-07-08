import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox';
import List from '../list';
import splitObject from '../_util/splitObject';
function noop() {}

export default class CheckboxItem extends React.Component {
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
    listPrefixCls: 'am-list',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  render() {
    let[{ prefixCls, listPrefixCls, style, name, checked, disabled, children, className, onChange, needActive }, restProps] = splitObject(this.props,
      ['prefixCls', 'listPrefixCls', 'style', 'name', 'checked', 'disabled', 'children', 'className', 'onChange', 'needActive']);
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
      thumb={<Checkbox
        prefixCls={prefixCls}
        checked={checked}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />}
    >{children}</List.Item>);
  }
}
