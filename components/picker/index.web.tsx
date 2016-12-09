import React from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup';
import Cascader from 'rmc-cascader/lib/Cascader';
import treeFilter from 'array-tree-filter';
import tsPropsType from './PropsType';

function getDefaultProps() {
  const defaultFormat = (values) => {
    return values.join(',');
  };
  return {
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
    format: defaultFormat,
    style: {left: 0, bottom: 0},
    cols: 3,
    value: [],
    extra: '请选择',
    okText: '确定',
    dismissText: '取消',
    title: '',
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
    const { props } = this;
    const { children, value, extra, okText, dismissText, popupPrefixCls } = props;
    const cascader = (
      <Cascader
        prefixCls={props.prefixCls}
        pickerPrefixCls={props.pickerPrefixCls}
        data={props.data}
        cols={props.cols}
        onChange={props.onPickerChange}
      />
    );
    return (
      <PopupCascader
        cascader={cascader}
        WrapComponent="div"
        transitionName="am-slide-up"
        maskTransitionName="am-fade"
        {...props}
        prefixCls={popupPrefixCls}
        value={value}
        dismissText={dismissText}
        okText={okText}
      >
        {React.cloneElement(children, { extra: this.getSel() || extra })}
      </PopupCascader>
    );
  }
}
