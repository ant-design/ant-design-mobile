import React from 'react';
import { PropTypes } from 'react';
import PullToRefresh from 'rmc-pull-to-refresh';
import Icon from '../icon';
import tsPropsType from './PropsType';

export default class RefreshControl extends React.Component<tsPropsType, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.any,
    icon: PropTypes.any,
    loading: PropTypes.any,
    scrollerOptions: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'am-refresh-control',
    icon: <div style={{lineHeight: '50px'}}>
      <div className="am-refresh-control-pull">
        <Icon type="arrow-down"/> 下拉
      </div>
      <div className="am-refresh-control-release">
        <Icon type="arrow-up"/> 释放
      </div>
    </div>,
    loading: <div style={{lineHeight: '50px'}}><Icon type="loading"/></div>,
  };

  render() {
    return (
      <PullToRefresh
        {...this.props}
      />
    );
  }
}
