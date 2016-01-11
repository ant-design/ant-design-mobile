import React, {PropTypes} from 'react';

const WhiteSpace = React.createClass({
  propTypes: {
    mode: PropTypes.string,
  },
  getDefaultProps() {
    return {
      mode: '10'
    };
  },
  render() {
    const { mode } = this.props;
    return (
      <div className={'am-whitespace am-whitespace-' + mode}></div>
    );
  }
});

module.exports = WhiteSpace;
