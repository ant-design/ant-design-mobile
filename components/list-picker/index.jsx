/* eslint no-console:0 */
import './index.less';
import 'rmc-cascader/assets/index.css';
import 'rmc-cascader/assets/popup.css';
import 'rmc-modal/assets/index.css';
import 'rmc-picker/assets/index.css';
import React, { PropTypes } from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup';
import treeFilter from 'array-tree-filter';

const ListPicker = React.createClass({
  propTypes: {
    format: PropTypes.func,
  },

  getDefaultProps() {
    const defaultFormat = (values) => {
      return values.join(',');
    };
    return {
      format: defaultFormat,
      style: { left: 0, bottom: 0 },
      cols: 3,
      value: [],
      extra: '请选择',
      okText: '确定',
      dismissText: '取消',
    };
  },

  getSel() {
    const value = this.props.value || [];
    const treeChildren = treeFilter(this.props.data, (c, level) => {
      return c.i === value[level];
    });
    return this.props.format(treeChildren.map((v) => {
      return v.n;
    }));
  },
  render() {
    const { style, data, value, okText, dismissText, extra } = this.props;
    const extraProps = {
      extra: this.getSel() || extra,
    };
    const childEl = React.cloneElement(this.props.children, extraProps);
    console.log(this.props);
    return (<PopupCascader
      style={style}
      data={data}
      value={value}
      dismissText={dismissText}
      okText={okText}
      {...this.props} >{childEl}</PopupCascader>);
  },
});
export default ListPicker;
