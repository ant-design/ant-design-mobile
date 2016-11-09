import React from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox.web';
import List from '../list/index.web';
import { CheckboxItemProps } from './PropsType';
import getDataAttr from '../_util/getDataAttr';

const ListItem = List.Item;

export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {

  static defaultProps = {
    prefixCls: 'am-checkbox',
    listPrefixCls: 'am-list',
  };

  render() {
    let {
      prefixCls, listPrefixCls, style, className, name, defaultChecked, checked, disabled, children, extra, onChange,
    } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled === true,
      [className as string]: className,
    });

    const onClickProps = disabled ? {} : { onClick: () => {} };

    return (<ListItem {...getDataAttr(this.props)}
      prefixCls={listPrefixCls}
      style={style}
      className={wrapCls}
      extra={extra}
      {...onClickProps}
      thumb={<Checkbox
        prefixCls={prefixCls}
        defaultChecked={defaultChecked}
        checked={checked}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />}
    >{children}</ListItem>);
  }
}
