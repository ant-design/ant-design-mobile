<<<<<<< 127d981ca6b9caeffdb476709f9897a7e17af30e
import * as React from 'react';
=======
import React from 'react';
>>>>>>> fix list
import Item from './ListItem';
import classNames from 'classnames';
import { ListProps } from './ListPropTypes';

class List extends React.Component<ListProps, any> {
<<<<<<< 127d981ca6b9caeffdb476709f9897a7e17af30e
  static Item: any;
=======
  static Item = Item;
>>>>>>> fix list

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let {prefixCls, children, className, style, renderHeader, renderFooter} = this.props;
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className,
    });

    return (
      <div className={wrapCls} style={style}>
<<<<<<< 127d981ca6b9caeffdb476709f9897a7e17af30e
        {renderHeader ? (<div className={`${prefixCls}-header`}>{renderHeader()}</div>) : null}
        {children ? (<div className={`${prefixCls}-body`}>{children}</div>) : null}
        {renderFooter ? (<div className={`${prefixCls}-footer`}>{renderFooter()}</div>) : null}
=======
        {headerDom}
        <div className={`${prefixCls}-body`}>{children}</div>
        {footerDom}
>>>>>>> fix list
      </div>
    );
  }
}

<<<<<<< 127d981ca6b9caeffdb476709f9897a7e17af30e
List.Item = Item;

=======
>>>>>>> fix list
export default List;
