/* tslint:disable:jsx-no-multiline-js */
import * as React from 'react';
import RMCCascader from 'rmc-cascader/lib/Cascader';
import RMCMultiPicker from 'rmc-picker/lib/MultiPicker';
import RMCPicker from 'rmc-picker/lib/Picker';
import { PickerData } from '../picker/PropsType';

function getDefaultProps() {
  return {
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    cols: 3,
    cascade: true,
    value: [],
    onChange() {},
  };
}

export interface IPickerView {
  prefixCls?: string;
  pickerPrefixCls?: string;
  cols?: number;
  cascade?: boolean;
  value?: any[];
  data?: PickerData[] | PickerData[][];
  onChange?: (value?: any) => void;
  onScrollChange?: (value?: any) => void;
  indicatorStyle?: any;
  itemStyle?: any;
}

export default class PickerView extends React.Component<IPickerView, any> {
  static defaultProps = getDefaultProps();

  isMultiPicker = () => {
    if (!this.props.data) { return false; }
    return Array.isArray(this.props.data[0]);
  }
  getCol = () => {
    const { data, pickerPrefixCls, indicatorStyle, itemStyle } = this.props;

    const formattedData = this.isMultiPicker() ? data : [data];

    return (formattedData as PickerData[][]).map((col, index) => {
      return (
        <RMCPicker
          key={index}
          prefixCls={pickerPrefixCls}
          style={{ flex: 1 }}
          indicatorStyle={indicatorStyle}
          itemStyle={itemStyle}
        >
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
    // tslint:disable-next-line:no-this-assignment
    const { props } = this;
    let picker;
    if (props.cascade) {
      picker = (
        <RMCCascader
          prefixCls={props.prefixCls}
          pickerPrefixCls={props.pickerPrefixCls}
          data={props.data as PickerData[]}
          value={props.value}
          onChange={props.onChange}
          onScrollChange={props.onScrollChange}
          cols={props.cols}
          indicatorStyle={props.indicatorStyle}
          pickerItemStyle={props.itemStyle}
        />
      );
    } else {
      picker = (
        <RMCMultiPicker
          prefixCls={props.prefixCls}
          selectedValue={props.value}
          onValueChange={props.onChange}
          onScrollChange={props.onScrollChange}
          style={{ flexDirection: 'row' }}
        >
          {this.getCol()}
        </RMCMultiPicker>
      );
    }
    return picker;
  }
}
