import * as React from 'react';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import PopupStyles from './PopupStyles';
import {getFormatter, getProps as getDefaultProps} from './utils';
import assign from 'object-assign';
import tsPropsType from './PropsType';

export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = assign({triggerType: 'onClick'}, getDefaultProps());

  format(v) {
    const { format } = this.props;
    if (format) {
      // support more moment format function, like: http://momentjs.com/docs/#/displaying/fromnow/
      return format(v);
    }
    return v.format(getFormatter(this.props.mode));
  }

  render() {
    const { children, extra, value, defaultDate} = this.props;
    const extraProps = {
      extra: value ? this.format(value) : extra,
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
