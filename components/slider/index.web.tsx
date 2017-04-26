import React from 'react';
import RcSlider from 'rc-slider/lib/Slider';
import SliderProps from './PropsType';

export default class Slider extends React.Component<SliderProps, any> {
  static defaultProps = {
    prefixCls: 'am-slider',
  };
  render() {
    return (
      <div className={`${this.props.prefixCls}-wrapper`}><RcSlider {...this.props} /></div>
    );
  }
}
