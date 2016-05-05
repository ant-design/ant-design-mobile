import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export default class Progress extends React.Component {
  static propTypes = {
    status: PropTypes.oneOf(['invalid', 'active']),
    percent: PropTypes.number,
  }

  static defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
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
    const { prefixCls, status, percent, ...others } = this.props;
    const selected = this.state.selected;
    const percentStyle = {
      width: `${percent}%`,
      height: 0 
    }

    return status === 'invalid' ? null : (
      <div>
      <div className={`${prefixCls}-outer`}>
          <div className={`${prefixCls}-bar`} style={percentStyle}></div>
      </div>
      </div>

    );
  }
}
