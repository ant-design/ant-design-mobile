import React from 'react';
import classNames from 'classnames';
import Radio from './Radio.web';
import List from '../list';

const ListItem = List.Item;

import RadioItemProps from './RadioItemPropsType';

export default class RadioItem extends React.Component<RadioItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-radio',
    listPrefixCls: 'am-list',
  };

  render() {
    let {
      prefixCls, listPrefixCls, style, name, defaultChecked, checked, disabled, children, className, onChange,
    } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled === true,
      [className]: className,
    });

    const onClickProps = disabled ? {} : { onClick: () => {} };

    return (<ListItem
      prefixCls={listPrefixCls}
      style={style}
      className={wrapCls}
      {...onClickProps}
      extra={<Radio
        defaultChecked={defaultChecked}
        checked={checked}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />}
    >{children}</ListItem>);
  }
}
