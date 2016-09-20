/* eslint no-console:0 */
import React from 'react';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { formatFn, getProps } from './utils';
import assign from 'object-assign';
import tsPropsType from './PropsType';

function getDefaultProps() {
  return assign({
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
  }, getProps());
}

export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = getDefaultProps();

  render() {
    const { props } = this;
    const { children, value, defaultDate, extra, okText, dismissText, popupPrefixCls } = props;
    const extraProps = {
      extra: value ? formatFn(this, value) : extra,
    };
    const dataPicker = (
      <RCDatePicker
        locale={props.locale}
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
        WrapComponent="div"
        transitionName="am-slide-up"
        maskTransitionName="am-fade"
        {...props}
        prefixCls={popupPrefixCls}
        date={value || defaultDate}
        dismissText={<span className={`${popupPrefixCls}-header-cancel-button`}>{dismissText}</span>}
        okText={<span className={`${popupPrefixCls}-header-ok-button`}>{okText}</span>}
      >
        {React.cloneElement(children,
          children.type && children.type.myName === 'ListItem' ? extraProps : {})}
      </PopupDatePicker>
    );
  }
}
