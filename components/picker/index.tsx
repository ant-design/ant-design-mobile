import React from 'react';
import PopupCascader from 'rmc-cascader/lib/Popup';
import Cascader from 'rmc-cascader/lib/Cascader';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import treeFilter from 'array-tree-filter';
import tsPropsType from './PropsType';
import styles from './styles';
import popupProps from './popupProps';

function getDefaultProps() {
  const defaultFormat = (values) => {
    return values.join(',');
  };
  return {
    triggerType: 'onClick',
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
    format: defaultFormat,
    cols: 3,
    cascade: true,
    extra: '请选择',
    okText: '确定',
    dismissText: '取消',
    title: '',
    styles,
  };
}

export default class Picker extends React.Component<tsPropsType, any> {
  static defaultProps = getDefaultProps();

  getSel = () => {
    const value = this.props.value || [];
    let treeChildren;
    if (this.props.cascade) {
      treeChildren = treeFilter(this.props.data, (c, level) => {
        return c.value === value[level];
      });
    } else {
      treeChildren = value.map((v, i) => {
        return this.props.data[i].filter(d => d.value === v)[0];
      });
    }
    return this.props.format && this.props.format(treeChildren.map((v) => {
        return v.label;
      }));
  }

  render() {
    const { props } = this;
    const { children, value = [], extra, okText, itemStyle, dismissText, popupPrefixCls, cascade } = props;
    let cascader;
    let popupMoreProps = {};
    if (cascade) {
      cascader = (
        <Cascader
          prefixCls={props.prefixCls}
          pickerPrefixCls={props.pickerPrefixCls}
          data={props.data}
          cols={props.cols}
          onChange={props.onPickerChange}
          pickerItemStyle={itemStyle}
        />
      );
    } else {
      cascader = (
        <MultiPicker
          prefixCls={props.prefixCls}
          pickerPrefixCls={props.pickerPrefixCls}
          pickerItemStyle={itemStyle}
        >
          {props.data.map(d => { return { props: { children: d } }; })}
        </MultiPicker>
      );
      popupMoreProps = {
        pickerValueProp: 'selectedValue',
        pickerValueChangeProp: 'onValueChange',
      };
    }
    return (
      <PopupCascader
        cascader={cascader}
        {...popupProps}
        {...props}
        prefixCls={popupPrefixCls}
        value={value}
        dismissText={dismissText}
        okText={okText}
        {...popupMoreProps}
      >
        {React.cloneElement(children, { extra: this.getSel() || extra })}
      </PopupCascader>
    );
  }
}
