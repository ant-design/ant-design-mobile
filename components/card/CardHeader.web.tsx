import React, { PropTypes } from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';

export default class CardHeader extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    title: PropTypes.node,
    thumb: PropTypes.node,
    thumbStyle: PropTypes.object,
    extra: PropTypes.node,
  };

  static defaultProps = {
    prefixCls: 'am-card',
    thumbStyle: {}
  };

  render() {
    let [{prefixCls, children, className, title, thumb, thumbStyle, extra}, restProps] = splitObject(
      this.props,
      ['prefixCls', 'children', 'className', 'title', 'thumb', 'thumbStyle', 'extra']
    );
    const wrapCls = classNames({
      [`${prefixCls}-header`]: true,
      [className]: className
    });

    return (
      <div {...restProps} className={wrapCls}>
        <div className={`${prefixCls}-header-content`}>
          { thumb ? <img style={thumbStyle} src={thumb} /> : null }
          {title}
        </div>
        { extra ? <div className={`${prefixCls}-header-extra`}>{extra}</div> : null }
      </div>
    );
  }
}
