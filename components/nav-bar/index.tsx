import classnames from 'classnames';
import * as React from 'react';
import { NavBarProps } from './PropsType';

export default class NavBar extends React.Component<NavBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    onLeftClick: () => {},
  };

  render() {
    const {
      prefixCls,
      className,
      children,
      mode,
      icon,
      onLeftClick,
      leftContent,
      rightContent,
      ...restProps
    } = this.props;

    return (
      <div
        {...restProps}
        className={classnames(className, prefixCls, `${prefixCls}-${mode}`)}
      >
        <div
          className={`${prefixCls}-left`}
          role="button"
          onClick={onLeftClick}
        >
          {icon ? (
          // tslint:disable-next-line:jsx-no-multiline-js
            <span className={`${prefixCls}-left-icon`} aria-hidden="true">
              {icon}
            </span>
          ) : null}
          {leftContent}
        </div>
        <div className={`${prefixCls}-title`}>{children}</div>
        <div className={`${prefixCls}-right`}>{rightContent}</div>
      </div>
    );
  }
}
