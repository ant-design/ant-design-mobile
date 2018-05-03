import RcRange from 'rc-slider/lib/Range';
import * as React from 'react';
import { RangePropsType } from './PropsType';

export interface RangeProps extends RangePropsType {
  prefixCls?: string;
  handleStyle?: React.CSSProperties[];
  trackStyle?: React.CSSProperties[];
  railStyle?: React.CSSProperties;
}

export default class Range extends React.Component<RangeProps, any> {
  static defaultProps = {
    prefixCls: 'am-slider',
  };

  render() {
    return (
      <div className={`${this.props.prefixCls}-wrapper`}>
        <RcRange {...this.props} />
      </div>
    );
  }
}
