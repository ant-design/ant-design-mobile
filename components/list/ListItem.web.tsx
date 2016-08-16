import * as React from 'react';
import classNames from 'classnames';

export interface ListItemProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  thumb: React.ReactNode;
  extra?: React.ReactNode;
  arrow?: 'horizontal'|'down'|'up'|'empty'|'';
  align?: string;
  onClick?: Function;
  error?: boolean;
  multipleLine?: boolean;
  children?: any;
}

export interface ListItemState {
  hover: boolean;
}

class Brief extends React.Component<any, any> {
  render() {
    return (
      <div className="am-list-brief">{this.props.children}</div>
    );
  }
}

export default class ListItem extends React.Component<ListItemProps, ListItemState> {
  static Brief = Brief;

  static defaultProps = {
    prefixCls: 'am-list',
    thumb: '',
    arrow: '',
    children: '',
    extra: '',
    error: false,
    multipleLine: false,
    align: 'middle',
  };

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
    let { prefixCls, thumb, arrow, error, children, extra, className, align, multipleLine, style } = this.props;
    let { hover } = this.state;
    let thumbDom;
    let arrowDom;

    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-error`]: error,
      [`${prefixCls}-item-top`]: align === 'top',
      [`${prefixCls}-item-middle`]: align === 'middle',
      [`${prefixCls}-item-bottom`]: align === 'bottom',
      [`${prefixCls}-item-hover`]: hover,
      [className]: className,
    });

    const lineCls = classNames({
      [`${prefixCls}-line`]: true,
      [`${prefixCls}-line-multiple`]: multipleLine,
    });

    const arrowCls = classNames({
      [`${prefixCls}-arrow`]: true,
      [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
      [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
      [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
    });

    if (thumb) {
      if (typeof thumb === 'string') {
        thumbDom = <div className={`${prefixCls}-thumb`}><img src={thumb} /></div>;
      } else {
        thumbDom = <div className={`${prefixCls}-thumb`}>{thumb}</div>;
      }
    }

    /* arrow有值，则保留这个dom坑位 */
    if (arrow !== '') {
      arrowDom = (<div className={arrowCls} />);
    } else {
      arrowDom = null;
    }

    return (
      <div
        className={wrapCls}
        onClick={this.onClick}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onTouchCancel={this.onTouchEnd}
        style={style}
      >
        {thumbDom}
        <div className={lineCls}>
          {children !== '' ? <div className={`${prefixCls}-content`}>{children}</div> : null}
          {extra !== '' ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
          {arrowDom}
        </div>
      </div>
    );
  }
}
