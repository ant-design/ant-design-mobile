/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import Checkbox from '../checkbox';
import List from '../list';
import Radio from '../radio';
import { DataItem } from './PropsType';

export interface PropsType {
  subMenuPrefixCls?: string;
  radioPrefixCls?: string;
  subMenuData: DataItem[];
  showSelect: boolean;
  onSel: (dataItem: DataItem) => void;
  selItem: DataItem[];
  multiSelect?: boolean;
}

export default function SubMenu(props: PropsType) {
  const onClick = (dataItem: DataItem) => {
    if (props.onSel) {
      props.onSel(dataItem);
    }
  };

  const {
    subMenuPrefixCls,
    radioPrefixCls,
    subMenuData,
    showSelect,
    selItem,
    multiSelect,
  } = props;
  const selected = (dataItem: DataItem) =>
    showSelect &&
    (selItem.length > 0 && selItem.indexOf(dataItem.value) !== -1);

  const ItemComponent = !multiSelect ? Radio : Checkbox;

  return (
    <List style={{ paddingTop: 0 }} className={subMenuPrefixCls}>
      {subMenuData.map((dataItem, idx) => (
        <List.Item
          className={classnames(`${radioPrefixCls}-item`, {
            [`${subMenuPrefixCls}-item-selected`]: selected(dataItem),
            [`${subMenuPrefixCls}-item-disabled`]: dataItem.disabled,
          })}
          key={idx}
          extra={
            <ItemComponent
              checked={selected(dataItem)}
              disabled={dataItem.disabled}
              onChange={() => onClick(dataItem)}
            />
          }
        >
          {dataItem.label}
        </List.Item>
      ))}
    </List>
  );
}
