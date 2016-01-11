import React, {PropTypes} from 'react';
function noop() {
}

const List = React.createClass({
  propTypes: {
    style: PropTypes.object,
    isIconList: PropTypes.bool,
  },
  getDefaultProps() {
    return {
      isIconList: false,
    };
  },
  render() {
    let { isIconList } = this.props;
    let wrapCls = 'am-list am-list-chip am-list-form ';
    if(isIconList) {
      wrapCls = wrapCls + 'am-list-iconlist ';
    }
    return (
      <div className={wrapCls} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
});

const Header = React.createClass({
  propTypes: {
    style: PropTypes.object,
  },
  getDefaultProps() {
    return {
    };
  },
  render(){
    return (
      <div className="am-list-header" style={this.props.style}>{this.props.children}</div>
    );
  }
});
const Body = React.createClass({
  render(){
    return (
      <div className="am-list-body">
        {this.props.children}
      </div>
    );
  }
});

const Footer = React.createClass({
  propTypes: {
    content: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.string,
    onClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      align: 'left',
      onClick: noop,
    };
  },
  _onFooterClick(e) {
    e.preventDefault();
    this.props.onClick.call(this, e);
  },
  render(){
    let align = this.props.align === 'right' ? 'am-list-footer am-ft-right' : 'am-list-footer';
    return (
      <div className={align} style={this.props.style} onClick={this._onFooterClick}>
        {this.props.children}
      </div>
    );
  }
});

const Item = React.createClass({
  propTypes: {
    extraCls: PropTypes.string,
    line: PropTypes.number,
    extra: PropTypes.any,
    icon: PropTypes.string,
    thumb: PropTypes.string,
    arrow: PropTypes.string,
    needActive: PropTypes.bool,
    onClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      extraCls: '',
      link: '',
      line: 1,
      onClick: noop,
      needActive: true
    };
  },
  _handleClick(e) {
    e.preventDefault();
    this.props.onClick.call(this, e);
  },
  _handleTouchStart() {
    if(this.props.needActive) {
      this.refs.listitem.style.backgroundColor = '#e4e4e4';
    }
  },
  _handleTouchEnd() {
    if(this.props.needActive) {
      this.refs.listitem.style.backgroundColor = '#fff';
    }
  },
  render(){
    let { extraCls, thumb, arrow, line } = this.props;
    let itemCls, thumbDom, arrowDom;

    if (line === 2) {
      itemCls = 'am-list-item am-list-item-13';
    } else {
      itemCls = 'am-list-item';
    }

    itemCls = extraCls === '' ? itemCls : itemCls + ' ' + extraCls;

    if (thumb) {
      if (line === 1) {
        thumbDom = <div className="am-list-thumb"><img src={thumb} width="32" height="32"/></div>;
      } else {
        thumbDom = <div className="am-list-thumb"><img src={thumb} width="45" height="45"/></div>;
      }
    }

    let extraDom = '';
    if (this.props.extra) {
      extraDom = <div className="am-list-extra">{this.props.extra}</div>;
    }

    /* arrow有值，则保留这个dom坑位 */
    if (!!arrow) {
      /* 当值是horizontal时,渲染水平箭头 */
      if (arrow === 'horizontal') {
        arrowDom = <div className="am-list-arrow">
          <span className="am-icon am-icon-arrow-horizontal"/>
        </div>;
        /* 当值是vertical时,渲染垂直箭头 */
      } else if (arrow === 'down') {
        arrowDom = <div className="am-list-arrow">
          <span className="am-icon am-icon-arrow-vertical"/></div>;
      } else if (arrow === 'up') {
        arrowDom = <div className="am-list-arrow">
          <span className="am-icon am-icon-arrow-vertical am-icon-arrow-vertical-up"/>
        </div>;
      } else {
        arrowDom = <div className="am-list-arrow"/>;
      }
    } else {
      arrowDom = null;
    }

    return (
      <div className={itemCls} onClick={this._handleClick} onTouchStart={this._handleTouchStart} onTouchEnd={this._handleTouchEnd} ref="listitem">
        {thumbDom}
        <div className="am-list-content">{this.props.children}</div>
        {extraDom}
        {arrowDom}
      </div>
    );
  }
});

List.Header = Header;
List.Body = Body;
List.Footer = Footer;
List.Item = Item;

module.exports = List;
