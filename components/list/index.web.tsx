import * as React from 'react';
import Body from './ListBody';
import Item from './ListItem';
import classNames from 'classnames';
import { ListProps } from './ListPropTypes';
import ReactElement = __React.ReactElement;

// compact
function isBodyHeaderFooter(children) {
  let isOld;
  React.Children.forEach(children, (c) => {
    const type = c && (c as ReactElement<any>).type;
    if (type === Body) {
      isOld = true;
    }
  });
  return isOld;
}

class List extends React.Component<ListProps, any> {
  static Header: any;
  static Body: any;
  static Footer: any;
  static Item: any;

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let {prefixCls, children, className, style, renderHeader, renderFooter} = this.props;
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className,
    });

    let headerDom = null;
    let footerDom = null;

    if (renderHeader) {
      headerDom = <div className={`${prefixCls}-header`}>{renderHeader()}</div>;
    }
    if (renderFooter) {
      footerDom = <div className={`${prefixCls}-footer`}>{renderFooter()}</div>;
    }

    return (
      <div className={wrapCls} style={style}>
        {headerDom}
        {isBodyHeaderFooter(children) ? children :<Body prefixCls={prefixCls}>{children}</Body>}
        {footerDom}
      </div>
    );
  }
}

List.Body = Body;
List.Item = Item;

export default List;
