/* eslint no-console:0 */
import React, { PropTypes } from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup';
import treeFilter from 'array-tree-filter';

function getDefaultProps() {
  const defaultFormat = (values) => {
    return values.join(',');
  };
  return {
    prefixCls: 'am-list-picker',
    pickerPrefixCls: 'am-list-picker-picker',
    popupPrefixCls: 'am-list-picker-popup',
    format: defaultFormat,
    style: { left: 0, bottom: 0 },
    cols: 3,
    value: [],
    extra: '请选择',
    okText: '确定',
    dismissText: '取消',
    title: '',
  };
}

export default class ListPicker extends React.Component {
  static propTypes = {
    format: PropTypes.func,
  }

  static defaultProps = getDefaultProps()

  getSel = () => {
    const value = this.props.value || [];
    const treeChildren = treeFilter(this.props.data, (c, level) => {
      return c.i === value[level];
    });
    return this.props.format(treeChildren.map((v) => {
      return v.n;
    }));
  }
  render() {
    const { style, data, value, okText, dismissText, title, extra } = this.props;
    const extraProps = {
      extra: this.getSel() || extra,
    };
    const childEl = React.cloneElement(this.props.children, extraProps);
    return (<PopupCascader
      style={style}
      data={data}
      value={value}
      dismissText={dismissText}
      title={title}
      okText={okText}
      {...this.props} >{childEl}</PopupCascader>);
  }
}
