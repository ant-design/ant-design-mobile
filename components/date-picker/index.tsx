import React from 'react';
import PropTypes from 'prop-types';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import PopupStyles from '../picker/styles';
import { formatFn, getProps as getDefaultProps, getDefaultDate } from './utils';
import assign from 'object-assign';
import tsPropsType from './PropsType';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { getComponentLocale, getLocaleCode } from '../_util/getLocale';
import zh_CN from './locale/zh_CN';

export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = assign({
    triggerType: 'onClick',
    styles: PopupStyles,
    minuteStep: 1,
  }, getDefaultProps());

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  render() {
    const { props, context } = this;
    const { children, extra, value, defaultDate, styles } = props;
    const extraProps = {
      extra: value ? formatFn(this, value) : extra,
    };
    const locale = getComponentLocale(props, context, 'DatePicker', () => zh_CN);
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
        minuteStep={props.minuteStep}
        locale={DatePickerLocale}
        mode={props.mode}
        minDate={props.minDate}
        maxDate={props.maxDate}
        defaultDate={value || getDefaultDate(this.props)}
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
        date={value || getDefaultDate(this.props)}
      >
        {React.cloneElement(children, extraProps)}
      </PopupDatePicker>
    );
  }
}
