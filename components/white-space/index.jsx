import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.less';

const WhiteSpace = React.createClass({
  propTypes: {
    mode: PropTypes.number,
  },
  getDefaultProps() {
    return {
      mode: 10
    };
  },
  render() {
    const { mode, className } = this.props;
    let wrapCls = classNames({
      'am-whitespace': true,
      [className] : className
    });
    wrapCls += ' am-whitespace-' + mode;

    return (
      <div className={wrapCls}/>
    );
  }
});

module.exports = WhiteSpace;
