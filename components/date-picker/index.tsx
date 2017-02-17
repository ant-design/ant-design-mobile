import React from 'react';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import PopupStyles from '../picker/styles';
import { formatFn, getProps as getDefaultProps } from './utils';
import assign from 'object-assign';
import tsPropsType from './PropsType';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { getComponentLocale, getLocaleCode } from '../_util/getLocale';

export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = assign({
    triggerType: 'onClick',
    styles: PopupStyles,
  }, getDefaultProps());

  static contextTypes = {
    antLocale: React.PropTypes.object,
  };
  render() {
    const { props, context } = this;
    const {children, extra, value, defaultDate, styles} = props;
    const extraProps = {
      extra: value ? formatFn(this, value) : extra,
    };
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
    const dataPicker = (
      <RCDatePicker
        locale={DatePickerLocale}
        mode={props.mode}
        minDate={props.minDate}
        maxDate={props.maxDate}
        defaultDate={value || defaultDate}
      />
    );
    const newProps = {
      ...props,
      okText,
      dismissText,
    };
    return (
      <PopupDatePicker
        datePicker={dataPicker}
        styles={styles}
        {...newProps}
        date={value || defaultDate}
      >
        {React.cloneElement(children, extraProps)}
      </PopupDatePicker>
    );
  }
}
