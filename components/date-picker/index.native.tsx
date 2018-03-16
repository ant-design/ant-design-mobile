/* tslint:disable:jsx-no-multiline-js */
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import { getComponentLocale } from '../_util/getLocale';
import PickerStyle, { IPickerStyle } from '../picker/style/index.native';
import { DatePickerPropsType } from './PropsType';
import { formatFn } from './utils';

export interface DatePickerNativeProps extends DatePickerPropsType {
  styles?: IPickerStyle;
  triggerTypes?: string;
}

const PickerStyles = StyleSheet.create<any>(PickerStyle);

export default class DatePicker extends React.Component<
  DatePickerNativeProps,
  any
> {
  static defaultProps = {
    mode: 'datetime',
    triggerType: 'onClick',
    styles: PickerStyles,
    minuteStep: 1,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  render() {
    // tslint:disable-next-line:no-this-assignment
    const { props, context } = this;
    const { children, value, styles } = props;
    const locale = getComponentLocale(props, context, 'DatePicker', () =>
      require('./locale/zh_CN'),
    );
    const { okText, dismissText, extra, DatePickerLocale } = locale;

    const dataPicker = (
      <RCDatePicker
        minuteStep={props.minuteStep}
        locale={DatePickerLocale}
        mode={props.mode}
        minDate={props.minDate}
        maxDate={props.maxDate}
        defaultDate={value}
        onValueChange={props.onValueChange}
      />
    );

    return (
      <PopupDatePicker
        datePicker={dataPicker}
        styles={styles}
        {...props as any}
        date={value}
        dismissText={this.props.dismissText || dismissText}
        okText={this.props.okText || okText}
      >
        {children &&
          React.isValidElement(children) &&
          React.cloneElement<object, object>(children, {
            extra: value ? formatFn(this, value) : this.props.extra || extra,
          })}
      </PopupDatePicker>
    );
  }
}
