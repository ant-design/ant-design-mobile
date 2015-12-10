import React, {PropTypes} from 'react';
function noop() {}

const ListItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.any,
    extra: PropTypes.any,
    icon: PropTypes.string,
    arrow: PropTypes.string,
    onClick: PropTypes.func,
    didMount: PropTypes.func,
    willUnmount:PropTypes.func,
    extraFormData: PropTypes.object
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      link: '#',
      onClick: noop,
      didMount: noop,
      willUnmount:noop
    };
  },
  getInitialState() {
    return {
      extra: this.props.extra,
      extraFormData:this.props.extraFormData
    };
  },
  componentDidMount() {
    this.props.didMount.call(this, this);
  },
  componentWillUnmount(){
    this.props.willUnmount(this);
  },
  _handleClick(e) {
    e.preventDefault();
    this.props.onClick.call(this, e);
  },
  render(){
    let {link, prefixCls, icon, arrow} = this.props;
    let iconDom, arrowDom;
    const extraFormData = this.state.extraFormData;
    const extraFormDataArray = [];
    for (const key in extraFormData) {
      extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    }

    if(icon) {
      iconDom = <div className="am-list-icon"><img src={icon} width="22" height="22" alt=""/></div>;
    }

    let extraDom = '';
    if(this.state.extra) {
      extraDom = <div className={prefixCls + '-list-extra'}>{this.state.extra}</div>;
    }

    /* arrow有值，则保留这个dom坑位 */
    if (!!arrow) {
      /* 当值是horizontal时,渲染水平箭头 */
      if (arrow === 'horizontal') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span className={prefixCls + '-icon am-icon-arrow-horizontal'}></span></div>;
        /* 当值是vertical时,渲染垂直箭头 */
      } else if (arrow === 'down') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span className={prefixCls + '-icon am-icon-arrow-vertical'}></span></div>;
      } else if (arrow === 'up') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span className={prefixCls + '-icon am-icon-arrow-vertical am-icon-arrow-vertical-up'}></span></div>;
      } else {
        arrowDom = <div className={prefixCls + '-list-arrow'}></div>;
      }
    } else {
      arrowDom = null;
    }
    return (
      <a href={link} className={prefixCls + '-list-item'} onClick={this._handleClick}>
        {iconDom}
        <div className={prefixCls + '-list-content'}>{this.props.content}</div>
        {extraDom}
        {arrowDom}
        {extraFormDataArray}
      </a>
    );
  }
});
module.exports = ListItem;
