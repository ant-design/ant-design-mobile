import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icon';

export default class NavBar extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.any,
    mode: PropTypes.oneOf(['dark', 'light']),
    iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    leftContent: PropTypes.any,
    rightContent: PropTypes.any,
    onLeftClick: PropTypes.func,
  }

  static defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    iconName: 'left',
    onLeftClick: () => {},
  }

  render() {
    const { prefixCls, children, mode, className, iconName, leftContent, rightContent, onLeftClick, ...other } = this.props;
    const wrapCls = classNames({
      [className]: className,
      [prefixCls]: true,
      [`${prefixCls}-${mode}`]: true,
    });
    return (
      <div {...other} className={wrapCls}>
        <div className={`${prefixCls}-left`} onClick={onLeftClick}>
          {iconName ? <span className={`${prefixCls}-left-icon`}><Icon type={iconName} /></span> : null}
          <span className={`${prefixCls}-left-content`}>{leftContent}</span>
        </div>
        <div className={`${prefixCls}-title`}>{children}</div>
        <div className={`${prefixCls}-right`}>
          {rightContent}
        </div>
      </div>
    );
  }
}
