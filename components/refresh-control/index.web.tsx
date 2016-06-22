import React, { PropTypes } from 'react';
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
    let [{prefixCls, children, icon, loading}, restProps] = splitObject(this.props,
      ['prefixCls', 'children', 'icon','loading']);
    // const wrapCls = classNames({
    // });
    return (
      <PullToRefresh
        {...restProps}
        prefixCls={prefixCls}
        icon={icon}
        loading={loading}
      >{children}</PullToRefresh>
    );
  }
}
