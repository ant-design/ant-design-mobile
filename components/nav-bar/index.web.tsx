import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import splitObject from '../_util/splitObject';

export interface NavBarProps {
  prefixCls?: string;
  children?: any;
  mode?: 'dark' | 'light';
  iconName?: string | boolean;
  leftContent?: any;
  rightContent?: any;
  onLeftClick?: () => void;
}

export default class NavBar extends React.Component<NavBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    iconName: 'left',
    onLeftClick() {
    },
  };

  render() {
    let [{
      prefixCls, children, mode, className, iconName, leftContent, rightContent, onLeftClick,
    }, restProps] = splitObject(this.props,
      ['prefixCls', 'children', 'mode', 'className',
        'iconName', 'leftContent', 'rightContent', 'onLeftClick']);
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
