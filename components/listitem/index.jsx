import React from 'react';
const {PropTypes} = React;
const ListItem = React.createClass({
  propTypes: {
    content       : PropTypes.string,
    extra         : PropTypes.string,
    icon          : PropTypes.string,
    arrow         : PropTypes.string,
    onClick       : PropTypes.func,
    didMount      : PropTypes.func,
    extraFormData : PropTypes.object
  },
  getInitialState: function() {
    return {
      content       : this.props.content||'',
      extra         : this.props.extra||'',
      icon          : this.props.icon||'',
      extraFormData : this.props.extraFormData||{}
    };
  },
  componentDidMount: function() {
    if(!!this.props.didMount) {
      this.props.didMount(this);
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
    this.props.onClick.call(this,e);
  },
  render: function(){
    let link = this.props.link || 'javascript:void(0);';
    var extraFormData = this.state.extraFormData;
    var extraFormDataArray = [];
    for(var key in extraFormData) {
      extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    }
    return (
      <a href={link} className="am-list-item" onClick={this._handleClick}>
        <div className="am-list-content">{this.state.content}</div>
        <div className="am-list-extra">{this.state.extra}</div>
        {extraFormDataArray}
        <div style={this.props.arrowStyle} dangerouslySetInnerHTML={this._createArrowMarkup()}/>
      </a>
    );
  }
});
module.exports = ListItem;

