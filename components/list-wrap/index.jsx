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
      <div data-mode="flat chip form 43px" className={prefixCls + '-list'} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListWarp;
