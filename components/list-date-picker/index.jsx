/* eslint no-console:0 */
import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-modal/assets/index.css';
import 'rmc-modal/assets/simple.css';
import DatePicker from 'rmc-date-picker';
import Modal from 'rmc-modal';
import React from 'react';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import zhCn from 'gregorian-calendar-format/lib/locale/zh_CN';

function noop(){}
const formatter = GregorianCalendarFormat.getDateTimeInstance(GregorianCalendarFormat.Style.FULL,
  GregorianCalendarFormat.Style.FULL, zhCn);
function format(v) {
  return formatter.format(v);
}


//TODO: default value ?
const ListDatePicker = React.createClass({
  propTypes: {
    mode : React.PropTypes.string,
    onChange : React.PropTypes.func
  },
  getDefaultProps() {
    return {
      onChange      : noop,
      prefixCls: 'rmc-modal',
      modalPrefixCls: 'rmc-modal',
      mode: 'datetime',
      locale: require('rmc-date-picker/lib/locale/zh_CN'),
    };
  },
  getInitialState() {
    return {
      date: null,
      modalVisible: false,
    };
  },
  onDismiss() {
    this.setVisibleState(false);
  },
  onOk() {
    this.setVisibleState(false);
    this.props.onChange(this.state.date);
  },
  onDateChange(date) {
    console.log('onDateChange', date);
    this.setState({date});
  },
  setVisibleState(visible) {
    this.setState({
      modalVisible: visible,
    });
  },
  render() {
    const props = this.props;
    const {date} = this.state;
    const popPicker = (
      <Modal visible={this.state.modalVisible} onDismiss={this.onDismiss}>
        <div className={props.modalPrefixCls + '-header'}>
          <div className={props.modalPrefixCls + '-item'} onClick={this.setVisibleState.bind(this, false)}>取消</div>
          <div className={props.modalPrefixCls + '-item'}></div>
          <div className={props.modalPrefixCls + '-item'} onClick={this.onOk}>完成</div>
        </div>
        <DatePicker date={date} className={props.modalPrefixCls + '-content'} prefixCls={props.prefixCls}
                    mode={props.mode} locale={props.locale} onDateChange={this.onDateChange} />
      </Modal>
    );
    const extraProps = {
      onClick : this.setVisibleState.bind(this, true),
      extra   : date ? format(date) : '请选择'
    };
    const childEl = React.cloneElement(this.props.children, extraProps);
    return (
      <div>
        {popPicker}
        {childEl}
      </div>
    );
  },
});
export default ListDatePicker;
