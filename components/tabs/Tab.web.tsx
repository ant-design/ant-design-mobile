import React from 'react';
import Badge from './Badge.web';

class Tab extends React.Component<any, any> {
  renderIcon = () => {
    const { tab, badge, dot, prefixCls } = this.props;
    if (badge) {
      return (
        <Badge text={badge} className={`${prefixCls}-badge tabpane-badge`}> {tab} </Badge>
      );
    }
    if (dot) {
      return (
        <Badge dot className={`${prefixCls}-dot tabpane-dot`}> {tab} </Badge>
      );
    }
    return tab;
  }
  render() {
    const {
      prefixCls,
    } = this.props;
    return (
      <div className={`${prefixCls}-icon`}>
        {this.renderIcon()}
      </div>
    );
  }
}

export default Tab;
