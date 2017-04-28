import React from 'react';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import MultiPickerProps from './MultiDatePickerProps';
import moment from 'moment';
const minDate = moment([2015, 8, 15, 0, 0, 0]);
const now = moment();
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import { getComponentLocale, getLocaleCode } from '../_util/getLocale';
import './style/MultiDatePicker.less';

class MultiPicker extends React.Component<MultiPickerProps, any> {
  static defaultProps = {
    onValueChange() {},
    disabled: false,
    startTime: now,
    endTime: now,
    mode: 'datetime',
  };

  constructor(props) {
    super(props);
    this.state = {
      minStartDate: this.props.minStartDate || minDate,
      maxStartDate: this.props.maxStartDate || moment(),
      minEndDate: this.props.minEndDate || minDate,
      maxEndDate: this.props.maxEndDate || moment(),
      startTime: this.props.startTime || now,
      endTime: this.props.endTime || now,
    };
  }

  getValue = () => {
    const { startTime, endTime } = this.state;
    return [startTime, endTime];
  }
  onValueChange = (i, v) => {
    const value = this.getValue();
    value[i] = v;
    if (this.props.onValueChange) {
      this.props.onValueChange(value, i);
    }
  }

  onDateStartTimeChangeFunc = (time) => {
    this.setState({
      startTime: time,
    }, () => {
      this.onValueChange(0, time);
    });
    // this.onValueChange(0, time);
  }

  onDateEndTimeChangeFunc = (time) => {
    this.setState({
      endTime: time,
    }, () => {
      this.onValueChange(1, time);
    });
    // this.onValueChange(1, time);
  }

  render() {
    const { props, context } = this;
    const {
      prefixCls, pickerPrefixCls,
      rootNativeProps,
      mode, value, defaultDate,
      startLabelText, endLabelText,
    } = props;

    const locale = getComponentLocale(props, context, 'DatePicker', () => require('./locale/zh_CN'));
    const localeCode = getLocaleCode(context);
    const { startText, endText } = locale;

    if (localeCode) {
      if (value) {
        value.locale(localeCode);
      }
      if (defaultDate) {
        defaultDate.locale(localeCode);
      }
    }

    const { startTime, endTime, minStartDate, maxStartDate, minEndDate, maxEndDate } = this.state;
    return (
      <div {...rootNativeProps}>
        <div className={`${prefixCls}-popup-label-title`}>{startLabelText || startText}</div>
        <RCDatePicker
          rootNativeProps={{ 'data-xx': 'yy' }}
          date={startTime}
          mode={mode}
          locale={locale}
          maxDate={maxStartDate}
          minDate={minStartDate}
          pickerPrefixCls={pickerPrefixCls}
          prefixCls={prefixCls}
          onDateChange={this.onDateStartTimeChangeFunc}
        />
        <div className={`${prefixCls}-popup-label-title`}>{endLabelText || endText}</div>
        <RCDatePicker
          rootNativeProps={{ 'data-xx': 'yy' }}
          date={endTime}
          mode={mode}
          locale={locale}
          maxDate={maxEndDate}
          minDate={minEndDate}
          pickerPrefixCls={pickerPrefixCls}
          prefixCls={prefixCls}
          onDateChange={this.onDateEndTimeChangeFunc}
        />
      </div>
    );
  }
};

export default MultiPicker;
