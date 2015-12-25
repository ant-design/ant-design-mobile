/* eslint no-console:0 */
import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-modal/assets/index.css';
import 'rmc-modal/assets/simple.css';
import DatePicker from 'rmc-date-picker';
import Modal from 'rmc-modal';
import React from 'react';
import GregorianCalendarFormat from 'gregorian-calendar-format';
// import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';

function noop(){}

function getFormatter(type){
  let formatter = new GregorianCalendarFormat('yyyy-MM-dd');
  if(type === 'time'){
    formatter = new GregorianCalendarFormat('HH:MM');
  } else if(type === 'datetime'){
    formatter = new GregorianCalendarFormat('yyyy-MM-dd HH:MM');
  }
  return formatter;
}

const ListDatePicker = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    mode : React.PropTypes.string,
    onDestroy : React.PropTypes.func
  },
  getDefaultProps() {
    return {
      value : null,
      onDestroy      : noop,
      prefixCls: 'rmc-modal',
      modalPrefixCls: 'rmc-modal',
      mode: 'datetime',
      locale: require('rmc-date-picker/lib/locale/zh_CN'),
    };
  },
  getInitialState() {
    let initDate = null;
    if(this.props.value){
      //TODO : 这里有点问题，format出来的结果不对 ref: https://www.npmjs.com/package/gregorian-calendar-format
      // initDate = getFormatter(this.props.mode).parse(this.props.value,{locale : zhCn});
    }
    return {
      date: initDate,
      modalVisible: false,
    };
  },
  componentWillUnmount(){
    this.props.onDestroy(getFormatter(this.props.mode).format(this.state.date));
  },
  onOk(){
    window.history.back();
  },
  onDateChange(date) {
    this.setState({date : date});
  },
  onCancel(visible) {
    //TODO
  },
  render() {
    const props = this.props;
    const {date} = this.state;

    return (
      <Modal visible={true}>
        <div className={props.modalPrefixCls + '-header'}>
          <div className={props.modalPrefixCls + '-item'} onClick={this.onCancel.bind(this, false)}>取消</div>
          <div className={props.modalPrefixCls + '-item'}></div>
          <div className={props.modalPrefixCls + '-item'} onClick={this.onOk}>完成</div>
        </div>
        <DatePicker date={date} className={props.modalPrefixCls + '-content'} prefixCls={props.prefixCls}
                    mode={props.mode} locale={props.locale} onDateChange={this.onDateChange} />
      </Modal>
    );
  },
});
export default ListDatePicker;
