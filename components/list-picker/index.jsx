/* eslint no-console:0 */

import 'rmc-cascader/assets/index.css';
import 'rmc-cascader/assets/popup.css';
import 'rmc-modal/assets/index.css';
import 'rmc-picker/assets/index.css';
import React, {PropTypes} from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup';
import treeFilter from 'array-tree-filter';

function defaultFormat(values) {
  return values.join(',');
}

const ListPicker = React.createClass({
  propTypes: {
    format: PropTypes.func,
  },

  getDefaultProps() {
    return {
      format: defaultFormat,
    };
  },

  getSel() {
    const value = this.props.value || [];
    const treeChildren = treeFilter(this.props.data, (c, level)=> {
      return c.i === value[level];
    });
    return this.props.format(treeChildren.map((v)=> {
      return v.n;
    }));
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
