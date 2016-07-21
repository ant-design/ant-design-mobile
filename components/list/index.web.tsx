import * as React from 'react';
import { PropTypes } from 'react';
import Header from './ListHeader';
import Body from './ListBody';
import Footer from './ListFooter';
import Item from './ListItem';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';

export interface ListProps {
  prefixCls?: string;
  style?: React.CSSProperties;
}

class List extends React.Component<ListProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let [{prefixCls, children, className, style}, restProps] = splitObject(this.props,
      ['prefixCls', 'children', 'className']);
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className,
    });

    return (
      <div {...restProps} className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}

List.Header = Header;
List.Body = Body;
List.Footer = Footer;
List.Item = Item;

export default List;
