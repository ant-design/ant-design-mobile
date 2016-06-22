var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import Tooltip from 'rc-tooltip';
import Item from './item';
import splitObject from '../_util/splitObject';
function recursiveCloneChildren(children, cb = ch => ch) {
    return React.Children.map(children, child => {
        const newChild = cb(child);
        if (newChild && newChild.props && newChild.props.children) {
            return React.cloneElement(newChild, {}, recursiveCloneChildren(newChild.props.children, cb));
        }
        return newChild;
    });
}
export default class FloatMenu extends React.Component {
    render() {
        let [{ children, prefixCls, placement, trigger, overlay, onSelect, popupAlign }, restProps] = splitObject(this.props, ['children', 'prefixCls', 'placement', 'trigger', 'overlay', 'onSelect', 'popupAlign']);
        const newChildren = recursiveCloneChildren(overlay, (child) => {
            const extraProps = {};
            if (child && child.type && child.type.FloatMenuItem && !child.props.disabled) {
                extraProps.onClick = () => {
                    onSelect(child);
                };
                return React.cloneElement(child, extraProps);
            }
            return child;
        });
        return (React.createElement(Tooltip, __assign({prefixCls: prefixCls, placement: placement, trigger: trigger, overlay: newChildren, popupAlign: popupAlign}, restProps), children));
    }
}
FloatMenu.propTypes = {
    prefixCls: PropTypes.string,
    placement: PropTypes.string,
    popupAlign: PropTypes.object,
    trigger: PropTypes.array,
    onSelect: PropTypes.func,
};
FloatMenu.defaultProps = {
    prefixCls: 'am-floatmenu',
    placement: 'bottomRight',
    popupAlign: { overflow: { adjustY: 0, adjustX: 0 } },
    trigger: ['click'],
    onSelect: () => { },
};
FloatMenu.Item = Item;
