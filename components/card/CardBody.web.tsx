import { PropTypes } from 'react';
import * as React from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';

export interface CardBodyProps {
  prefixCls?:string;
}

export default class CardBody extends React.Component<CardBodyProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-card',
  };

  render() {
    let [{prefixCls, children, className}, restProps] = splitObject(
      this.props, ['prefixCls', 'children', 'className']
    );
    const wrapCls = classNames({
      [`${prefixCls}-body`]: true,
      [className]: className
    });

    return (
      <div {...restProps} className={wrapCls}>{children}</div>
    );
  }
}
