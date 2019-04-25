import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';

export interface PopoverItemProps {
  className?: string;
  prefixCls?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  firstItem?: string;
  activeStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}
export default class Item extends React.Component<PopoverItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-popover',
    disabled: false,
  };
  static myName = 'PopoverItem';

  render() {
    const {
      children,
      className,
      prefixCls,
      icon,
      disabled,
      firstItem,
      activeStyle,
      ...restProps
    } = this.props;
    const cls = classnames(`${prefixCls}-item`, className, {
      [`${prefixCls}-item-disabled`]: disabled,
    });

    let activeClass = `${prefixCls}-item-active `;
    if (firstItem) {
      activeClass += `${prefixCls}-item-fix-active-arrow`;
    }

    return (
      <TouchFeedback
        disabled={disabled}
        activeClassName={activeClass}
        activeStyle={activeStyle}
      >
        <div className={cls} {...restProps}>
          <div className={`${prefixCls}-item-container`}>
            {icon ? (
            // tslint:disable-next-line:jsx-no-multiline-js
              <span className={`${prefixCls}-item-icon`} aria-hidden="true">
                {icon}
              </span>
            ) : null}
            <span className={`${prefixCls}-item-content`}>{children}</span>
          </div>
        </div>
      </TouchFeedback>
    );
  }
}
