var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import assign from 'object-assign';
import splitObject from '../_util/splitObject';
export default class Modal extends React.Component {
    render() {
        let [{ prefixCls, className, transparent, animated, animation, maskAnimation, style }, restProps] = splitObject(this.props, ['prefixCls', 'className', 'transparent', 'animated',
            'animation', 'maskAnimation', 'style']);
        const wrapCls = classNames({
            [className]: !!className,
            [`${prefixCls}-transparent`]: transparent
        });
        let anim = animation || (animated ? 'slide' : null);
        let maskAnim = maskAnimation || (animated ? 'slide' : null);
        // transparent 模式下, 内容默认居中
        const rootStyle = transparent ? assign({
            width: '286px',
            height: 'auto',
        }, style) : assign({
            width: '100%',
            height: '100%',
        }, style);
        return (React.createElement(Dialog, __assign({animation: anim, maskAnimation: maskAnim, style: rootStyle, className: wrapCls, prefixCls: prefixCls}, restProps)));
    }
}
Modal.defaultProps = {
    prefixCls: 'am-modal',
    visible: false,
    closable: false,
    maskClosable: false,
    transparent: false,
    animated: true,
    style: {}
};
