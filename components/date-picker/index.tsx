/* tslint:disable:jsx-no-multiline-js */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import { getComponentLocale } from '../_util/getLocale';
import { DatePickerPropsType } from './PropsType';
import { formatFn } from './utils';

export interface PropsType extends DatePickerPropsType {
  prefixCls?: string;
  className?: string;
  use12Hours?: boolean;
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
  onOk?: (x: any) => void;
  onVisibleChange?: (visible: boolean) => void;
}
export default class DatePicker extends React.Component<PropsType, any> {
  static defaultProps = {
    mode: 'datetime',
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
    minuteStep: 1,
    use12Hours: false,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  private scrollValue: any;

  setScrollValue = (v: any) => {
    this.scrollValue = v;
  }

  onOk = (v: any) => {
    if (this.scrollValue !== undefined) {
      v = this.scrollValue;
    }
    if (this.props.onChange) {
      this.props.onChange(v);
    }
    if (this.props.onOk) {
      this.props.onOk(v);
    }
  }

  onVisibleChange = (visible: boolean) => {
    this.scrollValue = undefined;
    if (this.props.onVisibleChange) {
      this.props.onVisibleChange(visible);
    }
  }

  fixOnOk = (picker: any) => {
    if (picker) {
      picker.onOk = this.onOk;
    }
  }

  render() {
    // tslint:disable-next-line:no-this-assignment
    const { props, context } = this;
    const { children, value, popupPrefixCls } = props;
    const locale = getComponentLocale(props, context, 'DatePicker', () =>
      require('./locale/zh_CN'),
    );
    const { okText, dismissText, extra, DatePickerLocale } = locale;

    /**
     * 注意:
     * 受控 表示 通过设置 value 属性、组件的最终状态跟 value 设置值一致。
     * 默认不设置 value 或 只设置 defaultValue 表示非受控。
     *
     * DatePickerView 对外通过 value “只支持 受控” 模式（可以使用 defaultDate 支持 非受控 模式，但不对外）
     * PickerView 对外通过 value “只支持 受控” 模式
     *
     * DatePicker / Picker 对外只有 value 属性 (没有 defaultValue)，
     * 其中 List 展示部分 “只支持 受控” 模式，
     * 弹出的 选择器部分 会随外部 value 改变而变、同时能自由滚动
     * （即不会因为传入的 value 不变而不能滚动 (不像原生 input 的受控行为)）
     *
     */

    const datePicker = (
      <RCDatePicker
        minuteStep={props.minuteStep}
        locale={DatePickerLocale}
        minDate={props.minDate}
        maxDate={props.maxDate}
        mode={props.mode}
        pickerPrefixCls={props.pickerPrefixCls}
        prefixCls={props.prefixCls}
        defaultDate={value || new Date()}
        use12Hours={props.use12Hours}
        onValueChange={props.onValueChange}
        onScrollChange={this.setScrollValue}
      />
    );

    return (
      <PopupDatePicker
        datePicker={datePicker}
        WrapComponent="div"
        transitionName="am-slide-up"
        maskTransitionName="am-fade"
        {...props as any}
        prefixCls={popupPrefixCls}
        date={value || new Date()}
        dismissText={this.props.dismissText || dismissText}
        okText={this.props.okText || okText}
        ref={this.fixOnOk}
        onVisibleChange={this.onVisibleChange}
      >
        {children &&
          React.isValidElement(children) &&
          React.cloneElement<{extra?: string}>(children, {
            extra: value ? formatFn(this, value) : this.props.extra || extra,
          })}
      </PopupDatePicker>
    );
  }
}
