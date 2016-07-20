import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import Radio from './Radio';
import List from '../list';
import splitObject from '../_util/splitObject';
function noop() {}

const ListItem = List.Item;

export interface RadioItemProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

export default class RadioItem extends React.Component<RadioItemProps, any> {
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
    let [{
      prefixCls, listPrefixCls, style, name, checked, disabled, children, className, onChange, value,
    }, restProps] = splitObject(this.props,
      ['prefixCls', 'listPrefixCls', 'style', 'name', 'checked', 'disabled',
        'children', 'className', 'onChange', 'value']);
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled === true,
      [className]: className,
    });

    return (<ListItem
      prefixCls={listPrefixCls}
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
    >{children}</ListItem>);
  }
}
