import React, {PropTypes} from 'react';
function noop() {}

const ListItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    extra: PropTypes.string,
    icon: PropTypes.string,
    arrow: PropTypes.string,
    onClick: PropTypes.func,
    didMount: PropTypes.func,
    extraFormData: PropTypes.object
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      link: '#',
      onClick: noop,
      didMount: noop
    };
  },
  getInitialState() {
    return {
      extraFormData:this.props.extraFormData
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  _createArrowMarkup() {
    let {arrow, prefixCls} = this.props;
    let arrowDom;
    /* arrow有值，则保留这个dom坑位 */
    if (!!arrow) {
      /* 当值是horizontal时,渲染水平箭头 */
      if (arrow === 'horizontal') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span className={prefixCls + '-icon'} data-mode="arrow-horizontal"></span></div>;
      /* 当值是vertical时,渲染垂直箭头 */
      } else if (arrow === 'vertical') {
        arrowDom = <div className={prefixCls + '-list-arrow'}><span className={prefixCls + '-icon'} data-mode="arrow-vertical"></span></div>;
      } else {
        arrowDom = <div className={prefixCls + '-list-arrow'}></div>;
      }
    } else {
      arrowDom = null;
    }
    return arrowDom;
  },
  _handleClick(e) {
    e.preventDefault();
    this.props.onClick.call(this, e);
  },
  render(){
    let {link, prefixCls} = this.props;
    const extraFormData = this.state.extraFormData;
    const extraFormDataArray = [];
    for (const key in extraFormData) {
      extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    }
    return (
      <a href={link} className={prefixCls + '-list-item'} onClick={this._handleClick}>
        <div className={prefixCls + '-list-content'}>{this.props.content}</div>
        <div className={prefixCls + '-list-extra'}>{this.props.extra}</div>
        {extraFormDataArray}
        <div style={this.props.arrowStyle}>
          {this._createArrowMarkup()}
        </div>
      </a>
    );
  }
});
module.exports = ListItem;
