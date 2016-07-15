import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';

export interface FlexItemProps {
  prefixCls?: string;
  style?: React.CSSProperties;
}

export default class FlexItem extends React.Component<FlexItemProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'am-flexbox'
  };
  render() {
    let[{ children, className, prefixCls }, restProps] = splitObject(this.props,
      ['children', 'className', 'prefixCls']);
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [className]: className
    });
    return (
      <div
        {...restProps}
        className={wrapCls}
      >{children}</div>
    );
  }
}
