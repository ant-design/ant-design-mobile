import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export default class Progress extends React.Component {
  static propTypes = {
    status: PropTypes.oneOf(['invalid', 'active']),
    position: PropTypes.oneOf(['fixed', 'normal']),
    percent: PropTypes.number,
  }

  static defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
    status: 'active',   
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      closed: false,
    };
  }

  render() {
    const { prefixCls, status, percent, position, ...others } = this.props;
    const selected = this.state.selected;
    const percentStyle = {
      width: `${percent}%`,
      height: 0 
    }

    const wrapCls = classNames({
      [`${prefixCls}-outer`] : true,
      [`${prefixCls}-fixed-outer`]: position === 'fixed',
    });
  
    return status === 'invalid' ? null : (
      <div className={wrapCls} {...others}>
          <div className={`${prefixCls}-bar`} style={percentStyle}></div>
      </div>
    );
  }
}
