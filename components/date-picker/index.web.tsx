/* eslint no-console:0 */
import * as React from 'react';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { formatFn, getProps } from './utils';
import assign from 'object-assign';
import tsPropsType from './PropsType';

function getDefaultProps() {
  return assign({
    prefixCls: 'am-date-picker',
    pickerPrefixCls: 'am-date-picker-col',
    popupPrefixCls: 'am-date-picker-popup',
  }, getProps());
}

// api changed by chengyu(yiminghe)
export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = getDefaultProps();

  render() {
    const { props } = this;
    const { children, extra, value, defaultDate } = props;
    const extraProps = {
      extra: value ? formatFn(this, value) : extra,
    };
    const dataPicker = (
      <RCDatePicker
        minDate={props.minDate}
        maxDate={props.maxDate}
        mode={props.mode}
        pickerPrefixCls={props.pickerPrefixCls}
        prefixCls={props.prefixCls}
        defaultDate={value || defaultDate}
      />
    );
    return (
      <PopupDatePicker
        datePicker={dataPicker}
        {...props}
        prefixCls={props.popupPrefixCls}
        WrapComponent="div"
        popupTransitionName="am-slide-up"
        maskTransitionName="am-fade"
        date={value || defaultDate}
      >
        {React.cloneElement(children, children.type && children.type.name === 'ListItem' ? extraProps : {})}
      </PopupDatePicker>
    );
  }
}
