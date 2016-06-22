var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import splitObject from '../_util/splitObject';
export default props => {
    let [{ type, className }, restProps] = splitObject(props, ['type', 'className']);
    className += ` anticon anticon-${type}`;
    return React.createElement("i", __assign({className: className}, restProps));
};
