/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-date-picker/assets/popup.css';
import 'rmc-modal/assets/index.css';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import React, {PropTypes} from 'react';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import zhCn from 'gregorian-calendar/lib/locale/zh_CN';
import GregorianCalendar from 'gregorian-calendar';

function noop() {
}

const now = new GregorianCalendar(zhCn);
now.setTime(Date.now());

function getFormatter(type) {
  let formatter;
  if (type === 'time') {
    formatter = new GregorianCalendarFormat('HH:MM');
  } else if (type === 'datetime') {
    formatter = new GregorianCalendarFormat('yyyy-MM-dd HH:MM');
  } else {
    formatter = new GregorianCalendarFormat('yyyy-MM-dd');
  }
  return formatter;
}

const ListDatePicker = React.createClass({
  propTypes: {
    value: PropTypes.string,
    mode: PropTypes.string,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    onChange: PropTypes.func,
    modalVisible: PropTypes.bool,
    onModalVisibleChange: PropTypes.func,
  },
  getDefaultProps() {
    return {
      value: null,
      minDate: null,
      maxDate: null,
      onChange: noop,
      onModalVisibleChange: noop,
      mode: 'datetime',
      locale: require('rmc-date-picker/lib/locale/zh_CN')
    };
  },
  getInitialState() {
    return {
      date: this.props.value && this.getFormatter().parse(this.props.value, {locale: zhCn}) || now,
      minDate: this.props.minDate && this.getFormatter().parse(this.props.minDate, {locale: zhCn}),
      maxDate: this.props.maxDate && this.getFormatter().parse(this.props.maxDate, {locale: zhCn}),
      modalVisible: this.props.modalVisible || false,
    };
  },
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
  },
  componentDidUpdate() {
    if (!this.state.modalVisible) {
      this.pickerValue = null;
    }
  },
  setVisibleState(modalVisible) {
    if (!('modalVisible' in this.props)) {
      this.setState({
        modalVisible,
      });
    }
    this.props.onModalVisibleChange(modalVisible);
  },
  hide() {
    this.setVisibleState(false);
  },
  componentWillUnmount(){
    this.props.onDestroy(getFormatter(this.props.mode).format(this.getPickerValue()));
  },
  onOk(v){
    this.props.onChange(this.getFormatter().format(v));
    this.hide();
  },
  getFormatter() {
    return getFormatter(this.props.mode);
  },
  render() {
    const {date, minDate, maxDate, modalVisible} = this.state;
    const {mode, locale} = this.props;
    let dateStr = this.props.value ? this.props.value : '请选择';

    const extraProps = {
      extra: dateStr
    };

    const childEl = React.cloneElement(this.props.children, extraProps);

    return (
      <div>
        <PopupDatePicker locale={locale}
                         visible={modalVisible}
                         mode={mode}
                         okText="确定"
                         dismissText="取消"
                         style={{left: 0, bottom: 0}}
                         onVisibleChange={this.setVisibleState}
                         onOk={this.onOk}
                         date={date}
                         minDate={minDate}
                         maxDate={maxDate}
        >
          {childEl}
        </PopupDatePicker>
      </div>
    );
  },
});
export default ListDatePicker;
