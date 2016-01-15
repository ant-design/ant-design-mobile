import React, {PropTypes} from 'react';

const Result = React.createClass({
  propTypes: {
    type: PropTypes.string,
    mode: PropTypes.string,
    main: PropTypes.string,
    sub: PropTypes.string,
    brief: PropTypes.string,
  },
  getDefaultProps() {
    return {
      type: 'success',
      mode: '',
      main: '',
      sub: '',
      brief: '',
    };
  },
  render() {
    const { type, main, sub, brief } = this.props;
    return (
      <div className="am-result">
        <div className={'am-result-icon am-icon result-' + type}></div>
        <div className={'am-result-main am-result-main-' + type}>{main}</div>
        <div className="am-result-sub">{sub}</div>
        <div className="am-result-brief">{brief}</div>
      </div>
    );
  }
});
module.exports = Result;
