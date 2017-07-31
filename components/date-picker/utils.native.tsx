function formatIt(date, form) {
  const pad = n => n < 10 ? `0${n}` : n;
  let dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  let timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  if (form === 'YYYY-MM-DD') {
    return dateStr;
  }
  if (form === 'HH:mm') {
    return timeStr;
  }
  return `${dateStr} ${timeStr}`;
}

export function formatFn(instance, value) {
  const formatsEnum = {
    date: 'YYYY-MM-DD',
    time: 'HH:mm',
    datetime: 'YYYY-MM-DD HH:mm',
  };
  const { format } = instance.props;
  const type = typeof format;
  if (type === 'string') {
    return formatIt(value, format);
  }
  if (type === 'function') {
    return format(value);
  }
  return formatIt(value, formatsEnum[instance.props.mode]);
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
  const now = new Date();
  if (minDate && now < minDate) {
    return minDate;
  }
  if (maxDate && maxDate < now) {
    return minDate;
  }
  return now;
}
