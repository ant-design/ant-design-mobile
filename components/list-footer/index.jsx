import React from 'react';
const {PropTypes} = React;
const ListFooter = React.createClass({
  propTypes: {
    content: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.string,
    didMount: PropTypes.func,
  },
  componentDidMount() {
    if (!!this.props.didMount) {
      this.props.didMount(this);
    }
  },
  _createFooterMarkup() {
    return this.props.children;
  },
  _onFooterClick(e) {
    e.preventDefault();
    if (!!this.props.onClick) {
      this.props.onClick.call(this, e);
    }
  },
  render(){
    let align = this.props.align === 'right' ? 'am-ft-right' : '';
    align = 'am-list-footer ' + align;
    return (
      <div className={align} style={this.props.style} onClick={this._onFooterClick}>
        {this._createFooterMarkup()}
      </div>
    );
  }
});

module.exports = ListFooter;
