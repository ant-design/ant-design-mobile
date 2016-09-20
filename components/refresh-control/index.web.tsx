import React from 'react';
import { PropTypes } from 'react';
import PullToRefresh from 'rmc-pull-to-refresh';
import Icon from '../icon';
import tsPropsType from './PropsType';
import splitObject from '../_util/splitObject';

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
    loading: <div style={{ lineHeight: '50px' }}><Icon type="loading"/></div>,
    refreshing: false,
  };

  resolveCallback: Function;

  loadingFunction = () => {
    return new Promise((resolve, reject) => {
      this.props.onRefresh();
      this.resolveCallback = resolve;
    });
  }

  render() {
    let [{ refreshing }, restProps] = splitObject(this.props,
      ['onRefresh', 'refreshing']);
    const refreshProps = {
      loadingFunction: this.loadingFunction,
    };
    if (!refreshing && this.resolveCallback) {
      this.resolveCallback();
    }
    return (
      <PullToRefresh ref="refreshControl"
        {...refreshProps}
        {...restProps}
      />
    );
  }
}
