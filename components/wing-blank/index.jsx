import React, {PropTypes} from 'react';

const WingBlank = React.createClass({
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
    const { prefixCls, mode, children } = this.props;
    return (
      <div className={prefixCls + '-wingblank ' + prefixCls + '-wingblank-' + mode}>
        {children}
      </div>
    );
  }
});

module.exports = WingBlank;
