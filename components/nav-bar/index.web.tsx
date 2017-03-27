import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import NavBarProps from './PropsType';

export default class NavBar extends React.Component<NavBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    iconName: 'left',
    onLeftClick() {
    },
  };

  render() {
    const {
      prefixCls, className, children, mode, iconName, leftContent, rightContent, onLeftClick,
      ...restProps,
    } = this.props;

    const wrapCls = classNames({
      [className as string]: className,
      [prefixCls as string]: true,
      [`${prefixCls}-${mode}`]: true,
    });

    return (
      <div {...restProps} className={wrapCls}>
        <div className={`${prefixCls}-left`} onClick={onLeftClick}>
          {iconName ? <span className={`${prefixCls}-left-icon`}><Icon type={iconName}/></span> : null}
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
