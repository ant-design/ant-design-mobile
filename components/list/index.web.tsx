import * as React from 'react';
import Header from './ListHeader';
import Body from './ListBody';
import Footer from './ListFooter';
import Item from './ListItem';
import classNames from 'classnames';
import { ListProps } from './ListPropTypes';
import ReactElement = __React.ReactElement;

// compact
function isBodyHeaderFooter(children) {
  let isOld;
  React.Children.forEach(children, (c) => {
    const type = c && (c as ReactElement<any>).type;
    if (type === Header || type === Footer || type === Body) {
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
    let {prefixCls, children, className, style, title, footer} = this.props;
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className,
    });

    return (
      <div className={wrapCls} style={style}>
        {title ? <Header>{title}</Header> : null}
        {isBodyHeaderFooter(children) ? children :<Body prefixCls={prefixCls}>{children}</Body>}
        {footer ? <Footer>{footer}</Footer> : null}
      </div>
    );
  }
}

List.Header = Header;
List.Body = Body;
List.Footer = Footer;
List.Item = Item;

export default List;
