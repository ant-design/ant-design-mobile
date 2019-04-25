import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Calendar as RMCalendar } from 'rmc-calendar';
import { getComponentLocale } from '../_util/getLocale';
import Icon from '../icon';
import { CalendarProps } from './PropsType';

export default class Calendar extends React.Component<CalendarProps, any> {
  static defaultProps = {
    prefixCls: 'am-calendar',
    timePickerPrefixCls: 'am-picker',
    timePickerPickerPrefixCls: 'am-picker-col',
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  render() {
    // tslint:disable-next-line:no-this-assignment
    const { props, context } = this;
    const locale = getComponentLocale(props, context, 'Calendar', () =>
      require('./locale/zh_CN'),
    );
    const Header = RMCalendar.DefaultHeader;

    return (
      <RMCalendar
        locale={locale}
        // tslint:disable-next-line:jsx-no-multiline-js
        renderHeader={headerProps => (
          <Header {...headerProps} closeIcon={<Icon type="cross" />} />
        )}
        {...props}
      />
    );
  }
}
