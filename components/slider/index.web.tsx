import * as React from 'react';
import RcSlider from 'rc-slider';
import SliderProps from './SliderPropsType';

export default class Slider extends React.Component<SliderProps, any> {
  static defaultProps = {
    prefixCls: 'am-slider',
    tipTransitionName: 'zoom-down',
  };

  render() {
    return (
      <div className={`${this.props.prefixCls}-wrapper`}><RcSlider { ...this.props } /></div>
    );
  }
}
