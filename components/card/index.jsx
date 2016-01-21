import React, {PropTypes} from 'react';
function noop() {}

const Card = React.createClass({
  render() {
    const { children } = this.props;
    return (
      <div className="am-card">
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
    const { title, subject, origin, time, children, onMoreClick, onClick } = this.props;
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
      <div className="am-card-item" onClick={onClick}>
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
