/* eslint no-console:0 */
import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-modal/assets/index.css';
import DatePicker from 'rmc-date-picker';
import Modal from 'rmc-modal';
import React from 'react';
import GregorianCalendarFormat from 'gregorian-calendar-format';
// import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';

function noop() {
}

function getFormatter(type) {
  let formatter = new GregorianCalendarFormat('yyyy-MM-dd');
  if (type === 'time') {
    formatter = new GregorianCalendarFormat('HH:MM');
  } else if (type === 'datetime') {
    formatter = new GregorianCalendarFormat('yyyy-MM-dd HH:MM');
  }
  return formatter;
}

const ListDatePicker = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    mode: React.PropTypes.string,
    onChange: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      value: null,
      onChange: noop,
      mode: 'datetime',
      locale: require('rmc-date-picker/lib/locale/zh_CN')
    };
  },
  getInitialState() {
    let initDate = null;
    if (this.props.value) {
      console.log(this.props.value);
      //TODO : 这里有点问题，parse出来的结果不对 ref: https://www.npmjs.com/package/gregorian-calendar-format
      // initDate = getFormatter(this.props.mode).parse(this.props.value,{locale : zhCn});
      // console.log(initDate);
    }
    return {
      date: initDate,
      modalVisible: false
    };
  },
  setVisibleState(visible) {
    this.setState({
      modalVisible: visible,
    });
  },
  componentWillUnmount(){
    this.props.onDestroy(getFormatter(this.props.mode).format(this.state.date));
  },
  onOk(){
    this.setVisibleState(false);
    this.props.onChange(this.state.date);
  },
  onDateChange(date) {
    this.setState({date: date});
  },
  onCancel() {
    this.setVisibleState(false);
  },
  render() {
    const props = this.props;
    const {date} = this.state;

    let dateStr = this.state.date ? getFormatter(this.props.mode).format(this.state.date) : '请选择';

    const extraProps = {
      onClick: this.setVisibleState.bind(this, true),
      extra: dateStr
    };
    const childEl = React.cloneElement(this.props.children, extraProps);

    return (
      <div>
        {this.state.modalVisible ? <Modal
          style={{left: 0, bottom: 0}}
          visible>
          <div className={'am-picker-header'}>
            <div className={'am-picker-item'} onClick={this.onCancel}>取消</div>
            <div className={'am-picker-item'}></div>
            <div className={'am-picker-item'} onClick={this.onOk}>完成</div>
          </div>
          <DatePicker date={date}
                      mode={props.mode} locale={props.locale} onDateChange={this.onDateChange}/>
        </Modal> : null}
        {childEl}
      </div>
    );
  },
});
export default ListDatePicker;
