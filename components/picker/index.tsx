import React from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup';
import treeFilter from 'array-tree-filter';
import tsPropsType from './PropsType';
import PopupStyles from './style/index';
import Cascader from 'rmc-cascader/lib/Cascader';

function getDefaultProps() {
  const defaultFormat = (values) => {
    return values.join(',');
  };
  return {
    format: defaultFormat,
    cols: 3,
    value: [],
    extra: '请选择',
    okText: '确定',
    dismissText: '取消',
    title: '',
    styles: {},
  };
}

export default class Picker extends React.Component<tsPropsType, any> {
  static defaultProps = getDefaultProps();

  getSel = () => {
    const value = this.props.value || [];
    const treeChildren = treeFilter(this.props.data, (c, level) => {
      return c.value === value[level];
    });
    return this.props.format && this.props.format(treeChildren.map((v) => {
      return v.label;
    }));
  };

  render() {
    const {props} = this;
    const {children, value, okText, dismissText, title, extra} = props;
    const extraProps = {
      extra: this.getSel() || extra,
    };
    const childEl = React.cloneElement(children, extraProps);
    const cascader = (
      <Cascader
        data={props.data}
        cols={props.cols}
      />
    );
    return (
      <PopupCascader
        cascader={cascader}
        {...this.props}
        styles={PopupStyles}
        value={value}
        dismissText={dismissText}
        title={title}
        okText={okText}
      >
        {childEl}
      </PopupCascader>
    );
  }
}
