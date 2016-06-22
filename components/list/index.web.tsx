import Header from './ListHeader';
import Body from './ListBody';
import Footer from './ListFooter';
import Item from './ListItem';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
class List extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let [{prefixCls, children, className}, restProps] = splitObject(this.props,
      ['prefixCls', 'children', 'className']);
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className
    });

    return (
      <div {...restProps} className={wrapCls}>
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
