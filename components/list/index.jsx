import React, {PropTypes} from 'react';
function noop() {
}

const List = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    isIconList: PropTypes.bool,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      isIconList: false,
    };
  },
  render() {
    let {prefixCls, isIconList} = this.props;
    let wrapCls = prefixCls + '-list ' + prefixCls + '-list-flat ' + prefixCls + '-list-chip ' + prefixCls + '-list-form ';
    if (isIconList) {
      wrapCls = wrapCls + prefixCls + '-list-iconlist ';
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
    prefixCls: PropTypes.string,
    style: PropTypes.object,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
    };
  },
  render(){
    let {prefixCls} = this.props;
    return (
      <div className={prefixCls + '-list-header'} style={this.props.style}>{this.props.children}</div>
    );
  }
});
const Body = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
    };
  },
  render(){
    let {prefixCls} = this.props;
    return (
      <div className={prefixCls + '-list-body'}>
        {this.props.children}
      </div>
    );
  }
});

const Footer = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    content: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.string,
    onClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      align: 'left',
      onClick: noop,
    };
  },
  _onFooterClick(e) {
    e.preventDefault();
    this.props.onClick.call(this, e);
  },
  render(){
    let {prefixCls} = this.props;
    let align = this.props.align === 'right' ? prefixCls + '-list-footer ' + prefixCls + '-ft-right' : prefixCls + '-list-footer';
    return (
      <div className={align} style={this.props.style} onClick={this._onFooterClick}>
        {this.props.children}
      </div>
    );
  }
});

const Item = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    extraCls: PropTypes.string,
    link: PropTypes.string,
    line: PropTypes.number,
    extra: PropTypes.any,
    icon: PropTypes.string,
    thumb: PropTypes.string,
    arrow: PropTypes.string,
    onClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      extraCls: '',
      link: '',
      line: 1,
      onClick: noop,
    };
  },
  _handleClick(e) {
    e.preventDefault();
    this.props.onClick.call(this, e);
  },
  render(){
    let {link, prefixCls, extraCls, thumb, arrow, line } = this.props;
    let itemCls, thumbDom, arrowDom;

    if (line === 2) {
      itemCls = prefixCls + '-list-item ' + prefixCls + '-list-item-13';
    } else {
      itemCls = prefixCls + '-list-item';
    }

    itemCls = extraCls === '' ? itemCls : itemCls + ' ' + extraCls;

    if (thumb) {
      if (line === 1) {
        thumbDom = <div className={prefixCls + '-list-thumb'}><img src={thumb} width="32" height="32"/></div>;
      } else {
        thumbDom = <div className={prefixCls + '-list-thumb'}><img src={thumb} width="45" height="45"/></div>;
      }
    }

    let extraDom = '';
    if (this.props.extra) {
      extraDom = <div className={prefixCls + '-list-extra'}>{this.props.extra}</div>;
    }

    if (!!arrow) {
      if (arrow === 'horizontal') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span
          className={prefixCls + '-icon ' + prefixCls + '-icon-arrow-horizontal'}></span></div>;
      } else if (arrow === 'down') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span
          className={prefixCls + '-icon ' + prefixCls + '-icon-arrow-vertical'}></span></div>;
      } else if (arrow === 'up') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span
          className={prefixCls + '-icon ' + prefixCls + '-icon-arrow-vertical ' + prefixCls + '-icon-arrow-vertical-up'}></span>
        </div>;
      } else {
        arrowDom = <div className={prefixCls + '-list-arrow'}></div>;
      }
    } else {
      arrowDom = null;
    }
    return (
      <a href={link || '#'} className={itemCls} onClick={this._handleClick}>
        {thumbDom}
        <div className={prefixCls + '-list-content'}>{this.props.children}</div>
        {extraDom}
        {arrowDom}
      </a>
    );
  }
});

List.Header = Header;
List.Body = Body;
List.Footer = Footer;
List.Item = Item;

module.exports = List;
