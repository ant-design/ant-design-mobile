import React from 'react';
import classNames from 'classnames';
import List from '../list/index';
import Radio from '../radio/Radio.web';

export default class SubMenu extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      selItem: props.selItem,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.subMenuData !== this.props.subMenuData) {
      this.setState({
        selItem: nextProps.selItem,
      });
    }
  }
  onClick = (dataItem) => {
    this.setState({
      selItem: [dataItem],
    });
    if (this.props.onSel) {
      this.props.onSel(dataItem);
    }
  };
  render() {
    const { subMenuPrefixCls, radioPrefixCls, subMenuData } = this.props;
    const { selItem } = this.state;

    const selected = dataItem => selItem.length > 0 && selItem[0].value === dataItem.value;

    return (
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
              onChange={() => this.onClick(dataItem)}
            />}
          >{dataItem.label}</List.Item>
        ))}
      </List>
    );
  }
}
