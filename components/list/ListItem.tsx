/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import {
  BriefProps as BriefBasePropsType,
  ListItemPropsType as ListItemBasePropsType,
} from './PropsType';

export interface ListItemProps extends ListItemBasePropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface BriefProps extends BriefBasePropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
}

export class Brief extends React.Component<BriefProps, any> {
  render() {
    return (
      <div className="am-list-brief" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

class ListItem extends React.Component<ListItemProps, any> {
  static defaultProps: Partial<ListItemProps> = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
    platform: 'ios',
  };

  static Brief = Brief;
  debounceTimeout: any;

  constructor(props: ListItemProps) {
    super(props);
    this.state = {
      coverRippleStyle: { display: 'none' },
      RippleClicked: false,
    };
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }

  onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const { onClick, platform } = this.props;
    const isAndroid = platform === 'android';
    if (!!onClick && isAndroid) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
      const Item = ev.currentTarget;
      const RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
      const ClientRect = ev.currentTarget.getBoundingClientRect();
      const pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
      const pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
      const coverRippleStyle = {
        width: `${RippleWidth}px`,
        height: `${RippleWidth}px`,
        left: `${pointX}px`,
        top: `${pointY}px`,
      };
      this.setState(
        {
          coverRippleStyle,
          RippleClicked: true,
        },
        () => {
          this.debounceTimeout = setTimeout(() => {
            this.setState({
              coverRippleStyle: { display: 'none' },
              RippleClicked: false,
            });
          }, 1000);
        },
      );
    }

    if (onClick) {
      onClick(ev);
    }
  }

  render() {
    const {
      prefixCls,
      className,
      activeStyle,
      error,
      align,
      wrap,
      disabled,
      children,
      multipleLine,
      thumb,
      extra,
      arrow,
      onClick,
      ...restProps
    } = this.props;
    const { platform, ...otherProps } = restProps;
    const { coverRippleStyle, RippleClicked } = this.state;

    const wrapCls = classnames(`${prefixCls}-item`, className, {
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-error`]: error,
      [`${prefixCls}-item-top`]: align === 'top',
      [`${prefixCls}-item-middle`]: align === 'middle',
      [`${prefixCls}-item-bottom`]: align === 'bottom',
    });

    const rippleCls = classnames(`${prefixCls}-ripple`, {
      [`${prefixCls}-ripple-animate`]: RippleClicked,
    });

    const lineCls = classnames(`${prefixCls}-line`, {
      [`${prefixCls}-line-multiple`]: multipleLine,
      [`${prefixCls}-line-wrap`]: wrap,
    });

    const arrowCls = classnames(`${prefixCls}-arrow`, {
      [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
      [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
      [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
    });

    const content = (
      <div
        {...otherProps}
        onClick={ev => {
          this.onClick(ev);
        }}
        className={wrapCls}
      >
        {thumb ? (
          <div className={`${prefixCls}-thumb`}>
            {typeof thumb === 'string' ? <img src={thumb} /> : thumb}
          </div>
        ) : null}
        <div className={lineCls}>
          {children !== undefined && (
            <div className={`${prefixCls}-content`}>{children}</div>
          )}
          {extra !== undefined && (
            <div className={`${prefixCls}-extra`}>{extra}</div>
          )}
          {arrow && <div className={arrowCls} aria-hidden="true" />}
        </div>
        <div style={coverRippleStyle} className={rippleCls} />
      </div>
    );

    const touchProps: any = {};
    Object.keys(otherProps).forEach(key => {
      if (/onTouch/i.test(key)) {
        touchProps[key] = (otherProps as any)[key];
        delete (otherProps as any)[key];
      }
    });

    return (
      <TouchFeedback
        {...touchProps}
        disabled={disabled || !onClick}
        activeStyle={activeStyle}
        activeClassName={`${prefixCls}-item-active`}
      >
        {content}
      </TouchFeedback>
    );
  }
}

export default ListItem;
