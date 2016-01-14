/* eslint no-console:0 */

import 'rmc-cascader/assets/index.css';
import 'rmc-cascader/assets/popup.css';
import React from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup';
import treeFilter from 'array-tree-filter';

const ListPicker = React.createClass({
  getSel() {
    const value = this.props.value || [];
    const treeChildren = treeFilter(this.props.data, (c, level)=> {
      return c.i === value[level];
    });
    return treeChildren.map((v)=> {
      return v.n;
    }).join(',');
  },
  render() {
    const extraProps = {
      extra: this.getSel() || '请选择',
    };
    const childEl = React.cloneElement(this.props.children, extraProps);
    return <PopupCascader
      style={{left:0, bottom:0}}
      dismissText="取消"
      okText="确定"
      {...this.props} >{childEl}</PopupCascader>;
  },
});
export default ListPicker;
