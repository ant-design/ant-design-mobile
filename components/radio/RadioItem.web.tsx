import React from 'react';
import classNames from 'classnames';
import Radio from './Radio.web';
import List from '../list';
import getDataAttr from '../_util/getDataAttr';
import { RadioItemProps } from './PropsType';

const ListItem = List.Item;

export default class RadioItem extends React.Component<RadioItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-radio',
    listPrefixCls: 'am-list',
  };

  render() {
    const {
      prefixCls, listPrefixCls, style, children, className, disabled,
    } = this.props;

    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled === true,
      [className as string]: className,
    });

    const onClickProps = disabled ? {} : { onClick: () => {} };

    const radioProps: any = {};
    ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(i => {
      if (i in this.props) {
        radioProps[i] = this.props[i];
      }
    });

    return (<ListItem {...getDataAttr(this.props)}
      prefixCls={listPrefixCls}
      style={style}
      className={wrapCls}
      {...onClickProps}
      extra={<Radio {...radioProps} />}
    >{children}</ListItem>);
  }
}
