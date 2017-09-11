/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import RMCCascader from 'rmc-cascader/lib/Cascader';
import RMCMultiPicker from 'rmc-picker/lib/MultiPicker';
import RMCPicker from 'rmc-picker/lib/Picker';

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
  indicatorStyle?: any;
}

export default class PickerView extends React.Component<IPickerView, any> {
  static defaultProps = getDefaultProps();

  getCol = () => {
    const { data, pickerPrefixCls } = this.props;
    return data.map((col, index) => {
      return (
        <RMCPicker key={index} prefixCls={pickerPrefixCls} style={{ flex: 1 }}>
          {col.map(item => {
            return (
              <RMCPicker.Item key={item.value} value={item.value}>
                {item.label}
              </RMCPicker.Item>
            );
          })}
        </RMCPicker>
      );
    });
  }
  render() {
    const { props } = this;
    let picker;
    if (props.cascade) {
      picker = (
        <RMCCascader
          prefixCls={props.prefixCls}
          pickerPrefixCls={props.pickerPrefixCls}
          data={props.data}
          value={props.value}
          onChange={props.onChange}
          cols={props.cols}
          indicatorStyle={props.indicatorStyle}
        />
      );
    } else {
      picker = (
        <RMCMultiPicker
          prefixCls={props.prefixCls}
          selectedValue={props.value}
          onValueChange={props.onChange}
          indicatorStyle={props.indicatorStyle}
          style={{ flexDirection: 'row' }}
        >
          {this.getCol()}
        </RMCMultiPicker>
      );
    }
    return picker;
  }
}
