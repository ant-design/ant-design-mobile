import moment from 'moment';

function getFormatter(type) {
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

export function formatFn(instance, value) {
  const {format} = instance.props;
  const type = typeof format;
  if (type === 'string') {
    return value.format(type);
  }
  if (type === 'function') {
    return format(value);
  }
  return value.format(getFormatter(instance.props.mode));
}

export function getProps() {
  return {
    mode: 'datetime',
    extra: '请选择',
    onChange() {
    },
    title: '',
  };
}

export function getDefaultDate(props) {
  const { defaultDate, minDate, maxDate } = props;
  if (defaultDate) {
    return defaultDate;
  }
  const now = moment();
  if (minDate && now.isBefore(minDate)) {
    return minDate;
  }
  if (maxDate && maxDate.isBefore(now)) {
    return minDate;
  }
  return now;
}
