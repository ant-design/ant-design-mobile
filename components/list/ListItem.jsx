import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

export default class ListItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    line: PropTypes.number,
    extra: PropTypes.oneOfType([PropTypes.string, React.PropTypes.object, React.PropTypes.node]),
    icon: PropTypes.string,
    thumb: PropTypes.oneOfType([PropTypes.string, React.PropTypes.object, React.PropTypes.node]),
    arrow: PropTypes.oneOf(['horizontal', 'down', 'up', 'empty', '']),
    needActive: PropTypes.bool,
    onClick: PropTypes.func,
    error: PropTypes.bool,
    align: PropTypes.string,
    isLastItem: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-list',
    link: '',
    line: 1,
    onClick: noop,
    thumb: '',
    arrow: '',
    needActive: true,
    error: false,
    align: 'middle',
    isLastItem: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onClick = (e) => {
    this.props.onClick(e);
  };

  onTouchStart = () => {
    if (this.props.needActive) {
      this.setState({
        hover: true,
      });
    }
  };

  onTouchEnd = () => {
    if (this.props.needActive) {
      this.setState({
        hover: false,
      });
    }
  };

  render() {
    let { style, thumb, arrow, line, error, children, extra, className, align, prefixCls, isLastItem } = this.props;
    let { hover } = this.state;
    let thumbDom;
    let arrowDom;

    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-13`]: line === 2,
      [`${prefixCls}-item-error`]: error,
      [`${prefixCls}-item-top`]: align === 'top',
      [`${prefixCls}-item-middle`]: align === 'middle',
      [`${prefixCls}-item-bottom`]: align === 'bottom',
      [`${prefixCls}-item-hover`]: hover,
      [`${prefixCls}-item-last`]: isLastItem,
      [`${prefixCls}-item-radio`]: extra && extra.type && extra.type.name === 'Radio',
      [`${prefixCls}-item-checkbox`]: thumb && thumb.type && thumb.type.name === 'Checkbox',
      [className]: className
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
        style={style}
        onClick={this.onClick}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onTouchCancel={this.onTouchEnd}
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
