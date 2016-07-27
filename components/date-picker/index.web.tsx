/* eslint no-console:0 */
import * as React from 'react';
import { PropTypes } from 'react';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import GregorianCalendar from 'gregorian-calendar';
import GregorianCalendarFormat from 'gregorian-calendar-format';
// import zhCn from 'gregorian-calendar/lib/locale/zh_CN';
import zhCnPicker from 'rmc-date-picker/lib/locale/zh_CN';
import enUsPicker from 'rmc-date-picker/lib/locale/en_US';
import assign from 'object-assign';

function getFormatter(type) {
  let formatter;
  if (type === 'time') {
    formatter = new GregorianCalendarFormat('HH:mm');
  } else if (type === 'datetime') {
    formatter = new GregorianCalendarFormat('yyyy-MM-dd HH:mm');
  } else {
    formatter = new GregorianCalendarFormat('yyyy-MM-dd');
  }
  return formatter;
}

function getDefaultProps() {
  const defaultFormat = (val) => {
    return val;
  };
  return {
    // className: '',
    prefixCls: 'am-date-picker',
    pickerPrefixCls: 'am-date-picker-picker',
    popupPrefixCls: 'am-date-picker-popup',
    mode: 'datetime',
    locale: zhCnPicker,
    format: defaultFormat,
    extra: '请选择',
    onChange() {},
    okText: '确定',
    dismissText: '取消',
    title: '',
  };
}

export default class DatePicker extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    mode: PropTypes.string,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    onChange: PropTypes.func,
    format: PropTypes.func,
  };

  static defaultProps = getDefaultProps();

  constructor(props) {
    super(props);
    const { value, minDate, maxDate, locale } = props;
    const { calendar } = locale;
    const now = new GregorianCalendar(calendar);
    now.setTime(Date.now());
    this.state = {
      date: this.getParsed(value, props) || now,
      minDate: this.getParsed(minDate, props),
      maxDate: this.getParsed(maxDate, props),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value, minDate, maxDate, locale } = nextProps;
    const { calendar } = locale;
    const now = new GregorianCalendar(calendar);
    now.setTime(Date.now());

    if ('value' in nextProps && nextProps.value !== this.props.value) {
      this.setState({
        date: this.getParsed(value, nextProps) || now,
      });
    }

    if ('minDate' in nextProps && nextProps.minDate !== this.props.minDate) {
      this.setState({
        minDate: this.getParsed(minDate, nextProps),
      });
    }

    if ('maxDate' in nextProps && nextProps.maxDate !== this.props.maxDate) {
      this.setState({
        maxDate: this.getParsed(maxDate, nextProps),
      });
    }
  }
  onChange = (v) => {
    if (v) {
      this.props.onChange(this.getFormatter().format(v));
    }
  }
  getParsed = (date, props) => {
    return date && this.getFormatter().parse(date, { locale: props.locale.calendar });
  }
  getFormatter = () => {
    return getFormatter(this.props.mode);
  }
  render() {
    const { date, minDate, maxDate } = this.state;
    const { format, extra, value, okText, dismissText, title, locale } = this.props;
    const extraProps = {
      extra: value ? format(value) : extra,
    };
    return (
      <PopupDatePicker {...this.props}
        WrapComponent="div"
        popupTransitionName="am-slide-fade"
        maskTransitionName="am-fade"
        locale={locale}
        okText={okText}
        dismissText={dismissText}
        title={title}
        onChange={this.onChange}
        date={date}
        minDate={minDate}
        maxDate={maxDate}
      >
        {React.cloneElement(this.props.children, extraProps)}
      </PopupDatePicker>
    );
  }
}

DatePicker.locale = {
  zh_CN: assign({}, zhCnPicker),
  en_US: assign({}, enUsPicker),
};
