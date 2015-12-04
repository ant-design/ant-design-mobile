import React, {PropTypes} from 'react';
function noop() {}

const ListHeader = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    label: PropTypes.string,
    style: PropTypes.object,
    didMount: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      didMount: noop,
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  render(){
    let {prefixCls} = this.props;
    return (
      <div className={prefixCls + '-list-header'} style={this.props.style}>{this.props.label}</div>
    );
  }
});
module.exports = ListHeader;
