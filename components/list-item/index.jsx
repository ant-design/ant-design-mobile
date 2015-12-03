import React, {PropTypes} from 'react';
const ListItem = React.createClass({
  propTypes: {
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
      link: 'javascript:void(0);',
      onClick() {
      },
      didMount(){
      }
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
    let arrow = this.props.arrow;
    let arrowDom;
    /* arrow有值，则保留这个dom坑位 */
    if (!!arrow) {
      /* 当值是horizontal时,渲染水平箭头 */
      if (arrow === 'horizontal') {
        arrowDom = <div className="am-list-arrow"><span className="am-icon" data-am-mode="arrow-horizontal"></span></div>;
      /* 当值是vertical时,渲染垂直箭头 */
      } else if (arrow === 'vertical') {
        arrowDom = <div className="am-list-arrow"><span className="am-icon" data-am-mode="arrow-vertical"></span></div>;
      } else {
        arrowDom = <div className="am-list-arrow"></div>;
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
    let link = this.props.link;
    const extraFormData = this.state.extraFormData;
    const extraFormDataArray = [];
    for (const key in extraFormData) {
      extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    }
    return (
      <a href={link} className="am-list-item" onClick={this._handleClick}>
        <div className="am-list-content">{this.props.content}</div>
        <div className="am-list-extra">{this.props.extra}</div>
        {extraFormDataArray}
        <div style={this.props.arrowStyle}>
          {this._createArrowMarkup()}
        </div>
      </a>
    );
  }
});
module.exports = ListItem;
