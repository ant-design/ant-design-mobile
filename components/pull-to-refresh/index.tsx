import React from 'react';
import RPullToRefresh from 'rmc-pull-to-refresh';
import { PropsType } from 'rmc-pull-to-refresh/lib/PropsType';
import Icon from '../icon';

export default class PullToRefresh extends React.Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'am-pull-to-refresh',
  };
  render() {
    const ind = {
      activate: '松开立即刷新',
      deactivate: '下拉可以刷新',
      release: <Icon type="loading" />,
      finish: '完成刷新',
      ...this.props.indicator,
    };
    return <RPullToRefresh {...this.props} indicator={ind} />;
  }
}
