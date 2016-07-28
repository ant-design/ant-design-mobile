import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import ProgressProps from './ProgressPropsType';

export default class Progress extends React.Component<ProgressProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    position: PropTypes.oneOf(['fixed', 'normal']),
    percent: PropTypes.number,
  };

  static defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {prefixCls, percent, position} = this.props;
    const percentStyle = {
      width: `${percent}%`,
      height: 0,
    };

    const wrapCls = classNames({
      [`${prefixCls}-outer`]: true,
      [`${prefixCls}-fixed-outer`]: position === 'fixed',
    });

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}-bar`} style={percentStyle}></div>
      </div>
    );
  }
}
