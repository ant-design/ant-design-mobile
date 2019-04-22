import * as React from 'react';
import * as PropTypes from 'prop-types';
import RPullToRefresh from 'rmc-pull-to-refresh';
import { PropsType } from 'rmc-pull-to-refresh/lib/PropsType';
import { getComponentLocale } from '../_util/getLocale';
import Icon from '../icon';

export default class PullToRefresh extends React.Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'am-pull-to-refresh',
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  render() {
    // tslint:disable-next-line:variable-name
    const { activateText, deactivateText, finishText } = getComponentLocale(
      this.props,
      this.context,
      'PullToRefresh',
      () => require('./locale/zh_CN'),
    );

    const ind = {
      activate: activateText,
      deactivate: deactivateText,
      release: <Icon type="loading" />,
      finish: finishText,
      ...this.props.indicator,
    };
    return <RPullToRefresh {...this.props} indicator={ind} />;
  }
}
