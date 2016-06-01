import React, { PropTypes } from 'react';
// import classNames from 'classnames';
import MListView, { DataSource } from 'rmc-list-view';

export default class ListView extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  }

  static defaultProps = {
    prefixCls: 'am-refresh-control',
  }

  render() {
    const { prefixCls, ...other } = this.props;
    // const wrapCls = classNames({
    // });
    return (
      <MListView
        {...other}
        prefixCls={prefixCls} />
    );
  }
}

ListView.DataSource = DataSource;
