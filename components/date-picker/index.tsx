import * as React from 'react';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import PopupStyles from './PopupStyles';
import {formatFn, getProps as getDefaultProps} from './utils';
import assign from 'object-assign';
import tsPropsType from './PropsType';

export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = assign({triggerType: 'onClick'}, getDefaultProps());

  render() {
    const { children, extra, value, defaultDate} = this.props;
    const extraProps = {
      extra: value ? formatFn(this, value) : extra,
    };
    return (
      <PopupDatePicker
        styles={PopupStyles}
        {...this.props}
        date={value || defaultDate}
      >
        {React.cloneElement(children, extraProps)}
      </PopupDatePicker>
    );
  }
}
