import React from 'react';
const {PropTypes} = React;
const ListItem = React.createClass({
  getInitialState: function() {
    return {
      arrowStyle:{}
    }
  },
  propTypes: {
    content: PropTypes.string,
    extra: PropTypes.string,
    icon: PropTypes.string,
    arrow: PropTypes.string,
    onClick: PropTypes.func,
    didMount: PropTypes.func,
  },
  componentDidMount: function() {
    if(!!this.props.didMount) {
      this.props.didMount.call(this);
    }
  },
  _createArrowMarkup: function () {
    let arrow = this.props.arrow,
      arrowDom;
    if(arrow == "horizontal") {
      arrowDom = '<div class="am-list-arrow"><span class="am-icon" data-am-mode="arrow-horizontal"></span></div>';
    } else if(arrow == "vertical") {
      arrowDom = '<div class="am-list-arrow"><span class="am-icon" data-am-mode="arrow-vertical"></span></div>';
    } else if(!!arrow) {
      arrowDom = '<div class="am-list-arrow"></div>';
    } else {
      arrowDom = "";
    }
    return {__html: arrowDom};
  },
  _handleClick: function(e) {
    e.preventDefault();
    this.props.onClick(e);
  },
  render: function(){
    let link = this.props.link || 'javascript:void(0);';
    return (
      <a href={link} className="am-list-item" onClick={this._handleClick}>
        <div className="am-list-content">{this.props.content}</div>
        <div className="am-list-extra">{this.props.extra}</div>
        <div style={this.state.arrowStyle} dangerouslySetInnerHTML={this._createArrowMarkup()}/>
      </a>
    );
  }
});
module.exports = ListItem;
