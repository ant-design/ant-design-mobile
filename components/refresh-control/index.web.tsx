import * as React from 'react';
import { PropTypes } from 'react';
// import classNames from 'classnames';
import PullToRefresh from 'rmc-pull-to-refresh';
import Icon from '../icon';
import splitObject from '../_util/splitObject';
export default class RefreshControl extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.any,
    icon: PropTypes.any,
    loading: PropTypes.any,
    hammerOptions: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'am-refresh-control',
    icon: <div>
      <div className="pull">
        <Icon type="down" />
      </div>
      <div className="release">
        <Icon type="up" />
      </div>
    </div>,
    loading: <Icon type="loading" />,
  };

  render() {
    let [{prefixCls, children, icon, loading, hammerOptions}, restProps] = splitObject(this.props,
      ['prefixCls', 'children', 'icon', 'loading', 'hammerOptions']);

    return (
      <PullToRefresh
        {...restProps}
        prefixCls={prefixCls}
        icon={icon}
        loading={loading}
        hammerOptions={hammerOptions || {}}
      >{children}</PullToRefresh>
    );
  }
}
