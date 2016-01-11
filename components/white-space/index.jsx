import React, {PropTypes} from 'react';

const WhiteSpace = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    mode: PropTypes.string,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      mode: '10'
    };
  },
  render() {
    const { prefixCls, mode } = this.props;
    return (
      <div className={prefixCls + '-whitespace ' + prefixCls + '-whitespace-' + mode}></div>
    );
  }
});

module.exports = WhiteSpace;
