import React, {PropTypes} from 'react';

const WingBlank = React.createClass({
  propTypes: {
    mode: PropTypes.number,
  },
  getDefaultProps() {
    return {
      mode: 10
    };
  },
  render() {
    const { mode, children } = this.props;
    return (
      <div className={'am-wingblank am-wingblank-' + mode}>
        {children}
      </div>
    );
  }
});

module.exports = WingBlank;
