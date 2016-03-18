import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './wingblank.less';

const WingBlank = React.createClass({
  propTypes: {
    mode: PropTypes.number,
  },
  getDefaultProps() {
    return {
      mode: 10
    };
  },
  render() {
    const { mode, children, className } = this.props;
    let wrapCls = classNames({
      'am-wingblank': true,
      [className] : className
    });
    wrapCls += ' am-wingblank-' + mode;

    return (
      <div className={wrapCls}>
        {children}
      </div>
    );
  }
});

module.exports = WingBlank;
