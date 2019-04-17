import classnames from 'classnames';
import * as React from 'react';
import List from '../list';
import Checkbox, { CheckboxProps } from './Checkbox';
import { CheckboxItemPropsType } from './PropsType';

export interface CheckboxItemProps extends CheckboxItemPropsType {
  listPrefixCls?: string;
  prefixCls?: string;
  className?: string;
  name?: string;
  wrapLabel?: boolean;
  checkboxProps?: CheckboxProps;
}

const ListItem = List.Item;
// tslint:disable-next-line:no-empty
function noop() {}

export default class CheckboxItem extends React.Component<
  CheckboxItemProps,
  any
> {
  static defaultProps = {
    prefixCls: 'am-checkbox',
    listPrefixCls: 'am-list',
    checkboxProps: {},
  };

  render() {
    const {
      listPrefixCls,
      onChange,
      disabled,
      checkboxProps,
      onClick,
      ...restProps
    } = this.props;
    const { prefixCls, className, children } = restProps;
    const wrapCls = classnames(`${prefixCls}-item`, className, {
      [`${prefixCls}-item-disabled`]: disabled === true,
    });

    // Note: if not omit `onChange`, it will trigger twice on check listitem
    if (!disabled) {
      (restProps as any).onClick = onClick || noop;
    }

    const extraProps: any = {};
    ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(i => {
      if (i in this.props) {
        extraProps[i] = (this.props as any)[i];
      }
    });

    return (
      <ListItem
        {...restProps}
        prefixCls={listPrefixCls}
        className={wrapCls}
        thumb={<Checkbox {...checkboxProps} {...extraProps} />}
      >
        {children}
      </ListItem>
    );
  }
}
