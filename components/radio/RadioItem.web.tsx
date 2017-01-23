import React from 'react';
import classNames from 'classnames';
import List from '../list/index.web';
import Radio from './Radio.web';
import { RadioItemProps } from './PropsType';
import omit from 'omit.js';

const ListItem = List.Item;
function noop() { }

export default class RadioItem extends React.Component<RadioItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-radio',
    listPrefixCls: 'am-list',
  };

  render() {
    const {
      prefixCls, listPrefixCls, className, children, disabled, radioProps = {},
    } = this.props;

    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled === true,
      [className as string]: className,
    });

    // Note: if not omit `onChange`, it will trigger twice on check listitem
    const otherProps = omit(this.props, ['listPrefixCls', 'onChange', 'disabled', 'radioProps']);
    if (disabled) {
      delete otherProps.onClick;
    } else {
      otherProps.onClick = otherProps.onClick || noop;
    }

    const extraProps: any = {};
    ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(i => {
      if (i in this.props) {
        extraProps[i] = this.props[i];
      }
    });

    return (
      <ListItem
        {...otherProps}
        prefixCls={listPrefixCls}
        className={wrapCls}
        extra={<Radio {...radioProps} {...extraProps} />}
      >
        {children}
      </ListItem>
    );
  }
}
