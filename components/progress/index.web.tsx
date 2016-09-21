import React from 'react';
import classNames from 'classnames';
import ProgressProps from './ProgressPropsType';

export default class Progress extends React.Component<ProgressProps, any> {
  static defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
    unfilled: 'show',
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {prefixCls, percent, position, unfilled} = this.props;
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
        <div className={`${prefixCls}-bar`} style={percentStyle}></div>
      </div>
    );
  }
}
