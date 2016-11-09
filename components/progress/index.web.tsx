import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import ProgressProps from './PropsType';

export default class Progress extends React.Component<ProgressProps, any> {
  static defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
    unfilled: 'show',
  };
  render() {
    const { prefixCls, percent, position, unfilled, style = {} } = this.props;
    const percentStyle = {
      width: `${percent}%`,
      height: 0,
    };

    const wrapCls = classNames({
      [`${prefixCls}-outer`]: true,
      [`${prefixCls}-fixed-outer`]: position === 'fixed',
      [`${prefixCls}-hide-outer`]: unfilled === 'hide',
    });

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}-bar`} style={assign({}, style, percentStyle)}></div>
      </div>
    );
  }
}
