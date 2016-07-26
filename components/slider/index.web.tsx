import * as React from 'react';
import RcSlider from 'rc-slider';

export default class Slider extends React.Component {
  static defaultProps = {
    prefixCls: 'am-slider',
    tipTransitionName: 'zoom-down',
  };

  render() {
    return <RcSlider { ...this.props } />;
  }
}
