import React from 'react';
import classNames from 'classnames';
import { ListItemProps, BriefProps } from './PropsType';
import getDataAttr from '../_util/getDataAttr';

export class Brief extends React.Component<BriefProps, any> {
  render() {
    return (
      <div className="am-list-brief" style={this.props.style}>{this.props.children}</div>
    );
  }
}

export default class ListItem extends React.Component<ListItemProps, any> {
  static Brief = Brief;

  static defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
  };

  // 给其他组件对其设置 extra 使用
  static myName = 'ListItem';

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  onTouchStart = () => {
    if (this.props.onClick) {
      this.setState({
        hover: true,
      });
    }
  };

  onTouchEnd = () => {
    if (this.props.onClick) {
      this.setState({
        hover: false,
      });
    }
  };

  render() {
    const {
      prefixCls, className, error, align, wrap,
      children, multipleLine, thumb, extra, arrow = '', style,
    } = this.props;

    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-error`]: error,
      [`${prefixCls}-item-top`]: align === 'top',
      [`${prefixCls}-item-middle`]: align === 'middle',
      [`${prefixCls}-item-bottom`]: align === 'bottom',
      [`${prefixCls}-item-hover`]: this.state.hover,
      [className as string]: className,
    });

    const lineCls = classNames({
      [`${prefixCls}-line`]: true,
      [`${prefixCls}-line-multiple`]: multipleLine,
      [`${prefixCls}-line-wrap`]: wrap,
    });

    const arrowCls = classNames({
      [`${prefixCls}-arrow`]: true,
      [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
      [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
      [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
    });

    return (
      <div {...getDataAttr(this.props)}
        className={wrapCls}
        onClick={this.onClick}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onTouchCancel={this.onTouchEnd}
        style={style}
      >
        {thumb ? <div className={`${prefixCls}-thumb`}>
          {typeof thumb === 'string' ? <img src={thumb} /> : thumb}
        </div> : null}
        <div className={lineCls}>
          {children ? <div className={`${prefixCls}-content`}>{children}</div> : null}
          {extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
          {arrow ? <div className={arrowCls} /> : null}
        </div>
      </div>
    );
  }
}
