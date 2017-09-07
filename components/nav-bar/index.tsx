/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classnames from 'classnames';
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

    const wrapCls = classnames(prefixCls, `${prefixCls}-${mode}`, className);

    return (
      <div {...restProps} className={wrapCls}>
        <div className={`${prefixCls}-left`} role="button" onClick={onLeftClick}>
          <span className={`${prefixCls}-left-icon`} aria-hidden="true">
            {typeof iconName === 'string' ? <Icon type={iconName}/> : iconName}
          </span>
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
