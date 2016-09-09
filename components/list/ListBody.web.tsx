import * as React from 'react';
import classNames from 'classnames';
import { ListBodyProps } from './ListPropTypes';

export default class ListBody extends React.Component<ListBodyProps, any> {
  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let { prefixCls, children, className, style } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-body`]: true,
      [className]: className,
    });

    return (
      <div className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}
