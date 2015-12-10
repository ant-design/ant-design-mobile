import React, {PropTypes} from 'react';
function noop() {}

const ListWarp = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    didMount: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      didMount: noop
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  render() {
    let {prefixCls} = this.props;
    return (
      <div className={prefixCls + '-list am-list-flat am-list-chip am-list-form am-list-43'} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListWarp;
