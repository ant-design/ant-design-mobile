import React, {PropTypes} from 'react';
function noop() {}

const ListFooter = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    content: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.string,
    onClick: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      align: 'left',
      onClick: noop,
    };
  },
  _onFooterClick(e) {
    e.preventDefault();
    this.props.onClick.call(this, e);
  },
  render(){
    let {prefixCls} = this.props;
    let align = this.props.align === 'right' ? prefixCls + '-list-footer ' + prefixCls + '-ft-right' : prefixCls + '-list-footer';
    return (
      <div className={align} style={this.props.style} onClick={this._onFooterClick}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListFooter;
