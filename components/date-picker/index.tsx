import React from 'react';
import PropTypes from 'prop-types';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { formatFn, getDefaultDate } from './utils';
import tsPropsType from './PropsType';
import { getComponentLocale } from '../_util/getLocale';

export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = {
    mode: 'datetime',
    extra: '请选择',
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
    minuteStep: 1,
    use12Hours: false,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  render() {
    const { props, context } = this;
    const { children, value, extra, popupPrefixCls } = props;
    const locale = getComponentLocale(props, context, 'DatePicker', () => require('./locale/zh_CN'));
    const { okText, dismissText, DatePickerLocale } = locale;

    const dataPicker = (
      <RCDatePicker
        minuteStep={props.minuteStep}
        locale={DatePickerLocale}
        minDate={props.minDate}
        maxDate={props.maxDate}
        mode={props.mode}
        pickerPrefixCls={props.pickerPrefixCls}
        prefixCls={props.prefixCls}
        defaultDate={value || getDefaultDate(this.props)}
        use12Hours={props.use12Hours}
        onValueChange={props.onValueChange}
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
        date={value || getDefaultDate(this.props)}
        dismissText={dismissText}
        okText={okText}
      >
        {children && React.cloneElement(children, { extra: value ? formatFn(this, value) : extra })}
      </PopupDatePicker>
    );
  }
}
