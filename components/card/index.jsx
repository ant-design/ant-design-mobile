import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './index.less';
function noop() {}

const Card = React.createClass({
  render() {
    const { children, className } = this.props;
    const wrapCls = classNames({
      'am-card': true,
      [className]: className
    });

    return (
      <div className={wrapCls}>
        {children}
      </div>
    );
  }
});

const Item = React.createClass({
  propTypes: {
    title: PropTypes.string,
    subject: PropTypes.string,
    origin: PropTypes.string,
    time: PropTypes.string,
    onClick: PropTypes.func,
    onMoreClick: PropTypes.func,
    children: PropTypes.string,
  },
  getDefaultProps() {
    return {
      title: '',
      subject: '',
      origin: '',
      time: '',
      onClick: noop,
      onMoreClick: noop,
    };
  },
  render() {
    const { title, subject, origin, time, children, onMoreClick, onClick, className } = this.props;

    const wrapCls = classNames({
      'am-card-item': true,
      [className]: className
    });

    let titleDom = title ? (<div className="am-card-item-header">
      <h3 className="am-card-item-title">{title}</h3>
    </div>) : '';
    let timeDom = time ? <div className="am-card-item-time">{time}</div> : '';
    let originDom = origin ? <div className="am-card-item-origin">{origin}</div> : '';
    let subjectDom = subject ? <div className="am-card-item-subject">{subject}</div> : '';
    let childrenDom = children ? <div className="am-card-item-brief">{children}</div> : '';
    let onMoreDom = onMoreClick !== noop ? (<div className="am-card-item-footer">
      <a onClick={onMoreClick} className="am-card-item-more">更多</a>
    </div>) : '';
    return (
      <div className={wrapCls} onClick={onClick}>
        {titleDom}
        <div className="am-card-item-content">
          {subjectDom}
          {childrenDom}
          <div className="am-card-item-footnote">
            {originDom}
            {timeDom}
          </div>
        </div>
        {onMoreDom}
      </div>
    );
  }
});

Card.Item = Item;

module.exports = Card;
