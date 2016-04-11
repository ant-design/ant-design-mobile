import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.less';
function noop() {}

const Button = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    ghost: PropTypes.bool,
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    htmlType: PropTypes.string,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am-button',
      type: '',
      size: 'large',
      ghost: false,
      inline: false,
      disabled: false,
      onClick: noop,
      htmlType: '',
    };
  },
  _handleClick() {
    this.props.onClick(this);
  },

  render() {
    let { className, prefixCls, type, size, ghost, inline, disabled,
      htmlType, ...others } = this.props;

    const wrapCls = classNames({
      [className]: className,
      [prefixCls]: true,
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-ghost`]: ghost,
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-large`]: size === 'large',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
    });

    if (htmlType) {
      others.type = htmlType;
    }

    return (<button {...others}
      className={wrapCls}
      disabled={disabled}
      onClick={this._handleClick}
      >{this.props.children}</button>);
  }
});
module.exports = Button;
