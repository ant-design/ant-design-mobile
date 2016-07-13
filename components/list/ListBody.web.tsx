import React, { PropTypes } from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';

export interface ListBodyProps {
  prefixCls?: string;
  style?: React.CSSProperties;
}

export default class ListBody extends React.Component<ListBodyProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let [{prefixCls, children, className, style}, restProps] = splitObject(this.props,
      ['prefixCls', 'children', 'className']);
    const wrapCls = classNames({
      [`${prefixCls}-body`]: true,
      [className]: className
    });

    return (
      <div {...restProps} className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}
