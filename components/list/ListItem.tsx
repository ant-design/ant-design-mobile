/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classnames from 'classnames';
import { ListItemProps as ListItemBasePropsType, BriefProps as BriefBasePropsType } from './PropsType';
import TouchFeedback from 'rmc-feedback';

export interface ListItemProps extends ListItemBasePropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
}

export interface BriefProps extends BriefBasePropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
}

export class Brief extends React.Component<BriefProps, any> {
  render() {
    return (
      <div className="am-list-brief" style={this.props.style}>{this.props.children}</div>
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

  constructor(props) {
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

  onClick = (ev) => {
    const { onClick, platform } = this.props;
    const isAndroid = platform === 'android';
    if (!!onClick && isAndroid) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
      let Item = ev.currentTarget;
      let RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
      const ClientRect = ev.currentTarget.getBoundingClientRect();
      let pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
      let pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
      const coverRippleStyle = {
        width: `${RippleWidth}px`,
        height: `${RippleWidth}px`,
        left: `${pointX}px`,
        top: `${pointY}px`,
      };
      this.setState({
        coverRippleStyle,
        RippleClicked: true,
      }, () => {
        this.debounceTimeout = setTimeout(() => {
          this.setState({
            coverRippleStyle: { display: 'none' },
            RippleClicked: false,
          });
        }, 1000);
      });
    }

    if (onClick) {
      onClick(ev);
    }
  }

  render() {

    const {
      prefixCls, className, activeStyle, error, align, wrap, disabled,
      children, multipleLine, thumb, extra, arrow, onClick, ...restProps,
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

    const content = <div
      {...otherProps}
      onClick={(ev) => {
        this.onClick(ev);
      }}
      className={(wrapCls)}
    >
      {thumb ? <div className={`${prefixCls}-thumb`}>
        {typeof thumb === 'string' ? <img src={thumb} /> : thumb}
      </div> : null}
      <div className={lineCls}>
        {children !== undefined && <div className={`${prefixCls}-content`}>{children}</div>}
        {extra !== undefined && <div className={`${prefixCls}-extra`}>{extra}</div>}
        {arrow && <div className={arrowCls} aria-hidden="true" />}
      </div>
      <div style={coverRippleStyle} className={rippleCls} />
    </div>;

    const touchProps = {};
    Object.keys(otherProps).forEach(key => {
      if (/onTouch/i.test(key)) {
        touchProps[key] = otherProps[key];
        delete otherProps[key];
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
