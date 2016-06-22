var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import GregorianCalendar from 'gregorian-calendar';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import zhCn from 'gregorian-calendar/lib/locale/zh_CN';
const now = new GregorianCalendar(zhCn);
now.setTime(Date.now());
function getFormatter(type) {
    let formatter;
    if (type === 'time') {
        formatter = new GregorianCalendarFormat('HH:mm');
    }
    else if (type === 'datetime') {
        formatter = new GregorianCalendarFormat('yyyy-MM-dd HH:mm');
    }
    else {
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
        locale: require('rmc-date-picker/lib/locale/zh_CN'),
        format: defaultFormat,
        extra: '请选择',
        onChange() { },
        okText: '确定',
        dismissText: '取消',
        title: '',
    };
}
export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = (v) => {
            this.props.onChange(this.getFormatter().format(v));
        };
        this.getFormatter = () => {
            return getFormatter(this.props.mode);
        };
        this.state = {
            date: this.props.value && this.getFormatter().parse(this.props.value, { locale: zhCn }) || now,
            minDate: this.props.minDate && this.getFormatter().parse(this.props.minDate, { locale: zhCn }),
            maxDate: this.props.maxDate && this.getFormatter().parse(this.props.maxDate, { locale: zhCn }),
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps && nextProps.value !== this.props.value) {
            this.setState({
                date: nextProps.value && this.getFormatter().parse(nextProps.value, {
                    locale: zhCn,
                }) || now,
            });
        }
        if ('minDate' in nextProps && nextProps.minDate !== this.props.minDate) {
            this.setState({
                minDate: nextProps.minDate && this.getFormatter().parse(nextProps.minDate, {
                    locale: zhCn,
                }),
            });
        }
        if ('maxDate' in nextProps && nextProps.maxDate !== this.props.maxDate) {
            this.setState({
                maxDate: nextProps.maxDate && this.getFormatter().parse(nextProps.maxDate, {
                    locale: zhCn,
                }),
            });
        }
    }
    render() {
        const { date, minDate, maxDate } = this.state;
        const { format, extra, value, okText, dismissText, title } = this.props;
        const extraProps = {
            extra: value ? format(value) : extra,
        };
        return (React.createElement(PopupDatePicker, __assign({}, this.props, {WrapComponent: "div", popupTransitionName: "am-slide-fade", maskTransitionName: "am-fade", locale: require('rmc-date-picker/lib/locale/zh_CN'), okText: okText, dismissText: dismissText, title: title, onChange: this.onChange, date: date, minDate: minDate, maxDate: maxDate}), React.cloneElement(this.props.children, extraProps)));
    }
}
DatePicker.propTypes = {
    value: PropTypes.string,
    mode: PropTypes.string,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    onChange: PropTypes.func,
    format: PropTypes.func,
};
DatePicker.defaultProps = getDefaultProps();
