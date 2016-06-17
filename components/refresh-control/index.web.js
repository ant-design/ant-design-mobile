import React, { PropTypes } from 'react';
// import classNames from 'classnames';
import PullToRefresh from 'rmc-pull-to-refresh';
import Icon from '../icon';

export default class RefreshControl extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.any,
    icon: PropTypes.any,
    loading: PropTypes.any,
  }

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
  }

  render() {
    const { prefixCls, children, icon, loading, ...other } = this.props;
    // const wrapCls = classNames({
    // });
    return (
      <PullToRefresh
        {...other}
        prefixCls={prefixCls}
        icon={icon}
        loading={loading}
      >{children}</PullToRefresh>
    );
  }
}
