/* eslint no-console:0 */
import * as React from 'react';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import { getFormatter, getProps } from './utils';
import assign from 'object-assign';
import tsPropsType from './PropsType';

function getDefaultProps() {
  return assign({
    prefixCls: 'am-date-picker',
    pickerPrefixCls: 'am-date-picker-picker',
    popupPrefixCls: 'am-date-picker-popup',
  }, getProps());
}

// api changed by chengyu(yiminghe)
export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = getDefaultProps();

  format(v) {
    const { format } = this.props;
    if (format) {
      // support more moment format function, like: http://momentjs.com/docs/#/displaying/fromnow/
      return format(v);
    }
    return v.format(getFormatter(this.props.mode));
  }

  render() {
    const { children, extra, value, defaultDate } = this.props;
    const extraProps = {
      extra: value ? this.format(value) : extra,
    };
    return (
      <PopupDatePicker {...this.props}
        WrapComponent="div"
        popupTransitionName="am-slide-up"
        maskTransitionName="am-fade"
        date={value || defaultDate}
      >
        {React.cloneElement(children, extraProps)}
      </PopupDatePicker>
    );
  }
}
