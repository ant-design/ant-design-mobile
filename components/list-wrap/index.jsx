import React from 'react';
const {PropTypes} = React;
const ListWarp = React.createClass({
  propTypes: {
    didMount: PropTypes.func,
  },
  componentDidMount() {
    if (!!this.props.didMount) {
      this.props.didMount(this);
    }
  },
  render() {
    return (
      <div data-am-mode="flat chip form 43px" className="am-list">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ListWarp;
