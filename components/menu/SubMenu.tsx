/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import List from '../list';
import Radio from '../radio/Radio';

export default function SubMenu(props) {
  const onClick = (dataItem) => {
    if (props.onSel) {
      props.onSel(dataItem);
    }
  };

  const { subMenuPrefixCls, radioPrefixCls, subMenuData, showSelect, selItem } = props;
  const selected = dataItem => (showSelect && (selItem.length > 0 && selItem[0].value === dataItem.value));

  return(
    <List style={{ paddingTop: 0 }} className={subMenuPrefixCls}>
      {subMenuData.map((dataItem, idx) => (
        <List.Item
          className={classNames({
            [`${radioPrefixCls}-item`]: true,
            [`${subMenuPrefixCls}-item-selected`]: selected(dataItem),
            [`${subMenuPrefixCls}-item-disabled`]: dataItem.disabled,
          })}
          key={idx}
          extra={<Radio
            checked={selected(dataItem)}
            disabled={dataItem.disabled}
            onChange={() => onClick(dataItem)}
          />}
        >
          {dataItem.label}
        </List.Item>
      ))}
    </List>
  );
}
