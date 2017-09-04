import React from 'react';
import ListView from 'rmc-list-view';
import Icon from '../icon';

ListView.RefreshControl.defaultProps = {
  ...ListView.RefreshControl.defaultProps,
  prefixCls: 'am-refresh-control',
  icon: [
    <div key="0" className="am-refresh-control-pull">
      <span>下拉可以刷新</span>
    </div>,
    <div key="1" className="am-refresh-control-release">
      <span>松开立即刷新</span>
    </div>,
  ],
  loading: <Icon type="loading" />,
  refreshing: false,
  distanceToRefresh: 25,
};

export default ListView.RefreshControl;
