/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import List from '../list/index.web';
import Radio from '../radio/Radio.web';
import Checkbox from '../checkbox/index.web';

export default function SubMenu(props) {
  const onClick = (dataItem) => {
    if (props.onSel) {
      props.onSel(dataItem);
    }
  };

  const { subMenuPrefixCls, radioPrefixCls, subMenuData, showSelect, selItem, multSelect } = props;
  const selected = dataItem => (showSelect && (selItem.length > 0 && selItem.indexOf(dataItem.value) !== -1));

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
          extra={!multSelect ? (<Radio
            checked={selected(dataItem)}
            disabled={dataItem.disabled}
            onChange={() => onClick(dataItem)}
          />)
          :
          (<Checkbox
            checked={selected(dataItem)}
            disabled={dataItem.disabled}
            onChange={() => onClick(dataItem)}
          />)
          }
        >
          {dataItem.label}
        </List.Item>
      ))}
    </List>
  );
}
