import React from 'react';
import Cascader from 'rmc-cascader/lib/Cascader';
import MultiPicker from 'rmc-picker/lib/MultiPicker';

function getDefaultProps() {
  return {
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    cols: 3,
    cascade: true,
    value: [],
    onChange() {
    },
  };
}

export interface IPickerView {
  prefixCls?: string;
  pickerPrefixCls?: string;
  cols?: number;
  cascade?: boolean;
  value?: any[];
  data?: any;
  styles?: any;
  onChange?: (value?) => void;
}

export default class Picker extends React.Component<IPickerView, any> {
  static defaultProps = getDefaultProps();

  render() {
    const { props } = this;
    let picker;
    if (props.cascade) {
      picker = (
        <Cascader
          prefixCls={props.prefixCls}
          pickerPrefixCls={props.pickerPrefixCls}
          data={props.data}
          value={props.value}
          onChange={props.onChange}
          cols={props.cols}
        />
      );
    } else {
      picker = (
        <MultiPicker
          prefixCls={props.prefixCls}
          selectedValue={props.value}
          onValueChange={props.onChange}
          pickerPrefixCls={props.pickerPrefixCls}
        >
          {props.data.map(children => { return { props: { children } }; })}
        </MultiPicker>
      );
    }
    return picker;
  }
}
