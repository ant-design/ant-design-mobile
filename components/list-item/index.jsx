import React, {PropTypes} from 'react';
function noop() {}

const ListItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
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
    let {link, prefixCls, icon, thumb, arrow, line} = this.props;
    let itemCls, iconDom, thumbDom, arrowDom;

    if(line === 2) {
      itemCls = prefixCls + '-list-item ' + prefixCls + '-list-item-13';
    } else {
      itemCls = prefixCls + '-list-item';
    }

    if(icon) {
      iconDom = <div className={prefixCls + '-list-icon'}><img src={icon} width="29" height="29"/></div>;
    }

    if(thumb) {
      if(line === 1) {
        thumbDom = <div className={prefixCls + '-list-thumb'}><img src={thumb} width="32" height="32"/></div>;
      } else {
        thumbDom = <div className={prefixCls + '-list-thumb'}><img src={thumb} width="45" height="45"/></div>;
      }
    }

    let extraDom = '';
    if(this.props.extra) {
      extraDom = <div className={prefixCls + '-list-extra'}>{this.props.extra}</div>;
    }

    /* arrow有值，则保留这个dom坑位 */
    if (!!arrow) {
      /* 当值是horizontal时,渲染水平箭头 */
      if (arrow === 'horizontal') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span className={prefixCls + '-icon ' + prefixCls + '-icon-arrow-horizontal'}></span></div>;
        /* 当值是vertical时,渲染垂直箭头 */
      } else if (arrow === 'down') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span className={prefixCls + '-icon ' + prefixCls + '-icon-arrow-vertical'}></span></div>;
      } else if (arrow === 'up') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span className={prefixCls + '-icon ' + prefixCls + '-icon-arrow-vertical ' + prefixCls + '-icon-arrow-vertical-up'}></span></div>;
      } else {
        arrowDom = <div className={prefixCls + '-list-arrow'}></div>;
      }
    } else {
      arrowDom = null;
    }
    if(!!link) {
      return (
        <a href={link} className={itemCls} onClick={this._handleClick}>
          {iconDom}
          {thumbDom}
          <div className={prefixCls + '-list-content'}>{this.props.children}</div>
          {extraDom}
          {arrowDom}
        </a>
      );
    } else {
      return (
        <div className={itemCls} onClick={this._handleClick}>
          {iconDom}
          {thumbDom}
          <div className={prefixCls + '-list-content'}>{this.props.children}</div>
          {extraDom}
          {arrowDom}
        </div>
      );
    }
  }
});
module.exports = ListItem;
