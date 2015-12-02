import React from 'react';
const {PropTypes} = React;
const ListFooter = React.createClass({
  propTypes: {
    content: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.string,
    didMount: PropTypes.func,
  },
  componentDidMount: function() {
    if(!!this.props.didMount) {
      this.props.didMount.call(this);
    }
  },
  _createFooterMarkup: function () {
    return {__html: this.props.content};
  },
  _onFooterClick: function(e) {
    e.preventDefault();
    this.props.onClick.call(this,e);
  },
  render: function(){
    let align = this.props.align === 'right' ? 'am-ft-right' : '';
    align = 'am-list-footer ' + align;
    return (
      <div className={align} style={this.props.style} onClick={this._onFooterClick} dangerouslySetInnerHTML={this._createFooterMarkup()}></div>
    );
  }
});

module.exports = ListFooter;
