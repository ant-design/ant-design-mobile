import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.less';
const Message = React.createClass({
  propTypes: {
    type: PropTypes.string,
    main: PropTypes.string,
    sub: PropTypes.string,
  },
  getDefaultProps() {
    return {
      type: 'success',
      main: '',
      sub: '',
    };
  },
  render() {
    const { type, main, sub, className } = this.props;
    const wrapCls = classNames({
      'am-message': true,
      [className] : className
    });

    return (
      <div className={wrapCls}>
        <div className={'am-message-icon am-icon message-' + type}></div>
        <div className={'am-message-main am-message-main-' + type}>{main}</div>
        <div className="am-message-sub">{sub}</div>
      </div>
    );
  }
});
module.exports = Message;
