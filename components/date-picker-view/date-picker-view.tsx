import * as PropTypes from 'prop-types';
import * as React from 'react';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { getComponentLocale } from '../_util/getLocale';
import { DatePickerProps } from './PropsType';

export default class DatePickerView extends React.Component<
  DatePickerProps,
  any
> {
  static defaultProps = {
    mode: 'datetime',
    extra: '请选择',
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    minuteStep: 1,
    use12Hours: false,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  render() {
    // tslint:disable-next-line:no-this-assignment
    const { props, context } = this;
    const locale = getComponentLocale(props, context, 'DatePickerView', () =>
      require('./locale/zh_CN'),
    );

    // DatePicker use `defaultDate`, maybe because there are PopupDatePicker inside? @yiminghe
    // Here Use `date` instead of `defaultDate`, make it controlled fully.
    return (
      <RCDatePicker
        {...props}
        locale={locale}
        date={props.value}
        onDateChange={props.onChange}
        onValueChange={props.onValueChange}
        onScrollChange={props.onScrollChange}
      />
    );
  }
}
