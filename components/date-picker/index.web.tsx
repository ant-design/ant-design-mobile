/* eslint no-console:0 */
import React from 'react';
import PropTypes from 'prop-types';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import RCMDatePicker from './MultiDatePicker';
import { formatFn, getProps, getDefaultDate, getDefaultDateArray, noop } from './utils';
import assign from 'object-assign';
import tsPropsType from './PropsType';
import { getComponentLocale, getLocaleCode } from '../_util/getLocale';
import moment from 'moment';
const now = moment();

function getDefaultProps() {
  return assign({
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
    minuteStep: 1,
    type: 'single', // single DatePicker or range DatePicker
    startLabelText: '',
    endLabelText: '',
    split: '-',
    onPickerChange: noop,
  }, getProps());
}

export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = getDefaultProps();

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      startTime: now, // this.props.startTime || now,
      endTime: now, // this.props.endTime || now,
    };
  }

  getFormatValue(val) {
    const { split } = this.props;
    if (Object.prototype.toString.call(val) === '[object Array]') {
      return formatFn(this, val[0]) + split + formatFn(this, val[1]);
    }
    return formatFn(this, val);
  }

  onPickerChange = (v) => {
    if (this.props.onPickerChange) {
      this.props.onPickerChange(v);
    }
  }

  onPickerOK = (v) => {
    if (this.props.onChange) {
      this.props.onChange(v);
    }
    if (this.props.onOk) {
      this.props.onOk(v);
    }
  }

  render() {
    const { props, context } = this;
    const { children, value, defaultDate, extra, popupPrefixCls, type, startLabelText, endLabelText } = props;

    const locale = getComponentLocale(props, context, 'DatePicker', () => require('./locale/zh_CN'));
    const localeCode = getLocaleCode(context);
    const { okText, dismissText, DatePickerLocale } = locale;

    if (localeCode) {
      if (value) {
        value.locale(localeCode);
      }
      if (defaultDate) {
        defaultDate.locale(localeCode);
      }
    }

    const dataPicker = type === 'single' ? (
      <RCDatePicker
        minuteStep={props.minuteStep}
        locale={DatePickerLocale}
        minDate={props.minDate}
        maxDate={props.maxDate}
        mode={props.mode}
        pickerPrefixCls={props.pickerPrefixCls}
        prefixCls={props.prefixCls}
        defaultDate={value || getDefaultDate(this.props)}
      />
    ) : (
      <RCMDatePicker
        minuteStep={props.minuteStep}
        locale={DatePickerLocale}
        minStartDate={props.minStartDate}
        maxStartDate={props.maxStartDate}
        minEndDate={props.minEndDate}
        maxEndDate={props.maxEndDate}
        mode={props.mode}
        format={props.format}
        pickerPrefixCls={props.pickerPrefixCls}
        prefixCls={props.prefixCls}
        defaultDate={value || getDefaultDateArray(this.props)}
        startTime={value && value[0] || getDefaultDateArray(this.props)[0]}
        endTime={value && value[1] || getDefaultDateArray(this.props)[1]}
        startLabelText={startLabelText}
        endLabelText={endLabelText}
        onValueChange={props.onPickerChange}
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
        date={value || (type === 'single' ? getDefaultDate(this.props) : getDefaultDateArray(this.props))}
        dismissText={dismissText}
        okText={okText}
        onOk={this.onPickerOK}
      >
        {children && React.cloneElement(children, { extra: value ? this.getFormatValue(value) : extra })}
      </PopupDatePicker>
    );
  }
}
