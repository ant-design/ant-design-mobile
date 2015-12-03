import React, {PropTypes} from 'react';
const ListFooter = React.createClass({
  propTypes: {
    content: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.string,
    onClick: PropTypes.func,
    didMount: PropTypes.func,
  },
  getDefaultProps() {
    return {
      didMount(){
      },
      onClick(){
      }
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  _createFooterMarkup() {
    return this.props.children;
  },
  _onFooterClick(e) {
    e.preventDefault();
    this.props.onClick.call(this, e);
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
