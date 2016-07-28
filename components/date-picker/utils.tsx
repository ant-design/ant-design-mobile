import zhCnPicker from './locale/zh_CN';
import moment from 'moment';

export function getFormatter(type) {
  let formatter;
  if (type === 'time') {
    formatter = ('HH:mm');
  } else if (type === 'datetime') {
    formatter = ('YYYY-MM-DD HH:mm');
  } else {
    formatter = ('YYYY-MM-DD');
  }
  return formatter;
}

export function getProps() {
  return {
    mode: 'datetime',
    locale: zhCnPicker,
    extra: '请选择',
    defaultDate: moment(),
    onChange() {
    },
    okText: '确定',
    dismissText: '取消',
    title: '',
  };
}