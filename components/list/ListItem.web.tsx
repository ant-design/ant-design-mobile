import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';

export interface ListItemProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  thumb: React.ReactNode;
  extra?: React.ReactNode;
  arrow?: 'horizontal'|'down'|'up'|'empty'|'';
  align?: string;
  onClick?: Function;
  error?: boolean;
}

export interface ListItemState {
  hover: boolean;
}

export default class ListItem extends React.Component<ListItemProps, ListItemState> {
  static propTypes = {
    prefixCls: PropTypes.string,
    thumb: PropTypes.oneOfType([PropTypes.string, React.PropTypes.node]),
    extra: PropTypes.oneOfType([PropTypes.string, React.PropTypes.node]),
    arrow: PropTypes.oneOf(['horizontal', 'down', 'up', 'empty', '']),
    align: PropTypes.string,
    onClick: PropTypes.func,
    error: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-list',
    thumb: '',
    arrow: '',
    error: false,
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
      this.setState({
        hover: true,
      });
      setTimeout(() => {
        this.setState({
          hover: false,
        });
      }, 200);
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
    let { prefixCls, thumb, arrow, error, children, extra, className, align, style } = this.props;
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

    const arrowCls = classNames({
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
      /* 当值是horizontal时,渲染水平箭头 */
      if (arrow === 'empty') {
        arrowDom = (<div className={`${prefixCls}-arrow`} />);
      } else {
        arrowDom = (<div className={`${prefixCls}-arrow`}><span className={arrowCls} /></div>);
      }
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
        <div className={`${prefixCls}-line`}>
          {children ? <div className={`${prefixCls}-content`}>{children}</div> : null}
          {extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
          {arrowDom}
        </div>
      </div>
    );
  }
}
