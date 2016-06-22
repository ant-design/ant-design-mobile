var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import Header from './ListHeader';
import Body from './ListBody';
import Footer from './ListFooter';
import Item from './ListItem';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
class List extends React.Component {
    render() {
        let [{ prefixCls, children, className }, restProps] = splitObject(this.props, ['prefixCls', 'children', 'className']);
        const wrapCls = classNames({
            [prefixCls]: true,
            [className]: className
        });
        return (React.createElement("div", __assign({}, restProps, {className: wrapCls}), children));
    }
}
List.propTypes = {
    prefixCls: PropTypes.string,
};
List.defaultProps = {
    prefixCls: 'am-list',
};
List.Header = Header;
List.Body = Body;
List.Footer = Footer;
List.Item = Item;
export default List;
