import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

export default class ListItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    line: PropTypes.number,
    extra: PropTypes.any,
    icon: PropTypes.string,
    thumb: PropTypes.oneOfType([PropTypes.string, React.PropTypes.object, React.PropTypes.node]),
    arrow: PropTypes.string,
    needActive: PropTypes.bool,
    onClick: PropTypes.func,
    error: PropTypes.bool,
    align: PropTypes.string,
  };

  static defaultProps = {
    link: '',
    line: 1,
    onClick: noop,
    needActive: true,
    error: false,
    align: 'middle',
  };

  onClick = (e) => {
    this.props.onClick(e);
  };

  onTouchStart = () => {
    if (this.props.needActive) {
      this.refs.listitem.style.backgroundColor = '#d9d9d9';
    }
  };

  onTouchEnd = () => {
    if (this.props.needActive) {
      this.refs.listitem.style.backgroundColor = '#fff';
    }
  };

  render() {
    let { style, thumb, arrow, line, error, children, extra, className, align } = this.props;
    let thumbDom;
    let arrowDom;

    const wrapCls = classNames({
      'am-list-item': true,
      'am-list-item-13': line === 2,
      'am-list-item-error': error,
      'am-list-item-top': align === 'top',
      'am-list-item-middle': align === 'middle',
      'am-list-item-bottom': align === 'bottom',
      [className]: className
    });

    if (thumb) {
      if (typeof(thumb) === 'string') {
        if (line === 1) {
          thumbDom = <div className="am-list-thumb"><img src={thumb} /></div>;
        } else {
          thumbDom = <div className="am-list-thumb"><img src={thumb} /></div>;
        }
      } else {
        thumbDom = <div className="am-list-thumb">{thumb}</div>;
      }
    }

    /* arrow有值，则保留这个dom坑位 */
    if (!!arrow) {
      /* 当值是horizontal时,渲染水平箭头 */
      if (arrow === 'horizontal') {
        arrowDom = (<div className="am-list-arrow"><span className="am-icon am-icon-arrow-horizontal" /></div>);
        /* 当值是vertical时,渲染垂直箭头 */
      } else if (arrow === 'down') {
        arrowDom = (<div className="am-list-arrow"><span className="am-icon am-icon-arrow-vertical" /></div>);
      } else if (arrow === 'up') {
        arrowDom = (<div className="am-list-arrow"><span className="am-icon am-icon-arrow-vertical am-icon-arrow-vertical-up" /></div>);
      } else {
        arrowDom = (<div className="am-list-arrow" />);
      }
    } else {
      arrowDom = null;
    }

    return (
      <div className={wrapCls} style={style} onClick={this.onClick} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} onTouchCancel={this.onTouchEnd} ref="listitem">
        {thumbDom}
        {children ? <div className="am-list-content">{children}</div> : null}
        {extra ? <div className="am-list-extra">{extra}</div> : null}
        {arrowDom}
      </div>
    );
  }
}
