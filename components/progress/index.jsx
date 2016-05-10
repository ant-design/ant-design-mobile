import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Progress extends React.Component {
  static propTypes = {
    position: PropTypes.oneOf(['fixed', 'normal']),
    percent: PropTypes.number,
  }

  static defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
  }

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { prefixCls, percent, position, ...others } = this.props;
    const percentStyle = {
      width: `${percent}%`,
      height: 0
    };

    const wrapCls = classNames({
      [`${prefixCls}-outer`]: true,
      [`${prefixCls}-fixed-outer`]: position === 'fixed',
    });

    return (
      <div className={wrapCls} {...others}>
        <div className={`${prefixCls}-bar`} style={percentStyle}></div>
      </div>
    );
  }
}
