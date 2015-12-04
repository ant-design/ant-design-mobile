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
      align: 'left',
      onClick(){
      },
      didMount(){
      }
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  _onFooterClick(e) {
    e.preventDefault();
    this.props.onClick.call(this, e);
  },
  render(){
    let align = this.props.align === 'right' ? 'am-list-footer am-ft-right' : 'am-list-footer';
    return (
      <div className={align} style={this.props.style} onClick={this._onFooterClick}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListFooter;
