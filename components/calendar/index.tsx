import React from 'react';
import Icon from '../icon';
import PropTypes from 'prop-types';
import tsPropsType from './PropsType';
import { Calendar as RMCalendar } from 'rmc-calendar';
import { getComponentLocale } from '../_util/getLocale';

export default class Calendar extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-calendar',
    timePickerPrefixCls: 'am-picker',
    timePickerPickerPrefixCls: 'am-picker-col',
  } as tsPropsType;

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  render() {
    const { props, context } = this;
    const locale = getComponentLocale(props, context, 'Calendar', () => require('./locale/zh_CN'));
    const Header = RMCalendar.DefaultHeader;

    return (
      <RMCalendar
        locale={locale}
        renderHeader={headerProps => <Header {...headerProps} closeIcon={<Icon type="cross"/>} />}
        {...props}
      />
    );
  }
}
