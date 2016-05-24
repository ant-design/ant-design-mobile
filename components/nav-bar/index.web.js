import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icon';

export default class NavBar extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.any,
    iconName: PropTypes.string,
    leftContent: PropTypes.any,
    rightContent: PropTypes.any,
    onLeftClick: PropTypes.func,
  }

  static defaultProps = {
    prefixCls: 'am-navbar',
    iconName: 'left',
    onLeftClick: () => {},
  }

  render() {
    const { prefixCls, children, className, leftContent, rightContent, onLeftClick, ...other } = this.props;
    const wrapCls = classNames({
      [className]: className,
      [prefixCls]: true,
    });
    return (
      <div {...other} className={wrapCls}>
        <div className={`${prefixCls}-left`} onClick={onLeftClick}>
          <span className={`${prefixCls}-left-icon`}><Icon type="left" /></span>
          <span className={`${prefixCls}-left-content`}>{leftContent}</span>
        </div>
        <div className={`${prefixCls}-title`}>{children}</div>
        <div className={`${prefixCls}-right`}>{rightContent}</div>
      </div>
    );
  }
}
