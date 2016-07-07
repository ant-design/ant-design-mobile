import React, { PropTypes } from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';

interface CardFooterProps {
  prefixCls?:string;
  content?:any;
  extra?:any;
}

export default class CardFooter extends React.Component <CardFooterProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    content: PropTypes.node,
    extra: PropTypes.node,
  };

  static defaultProps = {
    prefixCls: 'am-card',
  };

  render() {
    let [{prefixCls, content, className, extra}, restProps] = splitObject(
      this.props, ['prefixCls', 'content', 'className', 'extra']
    );
    const wrapCls = classNames({
      [`${prefixCls}-footer`]: true,
      [className]: className
    });

    return (
      <div {...restProps} className={wrapCls}>
        <div className={`${prefixCls}-footer-content`}>{content}</div>
        {
          extra ? (
            <div className={`${prefixCls}-footer-extra`}>{extra}</div>
          ) : null
        }
      </div>
    );
  }
}
