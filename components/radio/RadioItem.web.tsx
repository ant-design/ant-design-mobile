import * as React from 'react';
import classNames from 'classnames';
import Radio from './Radio.web';
import List from '../list';

const ListItem = List.Item;

import RadioItemProps from './RadioPropsType';

export default class RadioItem extends React.Component<RadioItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-radio',
    listPrefixCls: 'am-list',
    name: '',
    checked: false,
    disabled: false,
    onChange: () => {},
  };

  render() {
    let {
      prefixCls, listPrefixCls, style, name, checked, disabled, children, className, onChange, value,
    } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled === true,
      [className]: className,
    });

    return (<ListItem
      prefixCls={listPrefixCls}
      style={style}
      className={wrapCls}
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
