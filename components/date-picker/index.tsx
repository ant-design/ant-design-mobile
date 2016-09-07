import * as React from 'react';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import PopupStyles from './PopupStyles';
import { formatFn, getProps as getDefaultProps } from './utils';
import assign from 'object-assign';
import tsPropsType from './PropsType';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';

export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = assign({triggerType: 'onClick'}, getDefaultProps());

  render() {
    const {props} = this;
    const {children, extra, value, defaultDate} = props;
    const extraProps = {
      extra: value ? formatFn(this, value) : extra,
    };
    const dataPicker = (
      <RCDatePicker
        mode={props.mode}
        minDate={props.minDate}
        maxDate={props.maxDate}
        defaultDate={value || defaultDate}
      />
    );
    return (
      <PopupDatePicker
        datePicker={dataPicker}
        styles={PopupStyles}
        {...props}
        date={value || defaultDate}
      >
        {React.cloneElement(children, extraProps)}
      </PopupDatePicker>
    );
  }
}
