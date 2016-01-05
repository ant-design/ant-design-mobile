/* eslint no-console:0 */
import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-modal/assets/index.css';
import DatePicker from 'rmc-date-picker';
import Modal from 'rmc-modal';
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
    onChange: PropTypes.func,
    modalVisible: PropTypes.bool,
    onModalVisibleChange: PropTypes.func,
  },
  getDefaultProps() {
    return {
      value: null,
      onChange: noop,
      onModalVisibleChange: noop,
      mode: 'datetime',
      locale: require('rmc-date-picker/lib/locale/zh_CN')
    };
  },
  getInitialState() {
    return {
      date: this.props.value && this.getFormatter().parse(this.props.value, {locale: zhCn}) || now,
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
    this.pickerValue = null;
    this.setVisibleState(false);
  },
  show() {
    this.setVisibleState(true);
  },
  getPickerValue() {
    return this.pickerValue || this.state.date;
  },
  componentWillUnmount(){
    this.props.onDestroy(getFormatter(this.props.mode).format(this.getPickerValue()));
  },
  onOk(){
    this.props.onChange(this.getFormatter().format(this.getPickerValue()));
    this.hide();
  },
  onDateChange(date) {
    this.pickerValue = date;
  },
  getFormatter() {
    return getFormatter(this.props.mode);
  },
  render() {
    const props = this.props;
    const {date} = this.state;

    let dateStr = this.props.value ? this.props.value : '请选择';

    const extraProps = {
      onClick: this.show,
      extra: dateStr
    };
    const childEl = React.cloneElement(this.props.children, extraProps);

    return (
      <div>
        {this.state.modalVisible ? <Modal
          style={{left: 0, bottom: 0}}
          onDismiss={this.hide}
          visible>
          <div className={'am-picker-header'}>
            <div className={'am-picker-item'} onClick={this.hide}>取消</div>
            <div className={'am-picker-item'}></div>
            <div className={'am-picker-item'} onClick={this.onOk}>完成</div>
          </div>
          <DatePicker defaultDate={date}
                      mode={props.mode}
                      locale={props.locale}
                      onDateChange={this.onDateChange}/>
        </Modal> : null}
        {childEl}
      </div>
    );
  },
});
export default ListDatePicker;
