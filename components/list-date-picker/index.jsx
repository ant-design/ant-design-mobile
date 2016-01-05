/* eslint no-console:0 */
import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-modal/assets/index.css';
import DatePicker from 'rmc-date-picker';
import Modal from 'rmc-modal';
import React, {PropTypes} from 'react';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import zhCn from 'gregorian-calendar/lib/locale/zh_CN';

function noop() {
}

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
      date: null,
      modalVisible: this.props.modalVisible || false,
    };
  },
  setVisibleState(modalVisible) {
    if(!('modalVisible' in this.props)) {
      this.setState({
        modalVisible,
      });
    }
    this.props.onModalVisibleChange(modalVisible);
  },
  hide() {
    this.setVisibleState(false);
  },
  show() {
    this.setVisibleState(true);
  },
  componentWillUnmount(){
    this.props.onDestroy(getFormatter(this.props.mode).format(this.state.date));
  },
  onOk(){
    this.hide();
    this.props.onChange(this.getFormatter().format(this.state.date));
  },
  onDateChange(date) {
    this.setState({
      date: date,
    });
  },
  onCancel() {
    this.hide();
  },
  getFormatter() {
    return getFormatter(this.props.mode);
  },
  componentDidUpdate(preProps, prevState) {
    /* eslint react/no-did-update-set-state:0 */
    if(this.state.modalVisible && !prevState.modalVisible){
      this.setState({
        date: this.props.value && this.getFormatter().parse(this.props.value, {locale: zhCn}),
      });
    }
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
