import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

const Article = React.createClass({
  propTypes: {
    title: PropTypes.string,
    time: PropTypes.string,
    img: PropTypes.string,
    onMoreClick: PropTypes.func,
    children: PropTypes.string,
  },
  getDefaultProps() {
    return {
      title: '',
      time: '',
      img: '',
      onMoreClick: noop
    };
  },
  render() {
    const { title, time, img, onMoreClick, children, className } = this.props;
    const wrapCls = classNames({
      'am-article': true,
      [className]: className
    });

    let titleDom = title ? <h2>{title}</h2> : '';
    let timeDom = time ? <time>{time}</time> : '';
    let imgDom = img ? <p><img src={img} /></p> : '';
    let onMoreDom = onMoreClick !== noop ? (<div className="am-article-footer">
      <a onClick={onMoreClick} className="am-article-more">更多</a>
    </div>) : '';
    return (
      <div className={wrapCls}>
        {titleDom}
        {timeDom}
        {imgDom}
        <p>{children}</p>
        {onMoreDom}
      </div>
    );
  }
});
module.exports = Article;
